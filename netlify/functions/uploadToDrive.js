const { google } = require('googleapis');

/**
 * Netlify Function to upload a file to Google Drive using a service account.
 * The service account credentials are supplied via the environment variable
 * GOOGLE_SERVICE_ACCOUNT_JSON and the destination folder via DRIVE_FOLDER_ID.
 *
 * The function expects a POST request with a JSON body containing
 * `{ fileName: string, mimeType: string, data: base64String }`. It decodes
 * the base64 data into a Buffer, constructs the Drive API request, and
 * returns the created file’s ID, size and MIME type.
 */
exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
    // In order to support Netlify’s environment variable limitations (which
    // do not handle multi‑line values well), we expect the service account
    // JSON to be provided as a base64‑encoded string via the
    // GOOGLE_SERVICE_ACCOUNT_JSON environment variable. Decode it here.
    const serviceAccountEnv = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    const folderId = process.env.DRIVE_FOLDER_ID;
    if (!serviceAccountEnv || !folderId) {
      return {
        statusCode: 500,
        body: 'Server not configured for Drive uploads'
      };
    }
    const { fileName, mimeType, data } = JSON.parse(event.body || '{}');
    if (!fileName || !data) {
      return { statusCode: 400, body: 'Missing fileName or data' };
    }
    let credentials;
    try {
      // The credentials may be provided either as raw JSON (starting with '{')
      // or as a base64‑encoded string. Detect the form and parse accordingly.
      const trimmed = serviceAccountEnv.trim();
      let jsonString;
      if (trimmed.startsWith('{')) {
        // Raw JSON value. Use as is.
        jsonString = trimmed;
      } else {
        // Base64‑encoded value. Decode to get the JSON string.
        jsonString = Buffer.from(serviceAccountEnv, 'base64').toString('utf8');
      }
      credentials = JSON.parse(jsonString);
    } catch (err) {
      return {
        statusCode: 500,
        body: 'Invalid service account credentials'
      };
    }
    const auth = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      ['https://www.googleapis.com/auth/drive']
    );
    const drive = google.drive({ version: 'v3', auth });
    // Decode base64 string into a Buffer
    const fileBuffer = Buffer.from(data, 'base64');
        // The googleapis client library expects `media.body` to be a stream with
        // a `pipe()` method. Passing a plain Buffer causes the error
        // "part.body.pipe is not a function". Wrap the buffer into a
        // Readable stream using Readable.from().
        const { Readable } = require('stream');
        const bufferStream = Readable.from(fileBuffer);
        // Do not attempt to decode the file name here. It will have been
        // percent‑encoded by the client, so pass it through unmodified. The
        // Drive API will store it as provided.
        const res = await drive.files.create({
          requestBody: {
            name: fileName,
            parents: [folderId]
          },
          media: {
            mimeType: mimeType || 'application/octet-stream',
            body: bufferStream
          },
          fields: 'id,size,mimeType'
        });
    return {
      statusCode: 200,
      body: JSON.stringify(res.data)
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};

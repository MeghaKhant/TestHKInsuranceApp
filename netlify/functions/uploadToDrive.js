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
    const serviceAccountJsonB64 = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    const folderId = process.env.DRIVE_FOLDER_ID;
    if (!serviceAccountJsonB64 || !folderId) {
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
      // Decode the base64 string back into the original JSON. If this fails,
      // return an error so the caller knows the credentials are invalid.
      const decoded = Buffer.from(serviceAccountJsonB64, 'base64').toString('utf8');
      credentials = JSON.parse(decoded);
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
        // Do not attempt to decode the file name here. It will have been
        // percent‑encoded by the client, so pass it through unmodified. The
        // Drive API will store it as provided. If the name contains encoded
        // sequences, they will appear decoded in Drive.
        const res = await drive.files.create({
          requestBody: {
            name: fileName,
            parents: [folderId]
          },
          media: {
            mimeType: mimeType || 'application/octet-stream',
            body: fileBuffer
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

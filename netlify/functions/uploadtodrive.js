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
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    const folderId = process.env.DRIVE_FOLDER_ID;
    if (!serviceAccountJson || !folderId) {
      return { statusCode: 500, body: 'Server not configured for Drive uploads' };
    }
    const { fileName, mimeType, data } = JSON.parse(event.body || '{}');
    if (!fileName || !data) {
      return { statusCode: 400, body: 'Missing fileName or data' };
    }
    const credentials = JSON.parse(serviceAccountJson);
    const auth = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      ['https://www.googleapis.com/auth/drive']
    );
    const drive = google.drive({ version: 'v3', auth });
    // Decode base64 string into a Buffer
    const fileBuffer = Buffer.from(data, 'base64');
    const res = await drive.files.create({
      requestBody: {
        name: decodeURIComponent(fileName),
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
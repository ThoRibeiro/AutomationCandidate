import { google } from "googleapis";
import { JWT } from "google-auth-library";

export async function writeToGoogleSheet(dataToWrite) {

  const credentials = require("../../../credentials/json/service-accounts-key.json");

  const client = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1I8OHVe88v8Y7_vP4rVGn0t9i9kw8F3nMH5A8ZuTuguQ";

  const data = dataToWrite.map(value => [value.date, value.offerTitle, value.company]);

  try {
    const sheetName = `Sheet_${Date.now()}`;

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      requestBody: {
        requests: [{
          addSheet: {
            properties: {
              title: sheetName,
            },
          },
        }],
      },
    });

    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: data,
      },
    });

    console.log(`Cells updated.`);
  } catch (error) {
    console.error('Error writing to Google Sheets:', error);
  }
}

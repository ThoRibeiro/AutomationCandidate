import { google } from 'googleapis';
import { TableGoogleSheet } from "@common/data/interfaces/googleSheet"

export class WriteInGoogleSheet {
    private googleAuth: {
        clientEmail: string;
        privateKey: string;
        spreadsheetId: string;
    };

    constructor(googleAuth: { clientEmail: string; privateKey: string; spreadsheetId: string }) {
        this.googleAuth = googleAuth;
    }

    async writeInGoogleSheet(value: TableGoogleSheet) {

        const googleAuth = {
            clientEmail: process.env.clientEmail,
            privateKey: process.env.clientKey,
            spreadsheetId: process.env.spreadsheetId,
        };

        const auth = new google.auth.JWT({
            email: this.googleAuth.clientEmail,
            key: this.googleAuth.privateKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        });
        const sheets = google.sheets({ version: 'v4', auth });

        await sheets.spreadsheets.values.update({
            spreadsheetId: this.googleAuth.spreadsheetId,
            range: "A"+value.index,
            valueInputOption: 'RAW',
            requestBody: {
                values: [[value.email]],
            },
        });
    }
}

const nodemailer = require('nodemailer');
const fs = require('fs');

// Konfiguration für den E-Mail-Versand
const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // SMTP-Server
    port: 465, // SMTP-Port
    secure: true, // SMTP-Verschlüsselung (true für SSL, false für STARTTLS)
    auth: {
        user: 'n.faizy@buddy2learn.com', // Deine E-Mail-Adresse
        pass: 'sxeknmfksdnfplsdmfmsSS11!' // Dein Passwort
    }
});

// Empfänger der E-Mail
const to = 'n.faizy@aytu.de'; // E-Mail-Adresse des Empfängers (mehrere Empfänger hinzufügen)

// Betreff und Text der E-Mail
const subject = 'Testbericht';
const text = 'Anbei finden Sie den Testbericht als Anhang.';

// Dateiname des Testberichts
const reportFileName = 'index.html';

// Pfad zum Testbericht
const filePath = `C:\\Users\\afg_p\\Desktop\\Cypress\\cypress\\reports\\${reportFileName}`; 

// Stream für den Inhalt der HTML-Datei erstellen
const htmlStream = fs.createReadStream(filePath);

// Optionen für den E-Mail-Versand
const mailOptions = {
    from: 'n.faizy@buddy2learn.com', // Absender
    to: to, // Empfänger
    subject: subject, // Betreff
    text: text, // Text der E-Mail
    attachments: [{ filename: reportFileName, content: htmlStream }] // Anhang (Testbericht)
};

// E-Mail senden
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.error('Fehler beim Senden der E-Mail:', err);
    } else {
        console.log('E-Mail erfolgreich versendet:', info.response);
    }
});

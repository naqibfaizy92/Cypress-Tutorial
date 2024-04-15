const nodemailer = require('nodemailer');
const fs = require('fs');

// Konfiguration für den E-Mail-Versand
const transporter = nodemailer.createTransport({
    host: 'hostname', // SMTP-Server
    port: 'portnumber', // SMTP-Port
    secure: true, // SMTP-Verschlüsselung (true für SSL, false für STARTTLS)
    auth: {
        user: 'email', // Deine E-Mail-Adresse
        pass: 'password' // Dein Passwort
    }
});

// Empfänger der E-Mail
const to = 'email'; // E-Mail-Adresse des Empfängers (mehrere Empfänger hinzufügen)

// Betreff und Text der E-Mail
const subject = 'Testbericht';
const text = 'Anbei finden Sie den Testbericht als Anhang.';

// Dateiname des Testberichts
const reportFileName = 'index.html';

// Pfad zum Testbericht
const filePath = `PfadZumTestbericht\\${reportFileName}`; 

// Stream für den Inhalt der HTML-Datei erstellen
const htmlStream = fs.createReadStream(filePath);

// Optionen für den E-Mail-Versand
const mailOptions = {
    from: 'email', // Absender
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

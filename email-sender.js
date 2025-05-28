// email-sender.js
const nodemailer = require('nodemailer');

//-----------------------------------------------------------------------------
// !! IMPORTANT !!
// Replace with your actual email provider's details and credentials.
// For Gmail, you'll need an "App Password" if 2FA is enabled, or
// to enable "Less secure app access" (not recommended for security).
//
// PS: Don't forget to delete your personal information before uploading it to GitHub :)
//-----------------------------------------------------------------------------
const SENDER_EMAIL_ADDRESS = 'YOUR_EMAIL@example.com'; // e.g., your_gmail_address@gmail.com
const SENDER_EMAIL_PASSWORD = 'YOUR_EMAIL_PASSWORD_OR_APP_PASSWORD'; // Your email password or app-specific password
const RECIPIENT_EMAIL_ADDRESS = 'YOUR_EMAIL@example.com'; // Send it to yourself for testing

let transporter = nodemailer.createTransport({
  service: 'gmail', // Or your email provider
  auth: {
    user: SENDER_EMAIL_ADDRESS,
    pass: SENDER_EMAIL_PASSWORD
  }
});

let mailOptions = {
  from: `"Your Name or App" <${SENDER_EMAIL_ADDRESS}>`,
  to: RECIPIENT_EMAIL_ADDRESS,
  subject: 'Hello from Node.js Nodemailer (VS Code Test) ✔',
  text: 'Hello world? This is a test email sent from Node.js via VS Code.',
  html: '<b>Hello world?</b><p>This is a test email sent from Node.js via VS Code.</p>'
};

if (SENDER_EMAIL_ADDRESS === 'YOUR_EMAIL@example.com' || SENDER_EMAIL_PASSWORD === 'YOUR_EMAIL_PASSWORD_OR_APP_PASSWORD') {
  console.warn("Please configure your email credentials in email-sender.js before running.");
  console.warn("Read the comments in the file for instructions and security warnings.");
} else {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error('Error sending email:', error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}
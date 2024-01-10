require('dotenv').config();

module.exports = {

    // Email notifier account (sender)
    host: process.env.host,
    port: process.env.PORT, // Sender email port
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // Sender email password

    // Your email to receive notification (receiver)  
    from: process.env.SMTP_USER, // Sender email address
    to: process.env.TO_EMAIL, // Your email address
    subject: 'Contact Us', // Subject
};
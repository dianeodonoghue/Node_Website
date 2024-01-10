var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const config = require('./config');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About Us', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Us', menuId:'contact', msg: ''});
});

router.get('/send', function(req, res, next) {
        res.render('contact', {page:'Contact Us', menuId:'contact'});
      });

// Post Email Request
router.post('/send', function(req, res, next) {
  // Email Template
  const output = `
      <p>You have a message</p>
      <h3>Contact Details</h3>
      <p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <h3>Message</h3>
      <p>${req.body.message}</p>
  `;

  // Alert if successfully sending email
  const successAlert = `
      <div class="alert alert-success alert-dismissible" role="alert"">
              Message has been sent
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
              </button>
      </div>
  `;

  // Alert if failed to sending email
  const failAlert = `
      <div class="alert alert-warning alert-dismissible" role="alert ">
              Failed to send message. Please refresh this page
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
              </button>
      </div>
  `;

/*
  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
          host:  config.host,
          port: config.port,
          secure: false,
          auth: {
                  user: config.user,
                  pass: config.pass
          },
          tls: {
    rejectUnauthorized: false
  }
  });
*/
  // Use this is you want to use Gmail SMTP
  let transporter = nodemailer.createTransport(
             `smtps://${config.user}:${config.pass}@smtp.gmail.com`
     );

  // Setup email settings
  let mailOptions = {
          from: config.from,
          to: config.to,
          subject: config.subject,
          html: output
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
                  console.error('Error sending email:', error);;     
                  res.render('contact', {msg: failAlert, page:'contact', menuId:'contact'});
          } else {
          console.log('Email sent:', info.response);
          res.render('contact', {msg: successAlert, page:'contact', menuId:'contact'});
          }
  });
});

module.exports = router;
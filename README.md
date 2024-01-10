# Node Website 
Website built using Node, containing "Homepage", "About Us", and "Contact Us" pages. The "Contact Us" page contains a contact form build with Bootstrap and Nodemailer that will send an email to the designated email address with contact info

### Installation
1. Install the dependencies and start the server.
```
$ git clone https://github.com/dianeodonoghue/Node_Website.git
$ cd Node_Website
$ npm install && npm start
```
2. Open in browser
```
http://localhost:5000

```

### Configuration
To send the contact form to a designated email address, create a ".env" file with the following information:

```
SMTP_HOST="Sender Email Host"
SMTP_PORT="Sender Email Port"
SMTP_USER="Sender Email Address"
SMTP_PASS="Sender Email Password"
TO_EMAIL="Receiver Email Address"
```
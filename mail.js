var nm = require('nodemailer');

var tp = nm.createTransport({
  service: 'gmail',
  auth: {
    user: 'email',
    pass: 'passwrd'
  }
});

var mailOptions = {
  from: '',
  to: '',
  subject: 'Sending Email using Node.js',
  text: 'Piece of cake !'
};

tp.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());


// setup e-mail data
app.post('/api/comments', function(req, res) {
  
/*///////// START - THE NODEMAILER PART ///////////*/
  
  // setup e-mail data
  var mailOptions = {
      from: '"'+req.body.author+'" <'+process.env.TEST_SENDER+'>', // sender address
      to: process.env.TEST_RECIPIENT, // list of receivers
      subject: 'Test Mail', // Subject line
      text: req.body.text, // plaintext body
      html: '<b>'+req.body.text+'</b>' // html body
  };
  
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
  
/*///////// END - THE NODEMAILER PART ///////////*/
  
  var mailDetails = {
    id: Date.now(),
    author: "From: "+req.body.author+" <"+process.env.TEST_SENDER+">, To: "+process.env.TEST_RECIPIENT,
    text: "Saying: "+req.body.text,
  };
  comments.push(mailDetails);
  
});


app.listen(4001, () => console.log('Listening on port 4001.'));

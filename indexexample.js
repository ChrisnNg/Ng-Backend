const express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

var transport = {
  host: "hotmail",
  auth: {
    user: "cristopherng@hotmail.com",
    pass: "Kirako123431!"
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name,
    to: "cristopherng@hotmail.com", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content
  };

  console.log("req", req);
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

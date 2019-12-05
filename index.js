require("dotenv").config();
const express = require("express");
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
const app = express();

var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: process.env.API_EMAIL,
    pass: process.env.API_PASSWORD
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

// Serve the static files from the React app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// An api endpoint that returns a short list of items
app.post("/send", (req, res) => {
  var list = ["item1", "item2", "item3"];
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${content} `;

  var mail = {
    from: name,
    to: "cristopherng@hotmail.com", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content
  };

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

  console.log("Sent list of items");
  console.log(req.body);
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.send("unknown url");
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);

const express = require("express");
var nodemailer = require("nodemailer");

const app = express();

// Serve the static files from the React app
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
  var list = req;
  res.json(list);
  console.log("Sent list of items");
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.send("unknown url");
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);

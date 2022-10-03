const express = require("express");
const app = express();
const path = require("path");

app.get("/", function (req, res) {
  res.send("I am /");
});

app.get("/home", function (req, res) {
  res.send("I am /home");
});

app.get("/about", function (req, res) {
  console.log(path.join(__dirname, "index.html"));
  res.send("I am /about");
});

app.get("/html", function (req, res) {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
});

app.use("*", function (req, res) {
  res.send("Incorrect Route");
});

app.listen(3000, function () {
  console.log(`Listening on Port 3000`);
});

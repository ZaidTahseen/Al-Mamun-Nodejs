const express = require("express");
const app = express();
const path = require("path");

app.use((request, response, middlware) => {
  console.log("I am a middleware!!");
  middlware();
});

app.use("/credential", (request, response, next) => {
  console.log("Validating User");
  const isValidUser = true; // by default
  if (isValidUser) {
    next();
  } else {
    response.status(400).json({ message : "Invalid User "});
  }
});

app.get("/", function (req, res) {
  res.send("I am /home");
});

app.get("/credential", function (req, res) {
  const credential = {
    email: "abc@gmail.com",
    password: "abc@1212",
  };
  res.status(200).json(credential);
});

app.use("*", function (req, res) {
  res.send("Incorrect Route");
});

app.listen(3000, function () {
  console.log(`Listening on Port 3000`);
});

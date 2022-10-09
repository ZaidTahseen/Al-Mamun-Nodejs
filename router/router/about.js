const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("I am a bank application");
});

router.get("/address", function (req, res) {
  res.send("India , bangladesh , UK");
});


module.exports = router ; 
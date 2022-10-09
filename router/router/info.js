const express = require("express");
const router = express.Router();
const validateUser = require('../middleware/validateUser');


// Public
router.get("/", function (req, res) {
  res.status(200).json({ message : "If logged in get info about credential and amount"});
});


// Private ---- Protect
router.get("/credential", validateUser ,function (req, res) {  
  const credential = {
    email: "abc@gmail.com",
    password: "abc@1212",
  };
  res.status(200).json(credential);
});


// Private ---- Protect
router.get("/amount", validateUser , function (req, res) {
  
  const amount = {
    totalMoney : 500000,
    interestMoney : 2500
  };

  res.status(200).json(amount);
});

module.exports = router ; 
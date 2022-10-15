const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');


const userData = [
  {
    name: "John Cena",
    email: "john@gmail.com",
    password: "Abcd@121",
  },
];


router.get("/", function (req, res) {
  res.status(200).json({ user: userData });
});

router.post("/",

  body('email').isEmail(),
  body('name').trim().isLength({ min: 8 }),
  body('password')
    .isLength({ min: 8 })
    .withMessage('must be at least 8 chars long')
    .matches(/\d/)
    .withMessage('must contain number') ,

  function (req, res) {
  const newUser = req.body;
  
  const validateResult = validationResult(req);
  if( !validateResult.isEmpty()) return res.status(400).send(validateResult.errors);

  userData.push(newUser);
  return res.status(200).json( userData );

});


module.exports = router;

const User = require("../model/userModel");
const validateUser = require("../validation/userValidation");

const createUser = async (req, res) => {
  try {
    const { error } = await validateUser(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(409).send({ message: "Email already registered " });

    // before saving the user - encrypt the password  - 1 

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).send({ message: "user saved ", user: newUser });
  } catch (err) {
    res.send(err);
  }
};

const loginUser = (req, res) => {
  // if  correct email and password is coming then only return below res - 2 
  res.status(200).send({ message : "You are logged In "})
  // else  res.status(200).send({ message : "You are incorrect email/password "})
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;

const User = require("../model/userModel");
const {
  validateUser,
  userLoginvalidation,
  editUserProfile
} = require("../validation/userValidation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const { error } = await validateUser(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.find({ email: req.body.email , mobile : req.body.mobile });
    if (user)
      return res.status(409).send({ message: "User already registered " });

    const newUser = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    // assigning encrypted password 
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();
    res.status(201).send({ message: "user saved ", user: newUser });
  } catch (err) {
    res.send(err);
  }
};

const loginUser = async (req, res) => {
  const { error } = userLoginvalidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  let user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send({ message: "Invalid Email or Password" });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send({ message: "Invalid Email or Password" });

  var token = jwt.sign(
    { _id: user.id, email: user.email , role : "user" },
    process.env.jwtPrivateKey
  );
  return res.status(200).send({token});
};

const editMyProfile = async ( req , res )=>{

  const { error } = editUserProfile(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });
  
  // must include these options 
  const userId = req.params.id;
  const editUserInfo = req.body;

  const user = await User.findById(userId);

  if (!user)
      return res.status(409).send({ message: "User Not Exists" });
  
  user.mobile = editUserInfo.mobile;
  user.email = editUserInfo.email;

  await user.save();
  res.status(200).send( { message : "User profile updated successfully " , user});
}


const getAllUserInfo = async ( req , res )=>{
  const users = await User.find({});
  res.status(200).send( { users })
}

const getSpecificUserInfo = async ( req , res )=>{
  // Implement the logic
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getAllUserInfo = getAllUserInfo;
module.exports.getSpecificUserInfo = getSpecificUserInfo;
module.exports.editMyProfile = editMyProfile;

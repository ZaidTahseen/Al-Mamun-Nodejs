const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

async function isUserAuthenticated(req, res, next) {
  try {
    const token = req.header("Authorization").replace('Bearer ' , '');
    const payload = jwt.verify(token, process.env.jwtPrivateKey);
    if( payload.role === 'user'){
      const user = await User.findById(payload._id);
      req.user = user;
      return  next();
    }
    res.status(400).send( { status : 'fail' , message : "Only User are permitted"})
  } catch (error) {
    res.status(400).send( { status : 'fail' , message : "Unathorized user"})
  }
}

module.exports = isUserAuthenticated;

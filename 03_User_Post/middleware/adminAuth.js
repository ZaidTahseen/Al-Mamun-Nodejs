const jwt = require("jsonwebtoken");

function isUserAuthenticated(req, res, next) {
  try {
    const token = req.header("Authorization").replace('Bearer ' , '');
    const payload = jwt.verify(token, process.env.jwtPrivateKey);
    if( payload.role === 'admin'){
     return  next();
    }
    res.status(400).send( { status : 'fail' , message : "You are not an admin"})
  } catch (error) {
    res.status(400).send( { status : 'fail' , message : "Unathorized user"})
  }
}

module.exports = isUserAuthenticated;

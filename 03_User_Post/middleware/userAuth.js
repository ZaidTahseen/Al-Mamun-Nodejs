const jwt = require("jsonwebtoken");

function isUserAuthenticated(req, res, next) {
  try {
    const token = req.header("token").replace('Bearer ' , '');
    const payload = jwt.verify(token, process.env.jwtPrivateKey);
    next();
  } catch (error) {
    res.status(400).send( error)
  }
}

module.exports = isUserAuthenticated;

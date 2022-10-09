module.exports = function validateUser(req, res, next) {
  // extract info form url-query 
  const isValidUser = req.query.password == 1234 ? true : false ;
  if (isValidUser) {
    next();
  } else {
    res.status(400).json({ message: "Invalid User " });
  }
};

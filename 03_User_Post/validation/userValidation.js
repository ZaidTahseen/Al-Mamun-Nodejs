const Joi = require("joi");

function validateUser(user) {
  const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(20).required(),
    mobile: Joi.number().min(10).required(),
    city: Joi.string().min(3).required(),
  });

  return userSchema.validate(user);
}


function userLoginvalidation(user){
  const userLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(20).required(),
  });
  return userLogin.validate(user);
}

function editUserProfile(user){
  const userProfile = Joi.object({
    email: Joi.string().email().required(),
    mobile: Joi.number().min(10).required(),
  });
  return userProfile.validate(user);
}

module.exports.validateUser = validateUser;
module.exports.userLoginvalidation = userLoginvalidation;
module.exports.editUserProfile = editUserProfile;

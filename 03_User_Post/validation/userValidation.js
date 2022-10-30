const Joi = require("joi");

function validateUser(userObject) {
  const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(20).required(),
    mobile: Joi.number().min(10).required(),
    city: Joi.string().min(3).required(),
  });

  return userSchema.validate(userObject);
}

module.exports = validateUser;

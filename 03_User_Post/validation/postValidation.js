const Joi = require("joi");

function validatePost(Post) {
  const PostSchema = Joi.object({
    title: Joi.string().min(5).required(),
    content: Joi.string().min(10).required(),
  });

  return PostSchema.validate(Post);
}

module.exports.validatePost = validatePost;


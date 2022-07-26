const joi = require("joi");

const userSchema = joi.object({
  username: joi.string().required().messages({
    "any.required": "Username is required",
    "string.base": "Username is required",
    "string.empty": "Username is required",
  }),
  password: joi.string().required().messages({
    "any.required": "Password is required",
    "string.base": "Password is required",
    "string.empty": "Password is required",
  }),
});

module.exports = userSchema;

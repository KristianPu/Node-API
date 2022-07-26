const joi = require("joi");

const responseMessage = (field) => {
  return `${field} is not provided`;
};

const leadSchema = joi.object({
  firstName: joi
    .string()
    .required()
    .messages({
      "any.required": responseMessage("firstName"),
      "string.base": responseMessage("firstName"),
      "string.empty": responseMessage("firstName"),
    }),
  lastName: joi
    .string()
    .required()
    .messages({
      "any.required": responseMessage("lastName"),
      "string.base": responseMessage("lastName"),
      "string.empty": responseMessage("lastName"),
    }),
  telephone: joi
    .string()
    .required()
    .messages({
      "any.required": responseMessage("telephone"),
      "string.base": responseMessage("telephone"),
      "string.empty": responseMessage("telephone"),
    }),
  email: joi
    .string()
    .required()
    .messages({
      "any.required": responseMessage("email"),
      "string.base": responseMessage("email"),
      "string.empty": responseMessage("email"),
    }),
  status: joi
    .string()
    .allow(null)
    .messages({
      "string.base": responseMessage("Prioridad"),
      "string.empty": responseMessage("Prioridad"),
    }),
});

module.exports = leadSchema;

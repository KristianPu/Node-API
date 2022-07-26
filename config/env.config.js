const joi = require("joi");

const envVarsSchema = joi
  .object()
  .keys({
    NODE_ENV: joi.string().valid("production", "development").required(),
    PORT: joi.number().positive().required(),
    SECRET_KEY: joi.string().required(),
    HOST: joi.string().required(),
    HOST_DESCRIPTION: joi.string().required(),
  })
  .unknown();

const { error } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

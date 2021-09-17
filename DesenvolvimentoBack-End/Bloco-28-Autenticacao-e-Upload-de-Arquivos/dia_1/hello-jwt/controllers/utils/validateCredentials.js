const Joi = require('joi');

const validateCredentials = (body) =>
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

module.exports = {
  validateCredentials,
};
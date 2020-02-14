const Joi = require("@hapi/joi");

exports.emailTemplateSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(30)
    .required(),
  email: Joi.string()
    .max(30)
    .email()
    .required(),
  templateType: Joi.string().required(),
  subject: Joi.string()
    .min(2)
    .max(30)
    .required()
});

const yup = require('yup');

module.exports.CREATE_USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .min(2)
    .max(50)
    .matches(/^[A-Z][a-z]{1,49}$/, 'Name must starts with capital letter')
    .required(),
  lastName: yup
    .string()
    .min(2)
    .max(50)
    .matches(/^[A-Z][a-z]{1,49}$/, 'Name must starts with capital letter')
    .required(),
  email: yup.string().email(),
  tel: yup
    .string()
    .matches(/^\+380\d{9}$/)
    .required(),
});

module.exports.PAGE_VALIDATION_SCHEMA = yup.number().min(1).integer();
module.exports.RESULTS_VALIDATION_SCHEMA = yup
  .number()
  .min(5)
  .max(50)
  .integer();

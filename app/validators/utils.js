const { validationResult } = require('express-validator');
const { validationsError } = require('../errors');

const defaultErrorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } else {
    next(validationsError(errors.errors));
  }
};

exports.defineValidator = (validations, errorHandler = defaultErrorHandler) => [...validations, errorHandler];

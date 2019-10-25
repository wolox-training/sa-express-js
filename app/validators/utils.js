const { logger } = require('express-wolox-logger');
const { validationResult } = require('express-validator');
const { validationsError } = require('../errors');

const defaultErrorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } else {
    logger.error('Errors: ', errors.errors);
    next(validationsError(errors.errors));
  }
};

exports.defineValidator = (validations, errorHandler = defaultErrorHandler) => [...validations, errorHandler];

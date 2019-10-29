const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DATABASE_ERROR = 'database_error';
exports.databaseError = message => internalError(message, exports.DATABASE_ERROR);

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

exports.VALIDATIONS_ERROR = 'validation_error';
exports.validationsError = message => internalError(message, exports.VALIDATIONS_ERROR);

exports.customValidationError = (message, errors) => ({
  errors,
  message,
  statusCode: 400
});

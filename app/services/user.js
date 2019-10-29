const { customValidationError } = require('../errors');
const { users: User, Sequelize } = require('../models');

exports.userCreation = params =>
  User.create(params).catch(err => {
    if (err instanceof Sequelize.ValidationError) {
      throw customValidationError('Sequelize validation error', err.errors);
    } else {
      throw err;
    }
  });

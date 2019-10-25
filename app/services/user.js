const { users: User } = require('../models');

exports.userCreation = params => User.create(params);

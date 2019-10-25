const { logger } = require('express-wolox-logger');
const { users: User } = require('../models');

exports.createUser = (req, res) => {
  User.create(req.body)
    .then(user => {
      logger.info(`The user ${user.email} has just signed up`);
      res.status(201).send();
    })
    .catch(err => {
      logger.error('The user could not be created and returned this error: ', err);
      res.status(500).send(err);
    });
};

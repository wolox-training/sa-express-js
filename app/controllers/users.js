const { logger } = require('express-wolox-logger');
const { userCreation } = require('../services/user');

exports.createUser = (req, res) => {
  userCreation(req.body)
    .then(user => {
      logger.info(`The user ${user.email} has just signed up`);
      res.status(201).send(user);
    })
    .catch(err => {
      logger.error('Something happened ', err);
      res.status(500).send(err);
    });
};

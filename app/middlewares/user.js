const { check } = require('express-validator');
const { defineValidator } = require('./utils');
const { users: User } = require('../models');

exports.userValidator = defineValidator([
  check('password')
    .isLength({ min: 8 })
    .custom(value => value.match(/^[A-Za-z0-9]*$/)),
  check('email', 'Email does not is from Wolox').custom(value =>
    value.match(/([\w_-]*@wolox.[a-z]{3}(.[a-z]*)?)/)
  ),
  check('first_name', 'The first name must not be empty')
    .isString()
    .isLength({ min: 1 }),
  check('last_name', 'The last name must not be empty')
    .isString()
    .isLength({ min: 1 }),
  check('email').custom(email =>
    User.findOne({ where: { email } }).then(user => {
      if (user) {
        throw new Error('E-mail already in use');
      }
    })
  )
]);

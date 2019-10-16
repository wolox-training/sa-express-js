const { users: User } = require('../models');

exports.createUser = (req, res) => {
  // const user = User.create(req.body);
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(403).send(err);
    });
};

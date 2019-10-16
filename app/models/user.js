const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      first_name: { type: DataTypes.STRING },
      last_name: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING }
    },
    {
      timestamps: false,
      hooks: {
        beforeCreate: user => {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8), null);
        }
      }
    }
  );
  return User;
};

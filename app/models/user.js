const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      first_name: { type: DataTypes.STRING, allowNull: false },
      last_name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false }
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

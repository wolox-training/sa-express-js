module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      first_name: { type: DataTypes.STRING },
      last_name: { type: DataTypes.STRING },
      mail: { type: DataTypes.STRING },
      phone: { type: DataTypes.STRING },
      passowrd: { type: DataTypes.STRING }
    },
    {
      timestamps: false
    }
  );
  return User;
};

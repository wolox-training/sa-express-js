module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      first_name: { type: DataTypes.STRING },
      last_name: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      created_at: { type: DataTypes.DATE },
      updated_at: { type: DataTypes.DATE }
    },
    {
      timestamps: false
    }
  );
  return User;
};

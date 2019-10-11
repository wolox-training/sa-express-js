module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      mail: Sequelize.STRING,
      phone: Sequelize.STRING,
      passowrd: Sequelize.STRING
    });
  },
  down(queryInterface) {
    return queryInterface.dropTable('Users');
  }
};

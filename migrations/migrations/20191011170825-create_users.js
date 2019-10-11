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
  // eslint-disable-next-line no-unused-vars
  down(queryInterface, _Sequalize) {
    return queryInterface.dropTable('Users');
  }
};

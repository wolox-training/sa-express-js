'use strict';

module.exports = {
  up(queryInterface) {
    return Promise.all([
      queryInterface.removeColumn('users', 'created_at'),
      queryInterface.removeColumn('users', 'updated_at')
    ]);
  },
  down() {
    return Promise.resolve();
  }
};

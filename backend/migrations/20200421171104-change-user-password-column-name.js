'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('AdminUsers', 'password', 'encryptedPassword');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('AdminUsers', 'encryptedPassword', 'password')
  }
};

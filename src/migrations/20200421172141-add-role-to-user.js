'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('AdminUsers', 'role', { type: Sequelize.STRING, allowNull: true });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('AdminUsers', 'role')
  }
};

'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AdminUsers', [{
      email: 'johndoe@gmail.com',
      name: "John Doe",
      encryptedPassword: "$2b$10$CAUjFTFr4Ys6Ym6kTM.fouoxt4evOoaZeR/fpvK4a9cqqCJz/KqfW", //123456 
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AdminUsers', null, {});
  }
};

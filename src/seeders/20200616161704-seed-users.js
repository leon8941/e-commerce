const uuidv4 = require('uuid').v4

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: uuidv4(),
      email: 'johnwick@gmail.com',
      firstName: "Wick",
      lastName: "John",
      gender: "male",
      encryptedPassword: "$2b$10$CAUjFTFr4Ys6Ym6kTM.fouoxt4evOoaZeR/fpvK4a9cqqCJz/KqfW", //123456 
      dateOfBirth: new Date(),
      status: "active",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}

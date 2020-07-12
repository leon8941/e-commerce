'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM,
      values: ['male', 'female', 'other']
    },
    encryptedPassword: DataTypes.STRING,
    dateOfBirth: DataTypes.DATEONLY,
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'inactive']
    }
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};
'use strict'
module.exports = (sequelize, DataTypes) => {
  const AdminUser = sequelize.define('AdminUser', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {})
  AdminUser.associate = function(models) {
    // associations can be defined here
  }
  return AdminUser
}
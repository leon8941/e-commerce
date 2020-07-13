'use strict'

const adminUsers = (sequelize, DataTypes) => {
  const AdminUsers = sequelize.define('AdminUsers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: DataTypes.STRING,
    encryptedPassword: DataTypes.STRING,
    role: DataTypes.STRING
  }, {})
  AdminUsers.associate = function() {
    // associations can be defined here
  }
  return AdminUsers
}

export default adminUsers
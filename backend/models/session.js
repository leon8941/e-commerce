'use strict'

const sessions = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    sid: DataTypes.STRING,
    expires: DataTypes.STRING,
    data: DataTypes.STRING
  }, {})
  Session.associate = function() {
    // associations can be defined here
  }
  return Session;
}

export default sessions
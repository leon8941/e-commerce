const db = require('./models/index.js')

module.exports = () => {
  const AdminUser = db.sequelizer.define('post', {
    email: {
      type: db.Sequelize.STRING,
      allowNull: false
    }
  })  
}
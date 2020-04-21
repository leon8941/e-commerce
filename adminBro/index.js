const AdminBro = require('admin-bro')
const AdminBroSequelize = require('admin-bro-sequelizejs')

const db = require('../models/index')

const getAdminBro = () => {
  AdminBro.registerAdapter(AdminBroSequelize)
  
  const adminBroOptions = {
    resources: [db.AdminUser],
    rootPath: '/admin',
  }

  const adminBro = new AdminBro(adminBroOptions)

  return adminBro 
}

module.exports.getAdminBro = getAdminBro
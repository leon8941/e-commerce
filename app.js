const bcrypt = require('bcrypt')
const AdminBroExpress = require('admin-bro-expressjs')
const formidableMiddleware = require('express-formidable')
const express = require('express')
const app = express()

app.use(formidableMiddleware())

const db = require('./models/index')
const adminBro = require('./adminBro/index')
const adminBroObj = adminBro.getAdminBro()

const router = AdminBroExpress.buildAuthenticatedRouter(adminBroObj, {
  authenticate: async (email, password) => {
    const adminUser = await db.AdminUser.findOne({ email })
    if (adminUser) {
      const matched = await bcrypt.compare(password, adminUser.encryptedPassword)
      if (matched) {
        return adminUser
      }
    }
    return false
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
})

app.use(adminBroObj.options.rootPath, router)

const run = async () => {
  app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
}

run()

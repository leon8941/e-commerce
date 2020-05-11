const bcrypt = require('bcrypt')
const AdminBroExpress = require('admin-bro-expressjs')
const formidableMiddleware = require('express-formidable')
const express = require('express')
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express()

app.use(formidableMiddleware())

const db = require('./models/index')
const adminBro = require('./adminBro/index')
const adminBroObj = adminBro.getAdminBro()

//Admin Bro router
const auth = {
  authenticate: async (email, password) => {
    const adminUser = await db.AdminUser.findOne({
      where: {
        email: email
      }
    })

    if (adminUser) {
      const matched = await bcrypt.compare(password, adminUser.encryptedPassword)
      if (matched) {
        return adminUser
      }
    }
    return false
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
  cookieName: 'some-secret-name'
}

const router = AdminBroExpress.buildAuthenticatedRouter(
  adminBroObj, 
  auth, 
  null, 
  {
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: db.sequelize
    })
  }
)

app.use(adminBroObj.options.rootPath, router)

const run = async () => {
  app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
}

run()

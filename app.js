const AdminBro = require('admin-bro')
const AdminBroSequelize = require('admin-bro-sequelizejs')
const AdminBroExpress = require('admin-bro-expressjs')
const formidableMiddleware = require('express-formidable');
const db = require('./models/index')

const express = require('express')
const app = express()

app.use(formidableMiddleware());
AdminBro.registerAdapter(AdminBroSequelize)

const adminBro = new AdminBro({
  databases: [db],
  rootPath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router)

const run = async () => {
  app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
}

run()

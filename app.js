const AdminBroExpress = require('admin-bro-expressjs')

const formidableMiddleware = require('express-formidable')
const express = require('express')
const app = express()

app.use(formidableMiddleware())

const adminBro = require('./adminBro/index')
const adminBroObj = adminBro.getAdminBro()
const router = AdminBroExpress.buildRouter(adminBroObj)

app.use(adminBroObj.options.rootPath, router)

const run = async () => {
  app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
}

run()

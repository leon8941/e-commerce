require('dotenv').config()
const AdminBroExpress = require('admin-bro-expressjs')
const formidableMiddleware = require('express-formidable')
const express = require('express')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./models/index')
const { adminBro, auth } = require('./adminBro/index')
const apolloServer = require('./api/gql/index')

const app = express()

apolloServer.applyMiddleware({ app })
app.use(formidableMiddleware())

const adminBroObj = adminBro()

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
  // ##### Next Js ##### //
  const next = require('next')
  const dev = process.env.NODE_ENV !== 'production'
  const nextApp = next({ dev })
  const handle = nextApp.getRequestHandler()
  // ##### Next Js ##### //

  nextApp.prepare().then(() => {
    app.get('*', (req, res) => {
      return handle(req, res)
    })
    app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
  })
}

run()

import './config/config'
import AdminBroExpress from 'admin-bro-expressjs'
import formidableMiddleware from 'express-formidable'
import express from 'express'
import session from 'express-session'
import SequelizeStore from 'connect-session-sequelize'
const Store = SequelizeStore(session.Store)

import next from 'next'

import db from './models/index'
import { adminBro, auth } from './adminBro/index'
import apolloServer from './api/gql/index'

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
    store: new Store({
      db: db.sequelize
    })
  }
)

app.use(adminBroObj.options.rootPath, router)

const run = async () => {
  // ##### Next Js ##### //
  const dev = process.env.NODE_ENV !== 'production'
  const nextApp = next({ dev })
  const handle = nextApp.getRequestHandler()
  // ##### Next Js ##### //
  await nextApp.prepare()
  app.get('*', (req, res) => {
    return handle(req, res)
  })
  app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
}

run()

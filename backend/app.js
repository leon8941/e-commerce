require('dotenv').config()
const bcrypt = require('bcrypt')
const AdminBroExpress = require('admin-bro-expressjs')
const formidableMiddleware = require('express-formidable')
const express = require('express')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const ApolloServer = require('apollo-server-express').ApolloServer
const gql = require('apollo-server-express').gql

const db = require('./models/index')
const { adminBro, auth }= require('./adminBro/index')

const typeDefs = require('./api/gql/schema')
const resolvers = require('./api/gql/resolvers')

const apolloServer = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: ( {req} ) => { 
    return { db } 
  },
  debug: false
})

const app = express()

apolloServer.applyMiddleware({ app })
app.use(formidableMiddleware())

const adminBroObj = adminBro.getAdminBro()

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

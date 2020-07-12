
const ApolloServer = require('apollo-server-express').ApolloServer
const gql = require('apollo-server-express').gql
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const db = require('../../models/index')

const apolloServer = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: ( {req} ) => { 
    return { db } 
  },
  debug: false
})

module.exports = apolloServer
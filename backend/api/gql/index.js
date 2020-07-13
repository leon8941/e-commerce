import { ApolloServer } from 'apollo-server-express'

import { gql } from 'apollo-server-express'
import typeDefs from './schema'
import resolvers from './resolvers'
import db from '../../models/index'

const apolloServer = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: ( {req} ) => { 
    return { db } 
  },
  debug: false
})

export default apolloServer
const { HttpLink } = require('apollo-link-http')
const { ApolloClient } = require('apollo-client')
const { InMemoryCache } = require('apollo-cache-inmemory')
const fetch = require('isomorphic-unfetch')

const createHttpLink = () => {
  //Todo pass header param to request for auth token
  return new HttpLink({
    uri: 'http://localhost:8080/graphql',
    credentials: 'same-origin',
    fetch
  })
}

export default createApolloClient = (initialState, ctx) => {
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: createHttpLink(),
    cache: new InMemoryCache().restore(initialState)
  })
}
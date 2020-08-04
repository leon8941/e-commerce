import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'

const createHttpLink = () => {
  //Todo pass header param to request for auth token
  return new HttpLink({
    uri: 'http://localhost:8080/graphql',
    credentials: 'same-origin',
    fetch
  })
}

const createApolloClient = (initialState, ctx) => {
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: createHttpLink(),
    cache: new InMemoryCache().restore(initialState)
  })
}

export default createApolloClient
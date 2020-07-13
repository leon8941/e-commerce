const React = require('react')
const App = require('next/app')
const Head = require('next/head')
const { ApolloProvider } = require('@apollo/react-hooks')

const createApolloClient = require('./apolloClient')

let globalApolloClient

const initApolloClient = (initialState, ctx) => {
  if (typeof window === 'undefined') {
		return createApolloClient(initialState, ctx)
	}

	// Reuse client on the client-side
	if (!globalApolloClient) {
		globalApolloClient = createApolloClient(initialState, ctx)
	}

	return globalApolloClient
}

const withApollo = ({ ssr = false } = {}) => PageComponent => {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    let client
    if (apolloClient) {
      client = apolloClient
    } else {
      client = initApolloClient(apolloState, undefined)
    }

    return (
      <ApolloProvider client={client}>
        <PageComponent { ...pageProps } />
      </ApolloProvider>
    )
  }
}
import { ApolloClient, createNetworkInterface } from 'react-apollo'
import fetch from 'isomorphic-fetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

// Replace this URL by your APIs simple endpoint URL:
const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/vinylbase'

function createClient (headers, initialState) {
  const networkInterface = createNetworkInterface({
    uri: GRAPHCMS_API,
    ops: {
      credentials: 'same-origin'
    }
  })
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    networkInterface
  })
}

export default function initClient (initialState) {
  if (!process.browser) {
    return createClient(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createClient(initialState)
  }
  return apolloClient
}

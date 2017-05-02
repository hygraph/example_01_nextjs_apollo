import ApolloClient, { createNetworkInterface } from 'react-apollo'

let apolloClient = null

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

export const initClient = (headers, initialState = {}) => {
  if (!process.browser) {
    return createClient(headers, initialState)
  }
  if (!apolloClient) {
    apolloClient = createClient(headers, initialState)
  }
  return apolloClient
}

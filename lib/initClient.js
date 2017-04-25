import ApolloClient, { createNetworkInterface } from 'apollo-client'

let apolloClient = null

// Replace this URL by your APIs simple endpoint URL:
const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/vinylbase'

function createClient (headers) {
  const networkInterface = createNetworkInterface({
    uri: GRAPHCMS_API,
    ops: {
      credentials: 'same-origin'
    }
  })
  return new ApolloClient({ networkInterface })
}

export const initClient = (headers) => {
  if (!process.browser) {
    return createClient(headers)
  }
  if (!apolloClient) {
    apolloClient = createClient(headers)
  }
  return apolloClient
}

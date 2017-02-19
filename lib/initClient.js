import ApolloClient, { createNetworkInterface } from 'apollo-client'

let apolloClient = null

function createClient (headers) {
  const GRAPHCMS_API = process.env.GRAPHCMS_API
  const TOKEN = process.env.TOKEN

  if (!GRAPHCMS_API || !TOKEN) {
    throw new Error(`Environment variables "GRAPHCMS_API" or "TOKEN" missing`)
  }

  const networkInterface = createNetworkInterface({
    uri: GRAPHCMS_API,
    ops: {
      credentials: 'same-origin'
    }
  })

  networkInterface.use([{
    applyMiddleware (req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      req.options.headers.authorization = `Bearer ${TOKEN}`
      next()
    }
  }])

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

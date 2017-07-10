import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import initClient from './initClient'

export default ComposedComponent => {
  return class WithData extends Component {
    static displayName = `WithData(${ComposedComponent.displayName})`
    static propTypes = {
      serverState: PropTypes.object.isRequired
    }

    static async getInitialProps (ctx) {
      let serverState = {}

      // evaluate getInitialProps()
      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      // Running all queries in the tree extracting the data
      if (!process.browser) {
        const apollo = initClient()
        // url prop if any of our queries needs it
        const url = { query: ctx.query, pathname: ctx.pathname }

        // Run the queries
        const app = (
          <ApolloProvider client={apollo}>
            <ComposedComponent url={url} {...composedInitialProps} />
          </ApolloProvider>
        )
        await getDataFromTree(app)

        const state = apollo.getInitialState()

        serverState = {
          apollo: {
            data: state.data
          }
        }
      }

      return {
        serverState,
        ...composedInitialProps
      }
    }

    constructor (props) {
      super(props)
      this.apollo = initClient(this.props.serverState)
    }

    render () {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
}

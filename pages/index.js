import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import App from '../components/App'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Nav from '../components/Nav'
import Grid from '../components/Grid'
import withData from '../lib/withData'

const AllReviews = ({ url: { pathname }, data: { loading, error, allReviews } }) => {
  if (error) return <h1>Error loading reviews.</h1>
  return (
    <App>
      <Nav pathname={pathname} />
      {
        loading ? <Loading /> : (
          <div>
            <Header
              title='Vinylbase'
              subLine='The best music reviews on the interwebs'
              pageImage='/static/records.svg'
              isIcon
            />
            <section>
              <Grid entries={allReviews} type='reviews' />
            </section>
          </div>
        )
       }
    </App>
  )
}

const allReviews = gql`
  query allReviews {
    allReviews(orderBy: createdAt_DESC) {
      id
      slug
      rating
      createdAt
      title
    }
  }`

export default withData(graphql(allReviews)(AllReviews))

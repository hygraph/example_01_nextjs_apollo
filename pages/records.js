import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import App from '../components/App'
import Grid from '../components/Grid'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Nav from '../components/Nav'
import withData from '../lib/withData'

const AllRecords = ({ url: { pathname }, data: { loading, error, allRecords } }) => {
  if (error) return <h1>Error loading records.</h1>
  return (
    <App>
      <Nav pathname={pathname} />
      {
        loading ? <Loading /> : (
          <div>
            <Header title='All Records' pageImage='/static/records.svg' isIcon />
            <section>
              <Grid entries={allRecords} type='records' />
            </section>
          </div>
        )
       }
    </App>
  )
}

const allRecords = gql`
  query allRecords {
    allRecords(orderBy: createdAt_DESC) {
      id
      title
      slug
      createdAt
      image: cover {
        handle
      }
    }
  }`

export default withData(graphql(allRecords)(AllRecords))

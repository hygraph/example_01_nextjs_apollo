import { gql, graphql } from 'react-apollo'
import Loading from '../../components/Loading'

import App from '../../components/App'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import RecordDetails from '../../components/RecordDetails'
import withData from '../../lib/withData'

const Record = ({ url: { pathname }, data: { loading, Record } }) => {
  const pageImage = !loading && Record.cover ? `https://media.graphcms.com/resize=w:80,h:80,fit:crop/${Record.cover.handle}` : null

  return (
    <App>
      <Nav pathname={pathname} />
      {
        loading ? <Loading /> : (
          <div>
            <Header
              title={Record.title}
              subLine='Tracklist'
              pageImage={pageImage}
              isIcon={false}
            />
            <section>
              <RecordDetails record={Record} />
            </section>
          </div>
        )
       }
    </App>
  )
}

const recordDetails = gql`
  query recordDetails($slug: String! ) {
    Record(slug: $slug) {
      id
      title
      cover {
        handle
      }
      tracks {
        id
        title
        length
      }
    }
}`

export default withData(graphql(recordDetails, {
  options: ({ url: { query: { slug } } }) => ({ variables: { slug } })
})(Record))

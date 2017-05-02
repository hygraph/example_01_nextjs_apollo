import { gql, graphql } from 'react-apollo'
import App from '../../components/App'
import Nav from '../../components/Nav'
import Loading from '../../components/Loading'
import Header from '../../components/Header'

import ArtistDetails from '../../components/ArtistDetails'
import withData from '../../lib/withData'

function Artist ({ url: { pathname }, data: { loading, Artist } }) {
  const pageImage = Artist.picture ? `https://media.graphcms.com/resize=w:80,h:80,fit:crop/${Artist.picture.handle}` : null

  return (
    <App>
      <Nav pathname={pathname} />
      {
        loading ? <Loading /> : (
          <div>
            <Header title={Artist.name} pageImage={pageImage} isIcon={false} />
            <section>
              <ArtistDetails artist={Artist} />
            </section>
          </div>
        )
       }
    </App>
  )
}

const artistDetails = gql`
  query artistDetails($slug: String! ) {
    Artist(slug: $slug) {
      id
      name
      slug
      bio
      picture {
        handle
      }
      records {
        id
        title
        slug
        image: cover {
          handle
        }
      }
    }
}`

export default withData(graphql(artistDetails, {
  options: ({ url: { query: { slug } } }) => ({ variables: { slug } })
})(Artist))

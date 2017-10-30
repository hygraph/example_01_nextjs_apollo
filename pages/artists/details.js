import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import App from '../../components/App'
import Nav from '../../components/Nav'
import Loading from '../../components/Loading'
import Header from '../../components/Header'

import ArtistDetails from '../../components/ArtistDetails'
import withData from '../../lib/withData'

const Artist = ({ url: { pathname }, data: { loading, error, artist } }) => {
  if (error) return <h1>Error loading the artist.</h1>

  const pageImage = !loading && artist.picture ? `https://media.graphcms.com/resize=w:80,h:80,fit:crop/${artist.picture.handle}` : null

  return (
    <App>
      <Nav pathname={pathname} />
      {
        loading ? <Loading /> : (
          <div>
            <Header title={artist.name} pageImage={pageImage} isIcon={false} />
            <section>
              <ArtistDetails artist={artist} />
            </section>
          </div>
        )
      }
    </App>
  )
}

const artistDetails = gql`
  query artistDetails($slug: String! ) {
    artist: Artist(slug: $slug) {
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

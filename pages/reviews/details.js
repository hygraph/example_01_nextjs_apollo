import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import App from '../../components/App'
import Nav from '../../components/Nav'
import Loading from '../../components/Loading'
import Header from '../../components/Header'
import ReviewDetails from '../../components/ReviewDetails'
import withData from '../../lib/withData'

function Review ({ url: { pathname }, data: { loading, Review } }) {
  const pageImage = Review.record.image ? `https://media.graphcms.com/resize=w:80,h:80,fit:crop/${Review.record.image.handle}` : null

  return (
    <App>
      <Nav pathname={pathname} />
      {
        loading ? <Loading /> : (
          <div>
            <Header title={Review.title} subLine={Review.record.title} pageImage={pageImage} isIcon={false} />
            <section>
              <ReviewDetails review={Review} />
            </section>
          </div>
        )
       }
    </App>
  )
}

const reviewDetails = gql`
  query reviewDetails($slug: String! ) {
    Review(slug: $slug) {
      id
      title
      review
      rating
      record {
        title
        slug
        image: cover {
          handle
        }
        artist {
          title: name
          slug
          image: picture {
            handle
          }
        }
      }
    }
}`

const ReviewWithData = graphql(reviewDetails, {
  options: ({ url: { query: { slug } } }) => ({ variables: { slug } })
})(Review)

export default(withData(ReviewWithData))

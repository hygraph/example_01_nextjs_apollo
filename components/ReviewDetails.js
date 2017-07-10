import StarRatingComponent from 'react-star-rating-component'
import ReactMarkdown from 'react-markdown'
import Grid from './Grid'

const ReviewDetails = ({ review: { title, review, rating, record: { artist } } }) => (
  <article>
    <div className='star-wrapper'>
      <StarRatingComponent
        name='Rating'
        starCount={5}
        value={rating}
        editing={false}
      />
    </div>
    <ReactMarkdown className='react-markdown' source={review} />

    <h2>The artist:</h2>
    <Grid entries={[artist]} type='artists' />

    <style jsx>{`
      .star-wrapper {
        font-size: 3em;
        text-align: center;
        padding: 40px 0px;
      }
    `}</style>
  </article>
)

export default ReviewDetails

import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

export default ({ entry: { createdAt, title, id, image, rating } }) => (
  <div className='card'>
    { image ? <img src={`https://media.graphcms.com/resize=w:140,h:140,fit:crop/${image.handle}`} /> : null }

    <div className='title'>{title}</div>
    { rating &&
      <div className='star-wrapper'>
          <StarRatingComponent
            name='Rating'
            className='rating'
            starCount={5}
            value={rating}
            editing={false}
          />
        </div>
    }
    <style jsx>{`
      .card {
        width: 280px;
        height: 320px;
        background-color: rgb(55, 61, 97);
        border-radius: 3px;
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        transition: all 0.2s;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
        text-align: center;
      }

      .card:hover {
        transform: scale(1.1, 1.1);
        background-color: rgb(65, 70, 110);
        transition: all 0.2s;
      }

      img {
        margin-bottom: 30px;
        border-radius: 50%;
        border: 16px solid rgb(28, 32, 53);
      }

      .title {
        color: white;
        font-size: 1.5em;
      }

      .star-wrapper {
        font-size: 2em;
      }
    `}</style>
  </div>
)

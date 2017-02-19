import React from 'react'

export default ({ record }) => (
  <div>
    <ul>
      {record.tracks.map(({ id: trackId, title, length }) => (
        <li className='track' key={trackId}>
          <span>{title}</span>
          <span>{new Date(1000 * length).toISOString().substr(14, 5)}</span>
        </li>
      ))}
    </ul>

    <style jsx>{`
      .track {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 15px;
        padding: 20px;
        font-size: 1.4em;
        background-color: rgb(55, 61, 97);
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
        border-radius: 3px;
      }

      .track:hover {
        transform: scale(1.03, 1.03);
        background-color: rgb(65, 70, 110);
        transition: all 0.2s;
      }
    `}</style>
  </div>
)

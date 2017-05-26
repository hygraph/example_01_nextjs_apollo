import Card from './Card'
import Link from 'next/link'

const Grid = ({ entries, type, pageImage }) => (
  <div>
    <ul>
      {entries.map(entry =>
        <li key={entry.id}>
          <div>
            <Link href={`/${type}/details?slug=${entry.slug}&type=${type}`} as={`/${type}/${entry.slug}`} >
              <a>
                <Card entry={entry} />
              </a>
            </Link>
          </div>
        </li>
      )}
    </ul>

    <style jsx>{`
        li {
          display: block;
          margin-bottom: 10px;
        }
        ul {
          margin: 0px;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
        }
        `}</style>
  </div>
)

export default Grid

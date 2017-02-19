import Card from './Card'
import Link from 'next/link'

export default ({ entries, type, pageImage }) => (
  <div>
    <ul>
      {entries.map((entry, index) =>
        <li key={entry.id}>
          <div>
            <Link href={`/${type}/${entry.slug}`} as={`/${type}/${entry.slug}`} >
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

import Link from 'next/link'

const Nav = ({ pathname }) => (
  <div className='nav-container'>
    <nav>
      <Link prefetch href='/'>
        <a className={(pathname === '/' || pathname === '/reviews') && 'is-active'}>Reviews</a>
      </Link>

      <Link prefetch href='/artists'>
        <a className={pathname === '/artists' && 'is-active'}>Artists</a>
      </Link>

      <Link prefetch href='/records'>
        <a className={pathname === '/records' && 'is-active'}>Records</a>
      </Link>
    </nav>

    <style jsx>{`
      .nav-container {
        background-color: rgb(40, 45, 76);
      }

      nav {
        width: 900px;
        margin: 0 auto;
        padding: 20px;
        text-align: right;
      }

      a {
        font-size: 1.2em;
        margin-left: 25px;
        letter-spacing: 1px;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
      }

      a:hover {
        color: white;
      }

      .is-active {
        color: white;
      }
    `}</style>
  </div>
)

export default Nav

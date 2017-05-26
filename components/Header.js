import PageImage from './PageImage'

const Header = ({ title, subLine, pageImage, isIcon }) => (
  <div className='header-container'>
    <header>
      <h1>{title}</h1>
      { subLine ? <h2>{subLine}</h2> : null}
    </header>

    <PageImage image={pageImage} isIcon={isIcon} />

    <style jsx>{`
        .header-container {
          background-color: rgb(40, 45, 76);
          position: relative;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        header h1 {
          color: white;
          font-size: 3em;
          letter-spacing: 1px;
        }

        header h2 {
          font-size: 1.2em;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
        }
    `}</style>
  </div>
)

export default Header

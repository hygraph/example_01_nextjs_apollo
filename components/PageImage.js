import classnames from 'classnames'

const PageImage = ({image, isIcon}) => {
  if (!image) {
    return null
  }

  return (
    <div className='pageImage'>
      <img className={classnames({'roundImage': !isIcon})} src={image} />

      <style jsx>{`
        .pageImage {
          position: absolute;
          left: calc(50% - 60px);
          bottom: -60px;
          background: #1c2035;
          padding: 5px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 10px solid #282d4c;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .roundImage {
          border-radius: 50%;
        }
      `}</style>
    </div>
  )
}

export default PageImage
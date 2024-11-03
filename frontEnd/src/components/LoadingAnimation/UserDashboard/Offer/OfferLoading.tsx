import './OfferLoading.scss'

const OfferLoading = () => {
  return (
    <div className='offer-loading'>
      {Array.from({ length: 10 }).map((_, index) =>(
        <div key={index} className="offer-loading-card">
            <div className="heading"></div>
            <div className="description"></div>
            <div className="row">
                <div className="discount"></div>
                <div className="code"></div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default OfferLoading

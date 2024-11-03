import './OtherDetailsLoading.scss';

const OtherDetailsLoading = () => {
  return (
    <div className='other-details-loading'>
        <div className="other-details-loading-inner">
            <div className="title"></div>
            <div className="hr"></div>
            <div className="content">
                {Array.from({length: 5}).map((_, i) =>(
                    <div key={i} className="row">
                        <div className="col-1"></div>
                        <div className="col-2"></div>
                    </div>
                ))}
            </div>
            <div className="button"></div>
        </div>
      
    </div>
  )
}

export default OtherDetailsLoading

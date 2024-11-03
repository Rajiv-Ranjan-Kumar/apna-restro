import './MyOrdersLoading.scss'

const MyOrdersLoading = () => {
  return (
    <div className='my-orders-loading'>
        .{Array.from({length: 5}).map((_, i) =>(
            <div key={i} className="my-order-loading-container">
                <div className="header-container"></div>
                <div className="container">
                    {Array.from({length: 2}).map((_, i) =>(
                        <div key={i} className="row">
                            <div className="img"></div>
                            <div className="info">
                                <div className="title"></div>
                                <div className="price"></div>
                                <div className="quantity"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button"></div>
            </div>
        ))}
    </div>
  )
}

export default MyOrdersLoading;

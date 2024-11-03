import './TableLoading.scss';

const TableLoading = () => {
  return (
    <div className='table-loading'>
      <div className="table">
        <div className="head"></div>
        <div className="body">
            {Array.from({length: 5}).map((_, i) =>(
                <div key={i} className="row">
                    {Array.from({length: 7}).map((_, j) =>(
                        <div key={j} className="cell"></div>
                    ))}
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TableLoading

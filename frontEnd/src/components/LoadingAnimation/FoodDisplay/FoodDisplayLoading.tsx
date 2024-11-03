import './FoodDisplayLoading.scss'


const FoodFoodDisplayLoading = () => {
  return (
    <div className='explore-menu-loading'>
      <div className="heading"></div>
      <div className="cart-item-list">
      {Array.from({length:20}).map((_,index)=>(
        <div key={index} className="cart-items">
          <div className="img"></div>
          <div className="bottom">
            <div className="title-retting">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div className="descriptions"></div>
            <div className="descriptions"></div>
            <div className="descriptions"></div>
            <div className="prize"></div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default FoodFoodDisplayLoading ;

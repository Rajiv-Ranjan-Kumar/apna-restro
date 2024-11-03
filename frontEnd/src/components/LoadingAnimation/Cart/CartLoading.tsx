import TableLoading from '../Table/TableLoading';
import './CartLoading.scss';

const CartLoading = () => {
  return (
    <div className='cart-loading'>
      <TableLoading/>

      <div className="amount-and-promo-code">
        <div className="amount">
          <div className="amount-title"></div>
          {Array.from({ length: 3 }).map((_,i)=>(
            <div key={i} className="amount-group">
                <div className="amount-item">
                    <div className="text"></div>
                    <div className="value"></div>
                </div>
                <div className="hr"></div>
          </div>
          ))}

          <div className="button"></div>
        </div>

        <div className="promo-code">
          <div className="promo-code-title"></div>
          <div className="promo-code-input"></div>
        </div>
      </div>
    </div>
  )
}

export default CartLoading

import './PlaceOrder.scss'
import Order from '../../components/Order/Order'
import { useLocation } from 'react-router-dom';

const PlaceOrder = () => {

  const location = useLocation();

  return (
    <div className="place-order">
      <Order dashboard={location.pathname==="/user-dashboard-place-order"?true:false}/>
    </div>
  )
}

export default PlaceOrder

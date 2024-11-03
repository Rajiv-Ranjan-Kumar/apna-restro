import { lazy, Suspense } from 'react';
import './Cart.scss'

const CartItem = lazy(() => import('../../components/CartItem/CartItem'));
import { useLocation } from 'react-router-dom';
import { userRoutes } from '../AllRoutes';
import CartLoading from '../../components/LoadingAnimation/Cart/CartLoading';



const Cart = () => {

  const location = useLocation();

  return (
    <div className="carts">
      <Suspense fallback={<CartLoading/>}>
        <CartItem dashboard={location.pathname===userRoutes.userDashboardCard? true:false}/>
      </Suspense>
    </div>
  )
}

export default Cart

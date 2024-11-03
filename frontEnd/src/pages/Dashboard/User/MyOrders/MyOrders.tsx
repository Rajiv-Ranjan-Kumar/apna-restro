import { lazy, Suspense, useEffect, useState } from 'react'
import './MyOrders.scss'
import { initialOrder } from '../../../../data/Order'
const MyOrder = lazy(() => import('../../../../components/UserDashboard/MyOrders/MyOrder'));
import MyOrdersLoading from '../../../../components/LoadingAnimation/UserDashboard/MyOrders/MyOrdersLoading';

const MyOrders = () => {
  const [data, setData] = useState<{ id: number; date: string; products: { id: number; name: string; image: string; price: number; quantity: number; }[]; total: number; status: string; }[]>([]);
  // const [data, setData] = useState<{ [key: string]: string | number | Array<{ [key: string]: string | number }> }[]>([]);
  
  useEffect(() => {
    setData(initialOrder);
  }, []);
  
  return (
    <div className='my-orders'>
      <Suspense fallback={<MyOrdersLoading/>}><MyOrder data={data}/></Suspense>
    </div>
  )
}
export default MyOrders
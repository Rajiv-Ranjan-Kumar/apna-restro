import { lazy, Suspense } from 'react'
import './TrackOrder.scss'
import OrderTrackingMapLoading from '../../../../components/LoadingAnimation/OrderTrakingMapLoading/OrderTrackingMapLoading';
// import { useParams } from 'react-router-dom';



const OrderTrackingMap = lazy(() => import('../../../../components/OrderTrackingMap/OrderTrackingMap'));
const TrackOrder = () => {
//   const { id } = useParams<{ id: string }>();

  return (
    <div className='track-order'>
      <Suspense fallback={<OrderTrackingMapLoading/>}>
        <OrderTrackingMap />
      </Suspense>
    </div>
  )
}

export default TrackOrder

import { lazy, Suspense } from 'react'
import './Notification.scss';
const Notifications = lazy(() => import( '../../../../components/Notifications/Notifications'));
import NotificationsLoading from '../../../../components/LoadingAnimation/Notifications/NotificationsLoading';





const Notification = () => {

  return (
    <div className="notifications-page">
        <Suspense fallback={<NotificationsLoading fromNotificationPage={true}/>}>
          <Notifications fromNotificationPage={true}/>
        </Suspense>
    </div>
  )
}
export default Notification;
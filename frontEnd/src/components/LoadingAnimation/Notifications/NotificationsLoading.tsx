import React from 'react'
import './NotificationsLoading.scss'

interface notificationLoadingProps {
  fromNotificationPage?: boolean;
}

const NotificationsLoading:React.FC<notificationLoadingProps> = ({fromNotificationPage = false}) => {
  return (
    <div className='notifications-loading'>
      <div className="notification-Loading-list">
        {Array.from({ length: 5 }).map((_, index) =>(
          <div key={index} className="notification-Loading-item">
            <div className="notification-content">
              <div className="title"></div>
              <div className="description"></div>
              {fromNotificationPage &&<div className="time"></div>}
            </div>
            
            {fromNotificationPage &&<div className="button"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationsLoading;

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Notifications.scss';

import { initialNotifications, notificationsTypes } from '../../data/notification';

interface notificationProps {
  fromNotificationPage?: boolean;
}

const Notifications:React.FC<notificationProps> = ({fromNotificationPage}) => {

    const [notifications, setNotifications] = useState<{[key: string]: string}[]>([]);
    const [notificationTypes, setNotificationsTypes] = useState<{[key: string]: string}[]>([]);

    useEffect(() => {
      setNotifications(initialNotifications);
      setNotificationsTypes(notificationsTypes);
    },[]);

    const navigate = useNavigate();

    const handleNotificationAction = (notificationId: string) => {
       // Implement the logic to handle the action for the selected notification
       const notification = notifications.find((notification) => notification.id === notificationId);
       const notifiType = notificationTypes.find((type) => type.type === notification?.type);
       if (notification?.type === notifiType?.type && notifiType?.path) {
         navigate(notifiType.path);
       }
    }
    
  return (
    <div className="notifications-container">
        <div className="notification-list">
          {notifications?.map((notification: {[key: string]: string}) => (
            <div key={notification.id} className="notification-item">
              <div className="notification-content" onClick={() => handleNotificationAction(notification.id)}>
                <h3 className={fromNotificationPage?'title':'title title1'}>{notification.title}</h3>
                <p>{notification.message}</p>
                {fromNotificationPage && <span className="notification-time">{notification.time}</span>}
              </div>
              {fromNotificationPage &&
                <button className="notification-action" onClick={() => handleNotificationAction(notification.id)}>
                    {notification.actionText || 'Mark as Read'}
                </button>
              }
            </div>
          ))}        
        </div>
        {notifications.length === 0 && (
          <div className="no-notifications">
            <p>No new notifications</p>
          </div>
        )}
    </div>
  )
}
export default Notifications
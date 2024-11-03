import { userRoutes } from "../pages/AllRoutes";

export const notificationsTypes = [
    { id: '1', type: 'profile', path: userRoutes.userDashboardProfile },
    { id: '2', type: 'order', path: userRoutes.userDashboardOrder },
    { id: '3', type: 'offer', path: userRoutes.userDashboardOffer },
    { id: '4', type: 'settings', path: userRoutes.userDashboardSettings },
]

export const initialNotifications = [
    { id: '1', type: notificationsTypes[0].type, title: 'Profile Update', message: 'Your profile has been updated', time: '3 hours ago', actionText: 'View' },
    { id: '2', type: notificationsTypes[1].type, title: 'Order Confirmation', message: 'Your order has been confirmed', time: '1 day ago', actionText: 'View Order' },
    { id: '3', type: notificationsTypes[2].type, title: 'New Offer', message: 'You have a new offer available', time: '4 hours ago', actionText: 'View Offer' },
    { id: '4', type: notificationsTypes[3].type, title: 'Settings Changed', message: 'Your account settings have been updated', time: '2 days ago', actionText: 'Review' }
];

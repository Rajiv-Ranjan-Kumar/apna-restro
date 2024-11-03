export const generalRoutes = {
    home: '/',
    cart: '/cart',
    order: '/order',
    searchItems: '/search-items',
    forgotPassword: '/forgot-password',
    pageNotFound: '/*',
}


export const userRoutes = {
    userDashboard: '/user-dashboard',
    userDashboardProfile: '/user-dashboard-profile',
    userDashboardOrder: '/user-dashboard-my-order',
    userDashboardOffer: '/user-dashboard-offers',
    userDashboardSettings: '/user-dashboard-settings',
    userDashboardHelp: '/user-dashboard-help',
    userDashboardSearchItems: '/user-dashboard-search-items',
    userDashboardCard: '/user-dashboard-cart',
    userDashboardNotification: '/user-dashboard-notification',
    userDashboardPlaceOrder: '/user-dashboard-place-order',
    userDashboardTrackOrder: (id: string)=>`/user-dashboard-track-order/${id}`,
};
 

export const adminRoutes = {
    adminDashboard: '/admin-dashboard',
    adminDashboardOrders: '/admin-dashboard-orders',
    adminDashboardViewOrder: (id: string) => `/admin-dashboard-view-order/${id}`,
    adminDashboardUsers: '/admin-dashboard-users',
    adminDashboardUserDetails: (id: string) => `/admin-dashboard-user-details/${id}`,
    adminDashboardCategories: '/admin-dashboard-food-category',
    adminDashboardCategoriesAdd: '/admin-dashboard-add-category',
    adminDashboardCategoriesUpdate:(id: string)=> `/admin-dashboard-categories-Update/${id}`,
    adminDashboardFoods: '/admin-dashboard-foods',
    adminDashboardFoodsAdd: '/admin-dashboard-foods-add',
    adminDashboardFoodsUpdate: (id: string)=>`/admin-dashboard-foods-update/${id}`,
    adminDashboardOffers: '/admin-dashboard-foods-offers',
    adminDashboardAddFoodOffer: '/admin-dashboard-add-food-offer',
    adminDashboardUpdateFoodOffer: (id: string)=>`/admin-dashboard-update-food-offer/${id}`,
    adminDashboardAnalytics: '/admin-dashboard-analytics',
}



// export const isUserDashboardRoute = Object.values(userRoutes)
//     .filter((route) => typeof route === 'string')
//     .some((route) => location.pathname.startsWith(route));

// export  const isAdminDashboardRoute = Object.values(adminRoutes)
//     .filter((route) => typeof route === 'string')
//     .some((route) => location.pathname.startsWith(route));

const isStringRoute = (route: string | ((id: string) => string)): route is string => {
    return typeof route === 'string';
}


export const isUserDashboardRoute = (pathname: string): boolean =>
    Object.values(userRoutes).filter(isStringRoute).some(route => pathname.startsWith(route));


export const isAdminDashboardRoute = (pathname: string): boolean =>
    Object.values(adminRoutes).filter(isStringRoute).some(route => pathname.startsWith(route));

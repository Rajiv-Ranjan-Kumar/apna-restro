import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import { generalRoutes, userRoutes, adminRoutes, isUserDashboardRoute, isAdminDashboardRoute } from './pages/AllRoutes';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import SearchItems from './pages/SearchItems/SearchItems';
import ProgressBar from './components/LoadingAnimation/ProgressBar/ProgressBar';
import Dashboard from './pages/Dashboard/User/Dashboard/Dashboard';
import Profile from './pages/Dashboard/User/Profile/Profile';
import MyOrder from './pages/Dashboard/User/MyOrders/MyOrders.tsx';
import TrackOrder from './pages/Dashboard/User/TrackOrder/TrackOrder.tsx';
import Offers from './pages/Dashboard/User/Offers/Offers';
import Settings from './pages/Dashboard/User/Settings/Settings';
import Help from './pages/Dashboard/User/Help/Help';
import DashboardLayout from './pages/Dashboard/User/DashboardLayout';
import Notification from './pages/Dashboard/User/Notification/Notification';
import AdminDashboardLayout from './pages/Dashboard/Admin/AdminDashboardLayout';
import AdminDashboard from './pages/Dashboard/Admin/AdminDashboard/AdminDashboard';
import Orders from './pages/Dashboard/Admin/Orders/Orders';
import ViewOrder from './pages/Dashboard/Admin/Orders/ViewOrder/ViewOrder';
import Users from './pages/Dashboard/Admin/Users/Users';
import UserDetails from './pages/Dashboard/Admin/Users/UserDetails/UserDetails';
import Foods from './pages/Dashboard/Admin/Foods/Foods';
import AddFoods from './pages/Dashboard/Admin/Foods/AddFoods/AddFoods';
import UpdateFoods from './pages/Dashboard/Admin/Foods/UpdateFoods/UpdateFoods';
import FoodOffers from './pages/Dashboard/Admin/FoodOffers/FoodOffers';
import FoodCategories from './pages/Dashboard/Admin/FoodCategories/FoodCategories';
import Analytics from './pages/Dashboard/Admin/Analytics/Analytics';
import AddFoodOffers from './pages/Dashboard/Admin/FoodOffers/AddFoodOffers/AddFoodOffers';
import UpdateOffer from './pages/Dashboard/Admin/FoodOffers/UpdateOffers/UpdateOffer';
import AddCategories from './pages/Dashboard/Admin/FoodCategories/AddCategories/AddCategories';
import UpdateCategories from './pages/Dashboard/Admin/FoodCategories/UpdateCategories/UpdateCategories';
import TopNavbar from './components/TopNavbar/TopNavbar';
import NotFound from './pages/NotFount/NotFound.tsx';
import ForgotPassword from './pages/forgotPassword/ForgotPassword.tsx';
import ProtectedRoute from '../src/components/ProtectedRoute.tsx';
import { AuthProvider } from '../src/context/AuthContext.tsx';



const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevPath, setPrevPath] = useState('');


  const location = useLocation();



  useEffect(() => {
    setPrevPath(location.pathname)
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;

    const handleStartLoading = () => {
      setIsAnimating(true);
    };

    const handleStopLoading = () => {
      setTimeout(() => {
        setIsAnimating(false);
      }, 1500);
    };

    handleStartLoading();

    if (currentPath !== prevPath) 
      handleStopLoading();

    if(currentPath===prevPath)
      handleStopLoading()

    setPrevPath(currentPath);
    
  }, [location, prevPath]);



  return (
    <AuthProvider>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      {isAnimating && <ProgressBar isAnimating={isAnimating} />}
      <div className={!isUserDashboardRoute(location.pathname) && !isAdminDashboardRoute(location.pathname) ? 'app' : ''}>
        {!isUserDashboardRoute(location.pathname) && !isAdminDashboardRoute(location.pathname)&&<TopNavbar setShowLogin={setShowLogin} />}
        <Routes>
          {/* General Routes */}
          <Route path={generalRoutes.home} element={<Home />} />
          <Route path={generalRoutes.forgotPassword} element={<ForgotPassword />} />
          <Route path={generalRoutes.cart} element={<Cart />} />
          <Route path={generalRoutes.order} element={<PlaceOrder />} />
          <Route path={generalRoutes.searchItems} element={<SearchItems />} />
          <Route path={generalRoutes.pageNotFound} element={<NotFound />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute requiredRoles={['user']} setShowLogin={setShowLogin}/>}>
            <Route path={userRoutes.userDashboard} element={<DashboardLayout><Dashboard /></DashboardLayout>} />
            <Route path={userRoutes.userDashboardProfile} element={<DashboardLayout><Profile /></DashboardLayout>} />
            <Route path={userRoutes.userDashboardOrder} element={<DashboardLayout><MyOrder /></DashboardLayout>} />
            <Route path={userRoutes.userDashboardOffer} element={<DashboardLayout><Offers /></DashboardLayout>} />
            <Route path={userRoutes.userDashboardSettings} element={<DashboardLayout><Settings /></DashboardLayout>} />
            <Route path={userRoutes.userDashboardHelp} element={<DashboardLayout><Help /></DashboardLayout>} />
            <Route path={userRoutes.userDashboardSearchItems} element={<DashboardLayout><SearchItems /></DashboardLayout>} />
            <Route path={userRoutes.userDashboardCard} element={<DashboardLayout><Cart /></DashboardLayout>} />
            <Route path={userRoutes.userDashboardNotification} element={<DashboardLayout><Notification /></DashboardLayout>} />
            <Route path={userRoutes.userDashboardPlaceOrder} element={<DashboardLayout><PlaceOrder /></DashboardLayout>} />
            <Route path={userRoutes.userDashboardTrackOrder(':id')} element={<DashboardLayout><TrackOrder /></DashboardLayout>} />
          </Route>

          <Route element={<ProtectedRoute requiredRoles={['admin', 'staff']} setShowLogin={setShowLogin}/>}>
            <Route path={adminRoutes.adminDashboard} element={<AdminDashboardLayout><AdminDashboard /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardOrders} element={<AdminDashboardLayout><Orders /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardViewOrder(':id')} element={<AdminDashboardLayout><ViewOrder /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardUsers} element={<AdminDashboardLayout><Users /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardUserDetails(':id')} element={<AdminDashboardLayout><UserDetails /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardCategories} element={<AdminDashboardLayout><FoodCategories /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardCategoriesAdd} element={<AdminDashboardLayout><AddCategories /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardCategoriesUpdate(':id')} element={<AdminDashboardLayout><UpdateCategories /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardFoods} element={<AdminDashboardLayout><Foods /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardFoodsAdd} element={<AdminDashboardLayout><AddFoods /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardFoodsUpdate(':id')} element={<AdminDashboardLayout><UpdateFoods /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardOffers} element={<AdminDashboardLayout><FoodOffers /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardAddFoodOffer} element={<AdminDashboardLayout><AddFoodOffers /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardUpdateFoodOffer(':id')} element={<AdminDashboardLayout><UpdateOffer /></AdminDashboardLayout>} />
            <Route path={adminRoutes.adminDashboardAnalytics} element={<AdminDashboardLayout><Analytics /></AdminDashboardLayout>} />
          </Route>
        </Routes>
      </div>
      {!isUserDashboardRoute(location.pathname) && !isAdminDashboardRoute(location.pathname) && <Footer />}
    </AuthProvider>
  )
}

export default App;

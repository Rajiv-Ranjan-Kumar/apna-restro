import './SideNavbar.scss'
import { Link, useLocation } from 'react-router-dom';
import { userRoutes, adminRoutes } from '../../pages/AllRoutes';
import { FaChartBar, FaCog, FaHome, FaQuestionCircle, FaShoppingCart, FaSignOutAlt, FaTag, FaThList, FaUser, FaUsers, FaUtensils } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';


const SideNavbar = ({ fromAdminDashboard=false }:{fromAdminDashboard?: boolean}) => {

    const currentLocation = useLocation()
    const { logout } = useAuth();

    return (
        <div className="side-nav-bar">
            {fromAdminDashboard?(
                <>
                <div className="side-nav-bar-header">
                    <h2>Food Admin</h2>
                </div>
                <ul className="side-nav-bar-menu">
                    <Link to={adminRoutes.adminDashboard}><li className={adminRoutes.adminDashboard === currentLocation.pathname ? 'active' : ''}><FaHome /> Dashboard</li></Link>
                    <Link to={adminRoutes.adminDashboardOrders}><li className={adminRoutes.adminDashboardOrders === currentLocation.pathname ? 'active' : ''}><FaShoppingCart /> Orders</li></Link>
                    <Link to={adminRoutes.adminDashboardUsers}><li className={adminRoutes.adminDashboardUsers === currentLocation.pathname ? 'active' : ''}><FaUsers /> Users</li></Link>
                    <Link to={adminRoutes.adminDashboardCategories}><li className={adminRoutes.adminDashboardCategories === currentLocation.pathname ? 'active' : ''}><FaThList /> Categories</li></Link>
                    <Link to={adminRoutes.adminDashboardFoods}><li className={adminRoutes.adminDashboardFoods === currentLocation.pathname ? 'active' : ''}><FaUtensils /> Foods</li></Link>
                    <Link to={adminRoutes.adminDashboardOffers}><li className={adminRoutes.adminDashboardOffers === currentLocation.pathname ? 'active' : ''}><FaTag /> Offers</li></Link>
                    <Link to={adminRoutes.adminDashboardAnalytics}><li className={adminRoutes.adminDashboardAnalytics === currentLocation.pathname ? 'active' : ''}><FaChartBar /> Analytics</li></Link>
                    <li><FaCog /> Settings</li>
                    <li onClick={()=>logout()}><FaSignOutAlt/>Log out</li>
                </ul>
                </>
            ):(
                <ul className='side-nav-bar-menu'>
                    <Link to={userRoutes.userDashboard}><li className={userRoutes.userDashboard === currentLocation.pathname ? 'active' : ''}><FaHome /> Dashboard</li></Link>
                    <Link to={userRoutes.userDashboardProfile}><li className={userRoutes.userDashboardProfile=== currentLocation.pathname ? 'active' : ''}><FaUser /> Profile</li></Link>
                    <Link to={userRoutes.userDashboardOrder}><li className={userRoutes.userDashboardOrder === currentLocation.pathname ? 'active' : ''}><FaShoppingCart /> My order</li></Link>
                    <Link to={userRoutes.userDashboardOffer}><li className={userRoutes.userDashboardOffer === currentLocation.pathname ? 'active' : ''}><FaTag/> Offers</li></Link>
                    <Link to={userRoutes.userDashboardSettings}><li className={userRoutes.userDashboardSettings === currentLocation.pathname ? 'active' : ''}><FaCog/> Settings</li></Link>
                    <Link to={userRoutes.userDashboardHelp}><li className={userRoutes.userDashboardHelp === currentLocation.pathname ? 'active' : ''}><FaQuestionCircle /> Help</li></Link>
                    <li onClick={()=>logout()}><FaSignOutAlt/>Log out</li>
                </ul>
            )}
        </div>
    )
}

export default SideNavbar;

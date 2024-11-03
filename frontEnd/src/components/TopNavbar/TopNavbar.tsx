import { useContext, useEffect, useState } from 'react';
import './TopNavbar.scss';
import { Link, useLocation } from 'react-router-dom'
import { adminRoutes, userRoutes, generalRoutes } from '../../pages/AllRoutes'
import { assets } from '../../assets/assets'
import { FaBell, FaSearch, FaShoppingBasket, FaUser } from 'react-icons/fa'
import { StoreContext } from '../../context/StoreContext';


interface TopNavbarProps {
    isMenuOpen?: boolean;
    dashboardName?: string;
    setIsMenuOpen?: (isMenuOpen: boolean) => void;
    setShowLogin?: (showLogin: boolean) => void;
}

const TopNavbar:React.FC<TopNavbarProps> = ({isMenuOpen, dashboardName, setIsMenuOpen, setShowLogin}) => {
    const storeContext = useContext(StoreContext);
    const { cartItems  } = storeContext!;

    const location = useLocation();

    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const [profileImage, setProfileImage] = useState('');

    const validMenuItems = ['home', 'menu', 'mobile app', 'contact us']; 
    const [menu, setMenu] = useState('home');



    const handleMenuToggle = () => {
        if (setIsMenuOpen) {
            setIsMenuOpen(!isMenuOpen);
        }
    };



    const handleActiveMenu = (value: string) => {
        if (validMenuItems.includes(value)){
            setMenu(value);
        }
    }; 



    const handleLogin = () => {
        if (setShowLogin) {
            setShowLogin(true);
        }
    }



    useEffect(() => {
        setProfileImage('')
    },[]); 



    useEffect(() => {
        if(location.pathname !== '/')setMenu('hidden');
        if(location.pathname === '/')setMenu('home');
    },[location.pathname])



    useEffect(() => {
        setIsOpenNotification(false);
        const timer = setTimeout(() => {
            setIsOpenNotification(true);
        }, 5000);
    
        return () => clearTimeout(timer);
    }, []);




  return (
    <>
    {dashboardName ?(
        <>
            {dashboardName === 'admin'?(
                <nav className='top-nav-bar'>
                    <div className="logo-container">
                        <Link to={adminRoutes.adminDashboard}><img src={assets.logo} alt="" /></Link>
                    </div>

                    <div className="icons-and-profile-buttons-container">
                        <div className="icons">
                            <div className="notification-icon">
                                <Link to={userRoutes.userDashboardNotification}><FaBell /></Link>

                                {isOpenNotification&&<div className="dot"></div>}
                            </div>
                        </div>

                        <div className="profile-icon">
                            <Link to={adminRoutes.adminDashboard}>
                                {profileImage ? <img src={profileImage} alt="" />: <div className="user-icon"><FaUser /></div>}
                            </Link>
                        </div>

                        <div className={isMenuOpen?"mobile-button mobile-button-click":"mobile-button"} onClick={()=>handleMenuToggle()}>
                            <div className="pii"></div>
                            <div className="pii"></div>
                            <div className="pii"></div>
                        </div>
                    </div>
                </nav>
            ):(
                <nav className='top-nav-bar'>
                    <div className="logo-container">
                        <Link to={userRoutes.userDashboard}><img src={assets.logo} alt="" /></Link>
                    </div>

                    <div className="icons-and-profile-buttons-container">
                        <div className="icons">
                            <Link to={userRoutes.userDashboardSearchItems}><FaSearch /></Link>

                            <div className="cart-container">
                                <Link to={userRoutes.userDashboardCard}><FaShoppingBasket /></Link>
                                {Object.keys(cartItems).length>0 && <div className="dot"></div>}
                            </div>
                            
                            <div className="notification-icon">
                                <Link to={userRoutes.userDashboardNotification}><FaBell /></Link>

                                {isOpenNotification&&<div className="dot"></div>}
                            </div>
                        </div>

                        <div className="profile-icon">
                            <Link to={userRoutes.userDashboardProfile}>
                                {profileImage ? <img src={profileImage} alt="" />: <div className="user-icon"><FaUser /></div>}
                            </Link>
                        </div>

                        <div className={isMenuOpen?"mobile-button mobile-button-click":"mobile-button"} onClick={()=>handleMenuToggle()}>
                            <div className="pii"></div>
                            <div className="pii"></div>
                            <div className="pii"></div>
                        </div>
                    </div>
                </nav>
            )}
        </>
    ):(
        <nav className='top-nav-bar general'>
            <div className="logo-container">
                <Link to={generalRoutes.home}><img src={assets.logo} alt="" /></Link>
            </div>

            <div className={`navbar-menu ${menu === 'hidden'?"navbar-menu hidden":"navbar-menu"}`}>
                <a href='#home' className='active' onClick={()=>handleActiveMenu('home')}>home</a>
                <a href='#explore-menu' onClick={()=>handleActiveMenu('menu')}>menu</a>
                <a href='#app-download' onClick={()=>handleActiveMenu('mobile app')}>mobile app</a>
                <a href='#footer' onClick={()=>handleActiveMenu('contact us')}>contact us</a>
            </div>

            <div className="icons-and-profile-buttons-container">
                <div className="icons">
                    <Link to={generalRoutes.searchItems}><FaSearch /></Link>

                    <div className="cart-container">
                        <Link to={generalRoutes.cart}><FaShoppingBasket /></Link>
                        {Object.keys(cartItems).length>0 && <div className="dot"></div>}
                    </div>
                </div>

                <button type="button" className='button' onClick={handleLogin}>sign in</button>
            </div>
        </nav>
    )}
    </>
  )
}

export default TopNavbar

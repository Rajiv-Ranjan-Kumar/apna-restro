import { lazy, Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import './Home.scss';

const Header = lazy(() => import('../../components/Header/Header'));
const ExploreMenu = lazy(() => import('../../components/ExploreMenu/ExploreMenu'));
const FoodDisplay = lazy(() => import('../../components/FoodDisplay/FoodDisplay'));
import AppDownload from '../../components/AppDownload/AppDownload';

import { FaArrowUp } from 'react-icons/fa';
import { assets } from '../../assets/assets';

import ExploreMenuLoading from '../../components/LoadingAnimation/ExploreMenu/ExploreMenuLoading';
import HeaderLoading from '../../components/LoadingAnimation/Header/HeaderLoading';
import FoodFoodDisplayLoading from '../../components/LoadingAnimation/FoodDisplay/FoodDisplayLoading';


const Home = () => {
  const [category, setCategory] = useState('All');
  const [showButton, setShowButton] = useState(false);

  const headerProps = {
    title: 'Order your favorite food here',
    description: 'Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience. one delicious meal at a time',
    image: assets.header_img,
    buttonName: 'View Menu',
  }


  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      if (location.hash) {
        history.replaceState(null, '', location.pathname);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  return (
    <div id='home' className='home'>
      <Suspense fallback={<HeaderLoading/>}><Header title={headerProps.title} description={headerProps.description} image={headerProps.image} buttonName={headerProps.buttonName} fromDashboard={false}/></Suspense>
      <Suspense fallback={<ExploreMenuLoading/>}><ExploreMenu category={category} dashboard={false} setCategory={setCategory}/></Suspense>
      <Suspense fallback={<FoodFoodDisplayLoading/>}><FoodDisplay category={category} dashboard={false} /></Suspense>
      <AppDownload />

      <div className={`top-button ${showButton ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FaArrowUp size={24} />
      </div>
    </div>
  );
};

export default Home;

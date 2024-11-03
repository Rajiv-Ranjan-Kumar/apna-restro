import { lazy, Suspense, useState } from 'react'
import './Dashboard.scss'

const Header  = lazy(()=>import( '../../../../components/Header/Header'));
const ExploreMenu = lazy(()=>import('../../../../components/ExploreMenu/ExploreMenu'));
const FoodDisplay = lazy(()=>import('../../../../components/FoodDisplay/FoodDisplay'));

import HeaderLoading from '../../../../components/LoadingAnimation/Header/HeaderLoading';
import ExploreMenuLoading from '../../../../components/LoadingAnimation/ExploreMenu/ExploreMenuLoading';
import FoodDisplayLoading from '../../../../components/LoadingAnimation/FoodDisplay/FoodDisplayLoading';

import { assets } from '../../../../assets/assets';

const Dashboard = () => {

    const [category, setCategory] = useState('All');

  return (
    <div className="dashboard">
        <div className="header-container">
            <Suspense fallback={<HeaderLoading fromDashboard={true}/>}>
                <Header 
                    title={'Healthy Food is the key to your good mood'} 
                    description={'For all pizza lovers get $10 off all Pizza based meals.'} 
                    image={assets.header_img} 
                    buttonName={'Order Now'} 
                    fromDashboard={true}
                />
            </Suspense>
        </div>

        <div className="category-container">
            <Suspense fallback={<ExploreMenuLoading fromDashboard={true}/>}>
                <ExploreMenu category={category} dashboard={true} setCategory={setCategory} />
            </Suspense>
        </div>

        <div className="product-container">
            <Suspense fallback={<FoodDisplayLoading />}>
                <FoodDisplay category={category} dashboard={true}/>
            </Suspense> 
        </div>
    </div>
  )
}

export default Dashboard;
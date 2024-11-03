import React from 'react';
import './ExploreMenuLoading.scss';

interface ExploreMenuLoadingProps{
  fromDashboard?: boolean;
}

const ExploreMenuLoading:React.FC<ExploreMenuLoadingProps> = ({fromDashboard=false}) => {
  return (
    <div className='food-item-display-Loading'>
      <div className="heading"></div>
      {!fromDashboard&&<div className="description"></div>}
      <div className="explore-menu-list">
        {Array.from({length:20}).map((_,index)=>(
            <div key={index} className="explore-menu-list-item">
                <div className="img"></div>
                <div className="menu-name"></div>
            </div>     
        ))}
      </div>
      <div className="hr"></div>
    </div>
  )
}

export default ExploreMenuLoading

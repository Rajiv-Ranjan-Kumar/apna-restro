import React from 'react'
import './ExploreMenu.scss'
import { menu_list } from '../../data/common';


interface MenuItem {
    menu_name: string;
    menu_image: string;
}

interface ExploreMenuProps {
    category: string;
    dashboard: boolean,
    setCategory: (category: string) => void;
}

const ExploreMenu: React.FC<ExploreMenuProps> = ({category, dashboard=false, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 className={dashboard?'heading':''}>Explore our menu</h1>
      {!dashboard&&<p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience. one delicious meal at a time</p>}
      <div className="explore-menu-list">
        {menu_list.map((item:MenuItem, index:number)=>{
            return(
                <div onClick={()=>setCategory(category===item.menu_name?"All":item.menu_name)} key={index} className="eplore-menu-list-item">
                    <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="" loading='lazy' />
                    <p className={category === item.menu_name?"_active":""}>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      {!dashboard&&<hr/>}
    </div>
  )
}

export default ExploreMenu

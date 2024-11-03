import React, { useContext } from 'react';
import './FoodDisplay.scss';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

interface FoodDisplayProps {
    dashboard: boolean,
    category: string;
}

const FoodDisplay: React.FC<FoodDisplayProps> = ({ category, dashboard=false }) => {
    const storeContext = useContext(StoreContext);

    if (!storeContext) {
        return <div>No food items available.</div>;
    }

    const { food_list } = storeContext;

    return (
        <div className={!dashboard?'food-display':'food-display dasboard-food-display'} id='food-display'>
            <h2 className={dashboard?'h2':''}>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list
                    .filter(item => category === "All" || item.category === category)
                    .map((item, index) => (
                        <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} is_available={item.is_available ?? true}/>
                ))}
            </div>
        </div>
    );
};

export default FoodDisplay;

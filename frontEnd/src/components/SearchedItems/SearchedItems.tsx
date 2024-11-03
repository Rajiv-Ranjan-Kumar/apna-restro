import React, { useContext } from 'react'
import './SearchedItems.scss'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

interface SearchedItemsProps {
    searchebleItem: string
}


const SearchedItems: React.FC<SearchedItemsProps> = ({ searchebleItem }) => {

    const storeContext = useContext(StoreContext);

    if (!storeContext) {
        return null;
    }

    const { searchItems } = storeContext;
    const filteredItems = searchItems(searchebleItem);


    return (
        <div className='searched-items'>
            {filteredItems.length > 0 ? (
                <div className="item">
                    {filteredItems.map((item) => (
                        <FoodItem
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                            is_available={item.is_available??true}
                        />
                    ))}
                </div>
            ) : (
                <p>No items found.</p>
            )}
        </div>
    )
}

export default SearchedItems

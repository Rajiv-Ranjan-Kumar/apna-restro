import React, { useContext } from 'react'
import './FoodItem.scss'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

interface items {
    id: string,
    name: string,
    price: number,
    description: string,
    image: string,
    is_available: boolean
}

const FoodItem: React.FC<items> = ({ id, name, price, description, image, is_available }) => {

    const storeContext = useContext(StoreContext);

    if (!storeContext) {
        return null;
    }

    const { cartItems, addCartItems, removeCartItems } = storeContext;

    return (
        <div className={is_available ? "food-item" : "food-item not-available"}>
            <div className="food-item-image-container">
                <img src={image} alt={name} loading='lazy'/>
                {is_available && 
                    <span>
                        {!cartItems[id]
                            ? <img src={assets.add_icon_white} alt='' loading='lazy' className='add' onClick={() => addCartItems(id)} />
                            : <div className='food-item-counter'>
                                <img src={assets.remove_icon_red} alt="" loading='lazy' onClick={() => removeCartItems(id)} />
                                <p>{cartItems[id]}</p>
                                <img src={assets.add_icon_green} alt="" loading='lazy' onClick={() => addCartItems(id)} />
                            </div>
                        }
                    </span>
                }
                
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" loading='lazy' />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>₹{price}</p>
            </div>
        </div>

    )
}

export default FoodItem

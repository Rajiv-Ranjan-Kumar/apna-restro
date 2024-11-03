import React, { useContext, useState } from 'react';
import './CartItem.scss';
import { StoreContext } from '../../context/StoreContext';
import { initialOffers } from '../../data/offers';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { generalRoutes, userRoutes } from '../../pages/AllRoutes';
import { FaTrash } from 'react-icons/fa';
import CartTotal from '../CartTotal/CartTotal';


interface CartItemProps {
  dashboard: boolean;
}

const CartItem: React.FC<CartItemProps> = ({ dashboard }) => {

  const storeContext = useContext(StoreContext);
  const navigate = useNavigate();

  const { cartItems, food_list, removeCartItems, getTotalCartAmount } = storeContext!;

  const [promoCode, setPromoCode] = useState('');
  const [promoErrorMessage, setPromoErrorMessage] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const code = e.target.value;
      setPromoErrorMessage('');
      setPromoCode(code);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(promoCode);
    const offer = initialOffers.find((offer) => offer.offerCode === promoCode);

    if (!offer) {
      setPromoErrorMessage('Invalid promo code');
      return;
    }

    if (!offer.active) {
      setPromoErrorMessage('Offer is not active');
      return;
    }

    if (!offer.isUsed) {
      setPromoErrorMessage('Offer is already used');
      return;
    }

    // if (offer && Object.keys(offer).length > 0 && offer.active){
    //   const matchingOffer = Object.keys(cartItems)
    //   .filter((key) => key === offer.foodName)
    //   .map((key) => cartItems[key]);

    //   if (matchingOffer.length < 0) {
    //     setPromoErrorMessage('No matching offer found');
    //     return 0;
    //   }

    //   console.log(matchingOffer,'ll');
    // }
    console.log(offer);
  }

  return (
    <div className={dashboard?'cart cart2':'cart'}>
      {Object.keys(cartItems).length > 0 ? (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Items</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {food_list.map((item, index) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <tr key={index} className="cart-table-row">
                      <td><img src={item.image} alt="" loading='lazy' /></td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>{cartItems[item._id]}</td>
                      <td>${item.price * cartItems[item._id]}</td>
                      <td className="cross" onClick={() => removeCartItems(item._id)}><FaTrash className='remove-button'/></td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>

          {getTotalCartAmount() > 0 && (
            <div className="cart-bottom">
              <div className="cart-amounts-container">
                <CartTotal totalCartAmount={getTotalCartAmount()} deliveryFee={2}/>
                <button onClick={() => !dashboard ? navigate(generalRoutes.order) : navigate(userRoutes.userDashboardPlaceOrder)}>PROCEED TO CHECKOUT</button>
              </div>
              
              <div className='promo-code'>
                <p>If you have a promo code, enter it here</p>
                <form onSubmit={handleSubmit} className="cart-promo-code-input">
                  <div className={dashboard?"input-container":"input-container input-container2"}>
                    <input type="text" name='promoCode' value={promoCode} placeholder='Promo code' onChange={handleInput}/>
                    <button>Submit</button>
                  </div>
                  {promoErrorMessage&&<label htmlFor="promoCode">{promoErrorMessage}</label>}
                </form>

              </div>
            </div>
          )}
        </>
      ) : (
        <div className="missing-cart-items-container">
          <p>Your Cart Items are missing...</p>
          <img src={assets.bag_icon} alt="" loading='lazy' />
        </div>
      )}
    </div>
  );
};

export default CartItem;

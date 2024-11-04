import'./CartTotal.scss';

const CartTotal = ({ totalCartAmount, deliveryFee }: { totalCartAmount: number, deliveryFee: number }) => {
    return (
        <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>₹{totalCartAmount}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>₹{deliveryFee}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Total</p>
                    <p>₹{totalCartAmount + 2}</p>
                </div>
            </div>

        </div>
    )
}

export default CartTotal

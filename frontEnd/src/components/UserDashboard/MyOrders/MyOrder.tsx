import { userRoutes } from '../../../pages/AllRoutes';
import './MyOrder.scss'
import { useNavigate } from 'react-router-dom';


const MyOrder = ({data}: { data: { id: number; date: string; products: { id: number; name: string; image: string; price: number; quantity: number; }[]; total: number; status: string; }[] }) => {
  
  const navigate = useNavigate();

  return (
        <div className="my-order">
          <div className="order-list">
            {data.map((order) => (
              <div className="order-item" key={order.id}>
                <div className="order-header">
                  <span className="order-id">Order #{order.id}</span>
                  <span className="order-date">{order.date}</span>
                  <span className={`order-status 
                    ${order.status === 'Delivered' && 'delivered'}
                    ${order.status === 'On the way' && 'on-the-way'}
                    ${order.status === 'Processing' && 'processing'}
                    ${order.status === 'Cancelled' && 'cancelled'}
                  `}>{order.status}</span>
                </div>
                <div className="order-details">
                  {order.products.map((product) => (
                    <div className="product-item" key={product.id}>
                      <img src={product.image} alt={product.name} className="product-image" />
                      <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">${product.price.toFixed(2)}</p>
                        <p className="product-quantity">Quantity: {product.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="order-total">
                  <span>Total: ${order.total.toFixed(2)}</span>
                  {order.status === 'Processing' && <button>Cancel</button>}
                  {order.status === 'On the way' && <button onClick={()=> navigate(userRoutes.userDashboardTrackOrder(order.id.toString()))}>Track Now</button>}
                </div>
              </div>
            ))}
          </div>
        </div>
    
  )
}
export default MyOrder
import React from 'react'
import './OrderDetailsShow.scss';


interface DeliveryAddress {
    flatNo: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

interface Customer {
    name: string;
    email: string;
    mobile: string;
    deliveryAddress: DeliveryAddress;
}

interface Item {
    name: string;
    quantity: number;
}

interface Order {
    id: string;
    customer: Customer;
    orderDate: string;
    totalAmount: number;
    status: string;
    items: Item[];
}

interface OrderDetailsShowProps {
    order: Order|undefined;
    handleStatusChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


const OrderDetailsShow:React.FC<OrderDetailsShowProps> = ({ order, handleStatusChange }) => {
  return (
    <div className="view-order">
      <h2>Order Details</h2>
      {order ? (
        <div className='view-order-inner'>
          <div className="order-details">
            <h3>Customer Details:</h3>
            <table>
              <tbody>
                <tr>
                  <td><strong>Order ID:</strong></td>
                  <td>{order.id}</td>
                </tr>
                <tr>
                  <td><strong>Customer Name:</strong></td>
                  <td>{order.customer.name}</td>
                </tr>
                <tr>
                  <td><strong>Customer Email:</strong></td>
                  <td>{order.customer.email}</td>
                </tr>
                <tr>
                  <td><strong>Customer Phone No:</strong></td>
                  <td>{order.customer.mobile}</td>
                </tr>
                <tr>
                  <td><strong>Order Date:</strong></td>
                  <td>{order.orderDate}</td>
                </tr>
                <tr>
                  <td><strong>Total Amount:</strong></td>
                  <td>₹{order.totalAmount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Status:</strong></td>
                  <td>
                    <select value={order.status} onChange={(e)=>handleStatusChange(e)}>
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="product-details">
            <h3>Order Items:</h3>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="delivery-address">
            <h3>Delivery Address:</h3>
            <table>
              <tbody>
                <tr>
                  <td><strong>Flat No :</strong></td>
                  <td>{order.customer.deliveryAddress.flatNo}</td>
                </tr>
                <tr>
                  <td><strong>Street :</strong></td>
                  <td>{order.customer.deliveryAddress.street}</td>
                </tr>
                <tr>
                  <td><strong>City :</strong></td>
                  <td>{order.customer.deliveryAddress.city}</td>
                </tr>
                <tr>
                  <td><strong>State :</strong></td>
                  <td>{order.customer.deliveryAddress.state}</td>
                </tr>
                <tr>
                  <td><strong>Country :</strong></td>
                  <td>{order.customer.deliveryAddress.country}</td>
                </tr>
                <tr>
                  <td><strong>Zip Code :</strong></td>
                  <td>{order.customer.deliveryAddress.zipCode}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>Order not found.</p>
      )}
    </div>
  )
}

export default OrderDetailsShow

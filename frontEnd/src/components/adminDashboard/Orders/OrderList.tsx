import React from 'react'
import './OrderList.scss'
import { FaEdit } from 'react-icons/fa';

interface Order {
    id: string;
    customer: {
      name: string;
    };
    orderDate: string;
    totalAmount: number;
    status: string;
}

interface OrderListProps {
  currentOrders: Order[];
  viewOrderDetails: (orderId: string) => void;
}

const OrderList:React.FC<OrderListProps> = ({currentOrders, viewOrderDetails}) => {
  return (
    <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.length > 0 ? (
            currentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer.name}</td>
                <td>{order.orderDate}</td>
                <td>${order.totalAmount.toFixed(2)}</td>
                <td>{order.status}</td>
                <td>
                  <FaEdit className="edit-icon" onClick={() => viewOrderDetails(order.id)} style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'green'}}/>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No orders found.</td>
            </tr>
          )}
        </tbody>
      </table>
  )
}

export default OrderList

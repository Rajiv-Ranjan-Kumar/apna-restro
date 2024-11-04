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
  const tableHeading = ['Order ID', 'Customer Name', 'Order Date', 'Total Amount', 'Status', 'Actions'];
  return (
    <table className="orders-table">
        <thead>
          <tr>
            {tableHeading.map((heading, index) =>(
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentOrders.length > 0 ? (
            currentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer.name}</td>
                <td>{order.orderDate}</td>
                <td>₹{order.totalAmount.toFixed(2)}</td>
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

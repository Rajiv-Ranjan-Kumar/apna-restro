import { useEffect, useState } from 'react';
import './ViewOrder.scss'

import { useParams } from 'react-router-dom';
import { initialOrders } from '../../../../../data/AdminDashboardOrders';
import OrderDetailsShow from '../../../../../components/adminDashboard/Orders/OrderDetailsShow/OrderDetailsShow';

const ViewOrder = () => {
  const [order, setOrder] = useState<{
    id: string;
    customer: {
      name: string;
      email: string;
      mobile: string;
      deliveryAddress: {
        flatNo: string,
        street: string,
        city: string,
        state: string,
        zipCode: string,
        country: string;
      }
    };
    orderDate: string;
    totalAmount: number;
    status: string;
    items: Array<{ name: string; quantity: number }>;
  } | undefined>();

  const { id } = useParams();

  useEffect(() => {
    const selectedOrder = initialOrders.find(order => order.id === id);
    if (selectedOrder) {
      setOrder({
        id: selectedOrder.id,
        customer: {
          name: selectedOrder.customer.name,
          email: selectedOrder.customer.email,
          mobile: selectedOrder.customer.mobile,
          deliveryAddress: selectedOrder.customer.deliveryAdd
        },
        orderDate: selectedOrder.orderDate,
        totalAmount: selectedOrder.totalAmount,
        status: selectedOrder.status,
        items: selectedOrder.items.map(item => ({
          name: item.category,
          quantity: item.quantity
        }))
      });
    } else {
      setOrder(undefined);
    }
  }, [id]);


  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (order) {
      const newStatus = event.target.value;
      setOrder((prevOrder) => ({
        ...prevOrder!,
        status: newStatus
      }));
    }
  };

  return (
    <OrderDetailsShow order={order} handleStatusChange={handleStatusChange}/>
  );
}

export default ViewOrder;

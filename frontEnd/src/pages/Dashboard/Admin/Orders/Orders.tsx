import { useEffect, useState } from 'react';
import './Orders.scss';
import { useNavigate } from 'react-router-dom';
import { initialOrders } from '../../../../data/AdminDashboardOrders';
import { paginate } from '../../../../utils/Orders';
import Pagination from '../../../../components/PaginationButton/PaginationButton';
import SearchBoxAndAddButton from '../../../../components/SearchBoxAndAddButton/SearchBoxAndAddButton';
import OrderList from '../../../../components/adminDashboard/Orders/OrderList';


const Orders = () => {
  interface Order {
    id: string;
    customer: {
      name: string;
    };
    orderDate: string;
    totalAmount: number;
    status: string;
  }

  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(''); // New state for search query
  const ordersPerPage = 6;

  const navigate = useNavigate();

  const viewOrderDetails = (id: string|number) => {
    navigate(`/admin-dashboard-view-order/${id}`);
  };

  useEffect(() => {
    setOrders(initialOrders);
  }, []);

  const parseDateString = (dateString: string) => {
    const parts = dateString.split('-');

    if (parts.length === 3) {
      const [day, month, year] = parts;

      if (day.length === 2 && month.length === 2 && year.length === 4) {
        return new Date(`${year}-${month}-${day}`);
      }

      if (year.length === 4 && month.length === 2 && day.length === 2) {
        return new Date(dateString);
      }
    }

    return null;
  };

  const filteredOrders = orders.filter(order => {
    const query = searchQuery.toLowerCase();

    const parsedDate = parseDateString(query);
    const isValidDate = parsedDate instanceof Date && !isNaN(parsedDate.getTime());

    const orderDateObj = new Date(order.orderDate);

    return (
      order.id.toLowerCase().includes(query) ||
      order.customer.name.toLowerCase().includes(query) ||
      (isValidDate && parsedDate.toDateString() === orderDateObj.toDateString()) ||
      order.status.toLowerCase().includes(query)
    );
  });

  const { currentOrders, totalPages } = paginate(filteredOrders, currentPage, ordersPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="orders-container">
      <SearchBoxAndAddButton 
        placeholder={'Search by ID, Name, Date or Status...'} 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
      />   

      <div className="table-container">   
        <OrderList 
          currentOrders={currentOrders} 
          viewOrderDetails={viewOrderDetails}
        />
      </div>
      
      <div className="pagination">
        {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onNext={handleNext} onPrevious={handlePrevious}/>}
      </div>
    </div>
  );
};

export default Orders;

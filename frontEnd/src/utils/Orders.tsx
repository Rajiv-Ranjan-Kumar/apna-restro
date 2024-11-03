type OrderType = {
    id: string; 
    customer: {
      name: string;
    };
    orderDate: string;
    totalAmount: number;
    status: string;
};
  
export const paginate = (items: OrderType[], currentPage: number, itemsPerPage: number) => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentOrders = items.slice(indexOfFirstItem, indexOfLastItem);
  
    return {
      currentOrders,
      totalPages,
    };
};
  
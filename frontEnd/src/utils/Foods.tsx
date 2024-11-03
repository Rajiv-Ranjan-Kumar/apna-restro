type ItemType = {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    category: string;
    rating: number;
    reviews: number;
    discount: number;
    is_available: boolean;
};
  
export const paginate = (items: ItemType[], currentPage: number, itemsPerPage: number) => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  
    return {
      currentItems,
      totalPages,
    };
};
  
import { useCallback, useContext, useEffect, useState } from 'react';
import './Foods.scss';

import { StoreContext } from '../../../../context/StoreContext';
import Pagination from '../../../../components/PaginationButton/PaginationButton';
import { paginate } from '../../../../utils/Foods';
import { useNavigate } from 'react-router-dom';
import { adminRoutes } from '../../../AllRoutes';
import SearchBoxAndAddButton from '../../../../components/SearchBoxAndAddButton/SearchBoxAndAddButton';
import FoodList from '../../../../components/adminDashboard/Foods/FoodList';

const Foods = () => {
  interface foodList {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: number;
    reviews: number;
    discount: number;
    is_available: boolean;
  }
  

  const storeContext = useContext(StoreContext) || { food_list: [] };
  const [ foodList, setFoodList ] = useState<foodList[]>();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  const navigate = useNavigate();

  const { food_list } = storeContext;

  useEffect(() => {
    const mappedFoodList = food_list.map((food) => ({
      id: food._id,
      name: food.name,
      price: food.price,
      description: food.description,
      image: food.image,
      category: food.category,
      rating: food.rating || 0, 
      reviews: food.reviews || 0,
      discount: 0,
      is_available: food.is_available ?? false,
    }));
  
    setFoodList(mappedFoodList);
    console.log(foodList);
  }, [food_list,setFoodList]);
  

  const filteredFoodList = (foodList || []).filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  const { currentItems, totalPages } = paginate(filteredFoodList, currentPage, itemsPerPage);
  

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);
  

  const handlePrevious = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);
  

  const handleUpdateFoodStatus = (foodId: string) => {
    navigate(adminRoutes.adminDashboardFoodsUpdate(foodId));
  };


  const handleDeleteFood = (foodId: string) => {
    setFoodList(foodList?.filter((food) => food.id !== foodId));
  };

  


  return (
    <div className="food-list-container">
      <SearchBoxAndAddButton 
        placeholder={'Search food items...'} 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        isAddButton={true} 
        buttonName='Add Foods' 
        onAddClick={() => navigate(adminRoutes.adminDashboardFoodsAdd)}
      />

      <div className="table-container">
        <FoodList 
          currentItems={currentItems}
          handleUpdateFoodStatus={handleUpdateFoodStatus} 
          handleDeleteFood={handleDeleteFood}
        />
      </div>

     <div className="pagination">
        {totalPages > 1 && 
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onNext={handleNext} 
            onPrevious={handlePrevious} 
          />
        }
     </div>
    </div>
  );
};

export default Foods;

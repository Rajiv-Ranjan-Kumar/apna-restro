import { useCallback, useEffect, useState } from 'react';
import './FoodCategories.scss';

import { menu_list } from '../../../../data/common';
import Pagination from '../../../../components/PaginationButton/PaginationButton';
import { paginate } from '../../../../utils/Categories';
import { useNavigate } from 'react-router-dom';
import { adminRoutes } from '../../../AllRoutes';
import SearchBoxAndAddButton from '../../../../components/SearchBoxAndAddButton/SearchBoxAndAddButton';
import FoodCategoriesList from '../../../../components/adminDashboard/FoodCategories/FoodCategoriesList';

const FoodCategories = () => {
  const [categoriesList, setCategoriesList] = useState<{ [key: string]: string|boolean }[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  const navigate = useNavigate();



  useEffect(() => {
    setCategoriesList(menu_list);
  }, []);
  

  const filteredCategoriesList = (categoriesList || []).filter((categories) =>
    typeof categories.menu_name === 'string' &&
    categories.menu_name .toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const { currentItems, totalPages } = paginate(filteredCategoriesList, currentPage, itemsPerPage);
  
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
  

  const handleUpdateCategories = (categoriesId: string) => {
    navigate(adminRoutes.adminDashboardCategoriesUpdate(categoriesId));
  };

  const handleDeleteCategories = (categoriesId: string) => {
    setCategoriesList(categoriesList?.filter((categories:{[key:string]:string|boolean}) => categories.id !== categoriesId));
  };

  


  return (
    <div className="categories-list-container">
      <SearchBoxAndAddButton 
        placeholder={'Search food items...'} 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        isAddButton={true} 
        buttonName='Add Foods' 
        onAddClick={() => navigate(adminRoutes.adminDashboardCategoriesAdd)}
      />

      <div className="table-container">
        <FoodCategoriesList 
          currentItems={currentItems} 
          handleUpdateCategories={handleUpdateCategories} 
          handleDeleteCategories={handleDeleteCategories} 
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

export default FoodCategories;


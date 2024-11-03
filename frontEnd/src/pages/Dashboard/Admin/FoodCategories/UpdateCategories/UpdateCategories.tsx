import React, { useEffect, useState } from 'react';
import './UpdateCategories.scss';

import { useNavigate, useParams } from 'react-router-dom';
import { adminRoutes } from '../../../../AllRoutes';
import { characterValidation, validateFields } from '../../../../../utils/Base';
import { menu_list } from '../../../../../data/common';
import FoodCategoriesForm from '../../../../../components/adminDashboard/FoodCategories/FoodCategoriesForm/FoodCategoriesForm';





const AddCategories = () => {

  const { id } = useParams<{ id: string }>();

  const [categoriesData, setCategoriesData] = useState<{[key: string]: string | number | boolean | null | undefined}>({
    menu_name: '',
    menu_image: null,
    is_active: false,
  });
  
  const [valueError, setValidationError] = useState({fieldName: ''});

  

  useEffect(() => {
    if (id) {
        const categoryItem = menu_list.find(category => category.id === id);
        if (categoryItem) {
            setCategoriesData({ ...categoryItem, is_available: categoryItem.is_active });
        }
    }
    console.log(categoriesData,'bbbb');
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValidationError({ fieldName: '' });

    if (name === 'menu_name') {
      const validatedCategory = characterValidation(value);
      setCategoriesData((prevData) => ({...prevData,[name]: String(validatedCategory)}));
    }
    
    else if (name === 'menu_image') {
      const validatedImage = characterValidation(value);
      setCategoriesData((prevData) => ({...prevData,[name]: String(validatedImage)}));
    }
    
  };

  


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fieldName, isValid } = validateFields(categoriesData);

    if (isValid) {
      setValidationError({ fieldName: '' });
      console.log('Category Updated:', categoriesData);
      
      setCategoriesData({
        menu_name: '',
        menu_image: null,
      });
    }
    setValidationError({ fieldName:fieldName });
  };



  const navigate = useNavigate();

  const handleBack = () => {
    navigate(adminRoutes.adminDashboardCategories);
  };



  return (
    <FoodCategoriesForm
      categoriesData={categoriesData} 
      setCategoriesData={setCategoriesData} 
      valueError={valueError} 
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
      handleBack={handleBack}
      fromAddFoodCategoriesPage={false}
    />
  );
};
export default AddCategories;
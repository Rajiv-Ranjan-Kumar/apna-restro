import React, { useState } from 'react';
import './AddCategories.scss';
import { useNavigate } from 'react-router-dom';
import { adminRoutes } from '../../../../AllRoutes';
import { characterValidation, validateFields } from '../../../../../utils/Base';
import FoodCategoriesForm from '../../../../../components/adminDashboard/FoodCategories/FoodCategoriesForm/FoodCategoriesForm';


const AddCategories = () => {

  const [categoriesData, setCategoriesData] = useState<{[key: string]: string | number | boolean | null | undefined}>({
    menu_name: '',
    menu_image: null,
  });
  const [valueError, setValidationError] = useState({fieldName: ''});

  

  
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
      console.log('New Categories Added:', categoriesData);
      
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
    />
  );
};
export default AddCategories;
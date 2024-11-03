import React, { useEffect, useState } from 'react';
import './AddFoods.scss';
import { useNavigate } from 'react-router-dom';
import { menu_list } from '../../../../../data/common';
import { adminRoutes } from '../../../../AllRoutes';
import { characterValidation, numberValidation, validateFields } from '../../../../../utils/Base';
import FoodsForm from '../../../../../components/adminDashboard/Foods/FoodsForm/FoodsForm';


const AddFoods = () => {

  const [foodData, setFoodData] = useState<{ [key: string]: string | number | boolean | null | undefined }>({
    description: '',
    price: '',
    image: null,
    name: '',
    category: ''
  });
  const [categories, setCategories] = useState<{[key: string]: string|boolean}[]>([]);
  const [valueError, setValidationError] = useState({fieldName: ''});

  
  useEffect(() => {
    const categoryList: {[key: string]: string|boolean}[] = menu_list.map((item: { [key: string]: string | boolean }) => {
      return {
        id: typeof item.id === 'string' ? item.id : '',
        name: typeof item.menu_name === 'string' ? item.menu_name : '',
        is_active: typeof item.is_active === 'boolean' ? item.is_active : false
      };
    });
  
    setCategories(categoryList);
    console.log(categories);
    // eslint-disable-next-line
  }, []);
  

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValidationError({ fieldName: '' });

    if (name === 'category') {
      const validatedCategory = numberValidation(value);
      setFoodData((prevData) => ({...prevData,[name]: String(validatedCategory)}));
    }

    else if (name === 'name') {
      const validatedName = characterValidation(value);
      setFoodData((prevData) => ({...prevData,[name]: String(validatedName)}));
    }
    
    else if (name === 'image') {
      const validatedImage = characterValidation(value);
      setFoodData((prevData) => ({...prevData,[name]: String(validatedImage)}));
    }
    
    else if (name === 'price') {
      const validatedPrice = numberValidation(value);
      setFoodData((prevData) => ({...prevData,[name]: String(validatedPrice)}));
    }
    
    else if (name === 'description') {
      const validatedDescription = characterValidation(value);
      setFoodData((prevData) => ({...prevData,[name]: String(validatedDescription)}));
    }
  };

  


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fieldName, isValid } = validateFields(foodData);

    if (isValid) {
      setValidationError({ fieldName: '' });
      console.log('Food Item Added:', foodData);
      
      setFoodData({
        description: '',
        price: '',
        image: null,
        name: '',
        category: ''
      });
    }
    setValidationError({ fieldName:fieldName });
  };



  const navigate = useNavigate();

  const handleBack = () => {
    navigate(adminRoutes.adminDashboardFoods);
  };



  return (
    <FoodsForm
      foodData={foodData} 
      setFoodData={setFoodData} 
      categories={categories} 
      handleFormSubmit={handleSubmit} 
      handleInputChange={handleChange} 
      handleBack={handleBack} 
      valueError={valueError}
    />
  );
};
export default AddFoods;
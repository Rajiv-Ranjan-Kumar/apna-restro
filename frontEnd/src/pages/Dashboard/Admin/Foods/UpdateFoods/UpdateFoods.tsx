import React, { useEffect, useState, useCallback } from 'react';
import './UpdateFoods.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { food_list, menu_list } from '../../../../../data/common';
import { adminRoutes } from '../../../../AllRoutes';
import { characterValidation, numberValidation, validateFields } from '../../../../../utils/Base';
import FoodsForm from '../../../../../components/adminDashboard/Foods/FoodsForm/FoodsForm';


const UpdateFoods = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [foodData, setFoodData] = useState<{ [key: string]: string | number | boolean | null | undefined }>({});
    const [foodCategory, setFoodCategory] = useState<{[key: string]: string}[]>([]);
    const [valueError, setValidationError] = useState({fieldName: ''});


    useEffect(() => {
        if (id) {
            const foodItem = food_list.find(food => food._id === id);
            if (foodItem) {
                setFoodData({ ...foodItem, is_available: foodItem.is_available });
            }
        }
        console.log(foodData,'bbbb');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    useEffect(()=>{
       setFoodCategory(menu_list.map(item => ({ id: item.id, name: item.menu_name })));
    },[]);


    const handleBack = () => {
        navigate(adminRoutes.adminDashboardFoods);
    }

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (foodData) {
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
        }
    }, [foodData]);


    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { fieldName, isValid } = validateFields(foodData);
        if (isValid) {
            setValidationError({ fieldName: '' });
            console.log('Updated food data:', foodData);
            // You can add your update logic here
            navigate(adminRoutes.adminDashboardFoods);
        }
        setValidationError({ fieldName: fieldName });
    };


    return (
        <FoodsForm 
            foodData={foodData} 
            setFoodData={setFoodData} 
            categories={foodCategory} 
            handleFormSubmit={handleFormSubmit} 
            handleInputChange={handleInputChange} 
            handleBack={handleBack} 
            valueError={valueError}
            fromAddFoodsPage={false}
        />
    );
};

export default UpdateFoods;

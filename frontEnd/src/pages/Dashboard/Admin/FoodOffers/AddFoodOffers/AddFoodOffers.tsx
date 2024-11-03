import { useContext, useEffect, useState } from 'react';
import './AddFoodOffers.scss';

import { StoreContext } from '../../../../../context/StoreContext';
import { datetimeValidation, numberValidation, characterValidation, validateFields, } from '../../../../../utils/Base';
import OfferForm from '../../../../../components/adminDashboard/Offers/OfferForm/OfferForm';
import { useNavigate } from 'react-router-dom';
import { adminRoutes } from '../../../../AllRoutes';

const AddFoodOffers = () => {
    
    const storeContext = useContext(StoreContext) || { food_list: [] };
    const { food_list } = storeContext;

    const [foodNameList, setFoodNameList] = useState<{[key:string]:string}[]>([]);
    const [foodOfferData, setFoodOfferData] = useState<{[key:string]:string|number}>({
        name: '',
        discount: '',
        validity: ''
    });
    const [valueError, setValidationError] = useState({fieldName: ''});
    


    
    useEffect(() => {
        const foodList: {[key:string]:string}[] = food_list.map((food: { _id: string; name: string }) => {
            return { id: food._id, name: food.name };
        });
        setFoodNameList(foodList);
    }, [food_list]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setValidationError({ fieldName:'' });
    
        if (name === 'name') {
            setFoodOfferData((prevData) => ({
                ...prevData,
                [name]: characterValidation(value)
            }));
        } else if (name === 'discount') {
            const validatedDiscount = numberValidation(value);
            setFoodOfferData((prevData) => ({
                ...prevData,
                [name]: String(validatedDiscount)
            }));
        } else if (name === 'validity') {
            const validatedValidity = datetimeValidation(value);
            setFoodOfferData((prevData) => ({
                ...prevData,
                [name]: String(validatedValidity)
            }));
        }
    };
    



    const onSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        const { fieldName, isValid } = validateFields(foodOfferData);
        console.log(fieldName, isValid);
        if (isValid) {
            setValidationError({ fieldName:'' });
            console.log(foodOfferData); 
            // Perform the API call to add the food offer
            setFoodOfferData({ name: '', discount: '', validity: ''});
        }
        setValidationError({ fieldName:fieldName });
          
    }


    const navigate = useNavigate();

    const handleBack = () =>{
        navigate(adminRoutes.adminDashboardOffers);
    }



    return (
        <OfferForm 
            foodOfferData={foodOfferData} 
            setFoodOfferData={setFoodOfferData} 
            foodNameList={foodNameList} 
            handleChange={handleChange} 
            onSubmit={onSubmit} 
            valueError={valueError}
            handleBack={handleBack}
        />
    )
}

export default AddFoodOffers;

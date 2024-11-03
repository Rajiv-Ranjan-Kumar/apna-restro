import React, { useCallback, useEffect, useState } from 'react'
import './UpdateOffer.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { initialOffers } from '../../../../../data/offers';
import { characterValidation, datetimeValidation, numberValidation, validateFields } from '../../../../../utils/Base'
import OfferForm from '../../../../../components/adminDashboard/Offers/OfferForm/OfferForm';
import { adminRoutes } from '../../../../AllRoutes';


const UpdateOffer = () => {
    const { id } = useParams<{ id: string }>();

    const [updateOfferData, setUpdateOfferData] = useState<{[key:string]:string|number}>({
        id: '',
        name: '',
        validity: '',
        discount: '',
    });

    const [foodNameList, setFoodNameList] = useState<{[key:string]:string}[]>([]);
    const [valueError, setValidationError] = useState({fieldName: ''});



    useEffect(() => {
        if (id) {
            const foodItem = initialOffers.find(food => food.id === id);
            if (foodItem) {
                setUpdateOfferData((prev) => ({
                    ...prev,
                    id: foodItem.id,
                    name: foodItem.foodName,
                    validity: foodItem.validity,
                    discount: foodItem.discount,
                }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    useEffect(() => {
        const foodList: {[key:string]:string}[] = initialOffers.map((food: { id: string; foodName: string }) => {
            return { id: food.id, name: food.foodName };
        });
        setFoodNameList(foodList);
    }, []);


    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setValidationError({ fieldName:'' });
    
        if (name === 'name') {
            setUpdateOfferData((prevData) => ({
                ...prevData,
                [name]: characterValidation(value)
            }));
        } else if (name === 'discount') {
            const validatedDiscount = numberValidation(value);
            setUpdateOfferData((prevData) => ({
                ...prevData,
                [name]: String(validatedDiscount)
            }));
        } else if (name === 'validity') {
            const validatedValidity = datetimeValidation(value);
            setUpdateOfferData((prevData) => ({
                ...prevData,
                [name]: String(validatedValidity)
            }));
        }
        
    },[]);

    const onSubmit = (e: React.FormEvent) =>{
        e.preventDefault();

        const { fieldName, isValid } = validateFields(updateOfferData);
        console.log(fieldName, isValid);

        if (isValid) {
            setValidationError({ fieldName:'' });
            // Perform the API call to add the food offer
            setUpdateOfferData((prev)=>({
                    ...prev,
                    discount: '',
                    validity: ''
                })
            )
        }
        setValidationError({ fieldName:fieldName });
    }


    const navigate = useNavigate();

    const handleBack = () =>{
        navigate(adminRoutes.adminDashboardOffers);
    }


  return (
    <OfferForm
        foodOfferData={updateOfferData} 
        setFoodOfferData={setUpdateOfferData} 
        foodNameList={foodNameList} 
        handleChange={handleInputChange} 
        onSubmit={onSubmit} 
        valueError={valueError}
        fromAddOffer={false}
        handleBack={handleBack}
    />
  )
}

export default UpdateOffer

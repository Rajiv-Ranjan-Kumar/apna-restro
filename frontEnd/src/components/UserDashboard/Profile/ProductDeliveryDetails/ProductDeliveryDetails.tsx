import React, { useState } from 'react';
import './ProductDeliveryDetails.scss';
import InputTag from '../../../Forms/InputTag/InputTag';

const ProductDeliveryDetails = ({ deliveryAddress, setDeliveryAddress }: { deliveryAddress: { [key: string]: string }; setDeliveryAddress: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;}) => {
    const [isEditingDeliveryAddress, setIsEditingDeliveryAddress] = useState(false);

    const handleDeliveryAddressInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDeliveryAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    const handleEditSaveClickForDeliveryAddress = () => {
        setIsEditingDeliveryAddress((prevEditing) => !prevEditing);
    };

    return (
        <div className="user-delivery-address-details">
            <h3>Delivery Address:</h3>
            <hr />
            {Object.entries(deliveryAddress).map(([key, value]) => (
                <div className="details-group" key={key}>
                    <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                    {isEditingDeliveryAddress ? (
                        <div className="input-container">
                            <InputTag
                            type={"text"} 
                            name={key} 
                            readonly={false} 
                            func={handleDeliveryAddressInputChange} 
                            value={value}
                            />
                        </div>
                    ) : (
                        <span>{value}</span>
                    )}
                </div>
            ))}
            <button onClick={handleEditSaveClickForDeliveryAddress}>
                {isEditingDeliveryAddress ? 'Save' : 'Edit'}
            </button>
        </div>
    );
};

export default ProductDeliveryDetails;

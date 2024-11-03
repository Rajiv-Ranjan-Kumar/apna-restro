import React, { useState } from 'react';
import './UserPermanentAddress.scss'
import InputTag from '../../../Forms/InputTag/InputTag';

const UserPermanentAddress = ({ address, setAddress }: { address: { [key: string]: string }; setAddress: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;}) => {
    const [isEditingAddress, setIsEditingAddress] = useState(false);

    const handleEditSaveClickForAddress = () => {
        setIsEditingAddress((prevEditing) => !prevEditing);
    };

    const handleAddressInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }));
    };

    return (
        <div className="user-permanent-details">
            <h3>Your Address:</h3>
            <hr />
            {Object.entries(address).map(([key, value]) => (
                <div className="details-group" key={key}>
                    <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                    {isEditingAddress ? (
                        <div className="input-container">
                            <InputTag
                            type={"text"} 
                            name={key} 
                            readonly={false} 
                            func={handleAddressInputChange} 
                            value={value}
                        />
                        </div>
                    ) : (
                        <span>{value}</span>
                    )}
                </div>
            ))}
            <button onClick={handleEditSaveClickForAddress}>{isEditingAddress ? 'Save' : 'Edit'}</button>
        </div>
    );
};

export default UserPermanentAddress;

import React, { useState } from 'react'
import './UserBasicDetails.scss';
import InputTag from '../../../Forms/InputTag/InputTag';


const UserBasicDetails = ({ userBasicData, setUserBasicData }: { userBasicData: { [key: string]: string|null }; setUserBasicData: React.Dispatch<React.SetStateAction<{ [key: string]: string|null }>>;}) => {

    const [isImageChanged, setIsImageChanged] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserBasicData((prevAddress) => ({
                    ...prevAddress,
                    image: reader.result as string,
                }))
                setIsImageChanged(true);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSave = () => {
        console.log('Image saved!');
        setIsImageChanged(false);
    };

    const handleClick = () => {
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        fileInput.click();
    };

    return (
        <div className="profile-basic-container">
            <div className="image">
                <div className="img">
                    <img src={userBasicData.image || ''} alt="" />
                </div>
                {!isImageChanged ? (
                    <button onClick={handleClick}>Change Now</button>) : (
                    <button onClick={handleSave}>Save</button>
                )}
                <input 
                    type="file" 
                    accept="image/*" 
                    name="" 
                    id="fileInput" 
                    onChange={handleImageChange}
                />
            </div>

            <div className="user-details">
                <InputTag 
                    label='Username' 
                    name={'name'} 
                    type={'text'} 
                    readonly={true} 
                    placeholder={userBasicData.name||''} 
                    func={()=>{}}
                />

                <InputTag
                    label='Email'
                    name={'email'}
                    type={'text'}
                    readonly={true}
                    placeholder={userBasicData.email||''}
                    func={()=>{}}
                />

                <InputTag
                    label='Phone'
                    name={'phone'}
                    type={'text'}
                    readonly={true}
                    placeholder={userBasicData.phone||''}
                    func={()=>{}}
                />
            </div>
        </div>
    )
}

export default UserBasicDetails

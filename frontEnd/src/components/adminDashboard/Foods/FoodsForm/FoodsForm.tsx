import React from 'react'
import './FoodsForm.scss'
import InputTag from '../../../Forms/InputTag/InputTag';
import UploadImageTag from '../../../Forms/UploadImageTag/UploadImageTag';
import SelectTag from '../../../Forms/SelectTag/SelectTag';
import Checkbox from '../../../Forms/Checkbox/Checkbox';
import Button from '../../../Forms/Button/Button';

interface FoodsFormProps {
    foodData: { [key: string]: string | number | boolean | null | undefined };
    setFoodData: React.Dispatch<React.SetStateAction<{ [key: string]: string | number | boolean | null | undefined }>>;
    categories: { [key: string]: string | boolean }[];
    handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBack: () => void;
    valueError: {[key: string]: string};
    fromAddFoodsPage?: boolean;
}

const FoodsForm:React.FC<FoodsFormProps> = ({ foodData, setFoodData, categories, handleFormSubmit, handleInputChange, handleBack, valueError, fromAddFoodsPage=true }) => {
  return (
    <div className="food-form-container">
            <div className="food-form-container-inner">
                {fromAddFoodsPage?<h1>Add New Food</h1>:<h1>Update Food Item</h1>}
                <form onSubmit={handleFormSubmit} className='food-form__form'>
                    <InputTag 
                        label={'name'} 
                        name={'name'} 
                        type={'text'} 
                        readonly={false} 
                        func={handleInputChange}
                        value={typeof foodData?.name === 'boolean' ? '' : foodData?.name || ''} 
                        isValueError={valueError.fieldName === 'name'? true:false}
                    />

                    <UploadImageTag 
                        label={'food image'} 
                        name={'image'} 
                        imagePath={typeof foodData?.image === 'string' && foodData?.image !== null ? foodData?.image  : ''}
                        setImage={setFoodData}                    
                    />

                    <InputTag
                        label={'price'}
                        name={'price'}
                        type={'text'}
                        readonly={false}
                        func={handleInputChange}
                        value={typeof foodData?.price === 'boolean' ? '' : foodData?.price || ''} 
                        isValueError={valueError.fieldName === 'price'? true:false}
                    />

                    <InputTag 
                        label={'description'} 
                        name={'description'} 
                        type={'text'} 
                        readonly={false} 
                        func={handleInputChange}
                        value={typeof foodData?.description === 'boolean' ? '' : foodData?.description || ''} 
                        isValueError={valueError.fieldName === 'description'? true:false}
                    />

                    <SelectTag
                        label={'category'}
                        name={'category'}
                        options={categories}
                        optionDefaultValue={'Select Category'}
                        selected={foodData?.category || ''}
                        setOption={setFoodData}
                        isValueError={valueError.fieldName === 'category'? true:false}
                    />

                    {!fromAddFoodsPage&&
                        <Checkbox
                            label={'is available'}
                            name={'is_available'}
                            readonly={false}
                            setData={setFoodData}
                            data={typeof foodData?.is_available === 'boolean' ? foodData?.is_available : false}
                        />
                    }

                    <div className="buttons">
                        <Button name={'Back'} type={'button'} isBack={true} isSave={false} onClick={() => handleBack()}/>
                        <Button name={'Save Changes'} type={'submit'} isSave={true}/>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default FoodsForm

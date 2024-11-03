import React from 'react'
import './FoodCategoriesForm.scss'
import InputTag from '../../../Forms/InputTag/InputTag';
import UploadImageTag from '../../../Forms/UploadImageTag/UploadImageTag';
import Button from '../../../Forms/Button/Button';
import Checkbox from '../../../Forms/Checkbox/Checkbox';


interface FoodCategoriesFromProps {
    categoriesData: {[key: string]: string | number | boolean | null | undefined};
    setCategoriesData: React.Dispatch<React.SetStateAction<{[key: string]: string | number | boolean | null | undefined}>>;
    valueError: {[key: string]: string };
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
    handleBack: () => void;
    fromAddFoodCategoriesPage?: boolean;
}


const FoodCategoriesForm:React.FC<FoodCategoriesFromProps> = ({categoriesData, setCategoriesData, valueError, handleChange, handleSubmit, handleBack, fromAddFoodCategoriesPage=true}) => {
  return (
    <div className="food-categories-form-container">
      <div className="food-categories-form-inner">
      <form onSubmit={handleSubmit} className="food-categories-form__form">
        {fromAddFoodCategoriesPage?<h1>Add New Categories</h1>:<h1>Update Categories</h1>}
        <InputTag 
          label={'category name'} 
          name={'menu_name'} 
          type={'text'} 
          value={categoriesData.menu_name?.toLocaleString()} 
          placeholder={'Enter Food Name'} 
          readonly={false} 
          func={handleChange} 
          isValueError={valueError.fieldName==='menu_name'?true:false} 
        />

        <UploadImageTag 
          label={'category image'} 
          name={'menu_image'} 
          setImage={setCategoriesData} 
          imagePath={categoriesData.menu_image?.toString()||''} 
          isValueError={valueError.fieldName==='menu_image'?true:false}
        /> 

        {!fromAddFoodCategoriesPage&&
            <Checkbox
                label={'is active'}
                name={'is_active'}
                readonly={false}
                setData={setCategoriesData}
                data={typeof categoriesData?.is_active === 'boolean' ? categoriesData?.is_active : false}
            />
        }

        <div className="buttons">
          <Button name={'Back'} type={'button'} onClick={handleBack} isBack={true} isSave={false} />
          <Button name={'Save'} type={'submit'}/>
          <Button name={'Continue'} type={'submit'} isContinue={true} isSave={false} />
        </div>
      </form>
      </div>
    </div>

  )
}

export default FoodCategoriesForm

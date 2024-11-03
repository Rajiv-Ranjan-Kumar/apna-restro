import React from 'react'
import './OfferForm.scss'
import SelectTag from '../../../Forms/SelectTag/SelectTag'
import InputTag from '../../../Forms/InputTag/InputTag'
import Button from '../../../Forms/Button/Button'

interface AddFoodOfferProps{
    foodOfferData: {[key:string]:string|number};
    setFoodOfferData: React.Dispatch<React.SetStateAction<{[key: string]: string|number}>>;
    foodNameList: {[key:string]:string}[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    onSubmit: (e:React.FormEvent<HTMLFormElement>) => void;
    valueError: {[key:string]:string};
    fromAddOffer?: boolean;
    handleBack: () => void;
}

const AddOffer:React.FC<AddFoodOfferProps> = ({ foodOfferData, setFoodOfferData, foodNameList, handleChange, onSubmit, valueError, fromAddOffer=true, handleBack}) => {
  return (
    <div className="offer-form-container">
            <div className="offer-form-inner">
                {fromAddOffer?<h1>Add Food Offer</h1>:<h1>Update Food Offer</h1>}
                <div className="offer-form__form">
                    <form onSubmit={onSubmit} className="offer-form__form">
                        <SelectTag 
                            label={'food name'} 
                            name={'name'} 
                            options={foodNameList} 
                            selected={!fromAddOffer&&foodOfferData.id}
                            optionDefaultValue={'Select food'}
                            setOption={setFoodOfferData} 
                            isValueError={valueError.fieldName === 'name' ? true:false}
                        />

                        <InputTag 
                            label={'discount (%)'} 
                            name={'discount'} 
                            type={'text'} 
                            value={foodOfferData.discount} 
                            placeholder={'Enter discount    Ex: 10'} 
                            func={handleChange} 
                            readonly={false} 
                            isValueError={valueError.fieldName === 'discount' ? true:false} 
                        />

                        <InputTag 
                            label={'Offer Code'} 
                            name={'offerCode'} 
                            type={'text'} 
                            placeholder={'Auto generate    Ex: XYZ12345DWE'} 
                            func={handleChange} 
                            readonly={true} 
                        />

                        <InputTag 
                            label={'validity'} 
                            name={'validity'} 
                            type={'datetime-local'} 
                            value={foodOfferData.validity} 
                            func={handleChange} 
                            readonly={false} 
                            isValueError={valueError.fieldName === 'validity' ? true:false}
                        />

                        <div className="buttons">
                            <Button name={'Back'} type={'button'} isBack={true} isSave={false} onClick={()=>handleBack()} />
                            <Button name={'Save'} type={'submit'} isSave={true} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default AddOffer

import React, { useContext, useEffect, useState } from 'react'
import './Order.scss'
import { StoreContext } from '../../context/StoreContext';
import InputTag from '../Forms/InputTag/InputTag';
import CartTotal from '../CartTotal/CartTotal';
import { characterValidation, emailValidation, numberValidation, validateFields } from '../../utils/Base';
import { FaMapMarkerAlt } from 'react-icons/fa';

import UseLocation from '../../services/Location';
import useRazorpayPayment from '../../services/Payments';


interface orderProps{
  dashboard: boolean
}

const Order:React.FC<orderProps> = ({dashboard}) => {
  const storeContext = useContext(StoreContext);
  const { getTotalCartAmount } = storeContext!;


  const [orderData, setOrderData] = useState<{[key:string]:string}>({
    first_name: '',
    last_name: '',
    user_email: '',
    phone: '',
    street: '',
    district: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [valueError, setValidationError] = useState({fieldName: ''});

  const { userAddress, getHandleUserAddress } = UseLocation();


  useEffect(() => {
    if (userAddress.road) {
      setOrderData((prevData) => ({
        ...prevData,
        street: userAddress.road,
        district: userAddress.district,
        city: userAddress.city,
        state: userAddress.state,
        zip: userAddress.postal_code,
        country: userAddress.country,
      }));
    }
  }, [userAddress]); 
  

  const handleOrderData = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValidationError({ fieldName: '' });

    if(name === 'first_name') {
      const validatedFirstName = characterValidation(value);
      setOrderData((prevData) => ({...prevData,[name]: String(validatedFirstName)}));
    }
    
    else if(name === 'last_name') {
      const validatedLastName = characterValidation(value);
      setOrderData((prevData) => ({...prevData,[name]: String(validatedLastName)}));
    }

    else if(name === 'user_email') {
      const validatedEmail = characterValidation(value);
      setOrderData((prevData) => ({...prevData,[name]: String(validatedEmail)}));
      if(validatedEmail&&emailValidation(validatedEmail)) {
        setEmailValidationError(false);
      }else{
        setEmailValidationError(true);
      }
    }

    else if(name === 'phone') {
      const validatedPhone = numberValidation(value);
      setOrderData((prevData) => ({...prevData,[name]: String(validatedPhone)}));
    }
    
    else if(name === 'street') {
      const validatedStreet = characterValidation(value);
      setOrderData((prevData) => ({...prevData,[name]: String(validatedStreet)}));
    }

    else if(name === 'district') {
      const validatedStreet = characterValidation(value);
      setOrderData((prevData) => ({...prevData,[name]: String(validatedStreet)}));
    }
    
    else if(name === 'city') {
      const validatedCity = characterValidation(value);
      setOrderData((prevData) => ({...prevData,[name]: String(validatedCity)}));
    }
    
    else if(name === 'state') {
      const validatedState = characterValidation(value);
      setOrderData((prevData) => ({...prevData,[name]: String(validatedState)}));
    }
    
    else if(name === 'zip') {
      const validatedZip = numberValidation(value);
      setOrderData((prevData) => ({...prevData,[name]: String(validatedZip)}));
    }
    
    else if(name === 'country') {
      const validatedCountry = characterValidation(value);
      setOrderData((prevData) => ({...prevData,[name]: String(validatedCountry)}));
    }
    
    else {
      setOrderData((prevData) => ({ ...prevData, [name]: value }));
    }
  }


  const { updateOrderData } = useRazorpayPayment();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { fieldName, isValid } = validateFields(orderData);
    if (isValid && !emailValidationError) {
      console.log(orderData);
      // Proceed with the order submission
      // const data = {
      //   first_name: orderData.first_name,
      //   last_name: orderData.last_name,
      //   user_email: orderData.user_email,
      //   phone: orderData.phone,
      //   amount: getTotalCartAmount()+2,
      //   order_id: '12345',
      // }
      const data:{[key:string]:string|number}  = {
        ...orderData,
        amount: getTotalCartAmount()+2,
      }
      updateOrderData(data);

    }

    setValidationError({ fieldName: fieldName });
  }

  

  return (
    <form onSubmit={handleSubmit} className={dashboard?'order':'order order2'}>
      <div className="order-left">
        <p className='title'>Delivery information</p>

        <div className="multi-fields">
          <InputTag 
            name={'first_name'} 
            type={'text'} 
            value={orderData.first_name||''}
            readonly={false} 
            func={handleOrderData} 
            placeholder={'First Name'}
            isValueError={valueError.fieldName === 'first_name' ? true:false}
          />

          <InputTag 
            name={'last_name'} 
            type={'text'} 
            value={orderData.last_name||''} 
            readonly={false} 
            func={handleOrderData} 
            placeholder={'Last Name'}
            isValueError={valueError.fieldName === 'last_name' ? true:false}
          />
        </div>

        <div className="email-input-container">
          <InputTag 
            name={'user_email'} 
            type={'text'} 
            value={orderData.user_email||''} 
            readonly={false} 
            func={handleOrderData} 
            placeholder={'Email address'}
            isValueError={valueError.fieldName === 'user_email' ? true:false}
          />
          {emailValidationError&&<span>Email must valid email formate</span>}
        </div>

        <InputTag 
          name={'phone'} 
          type={'text'} 
          value={orderData.phone||''} 
          readonly={false} 
          func={handleOrderData} 
          placeholder={'Phone number'}
          isValueError={valueError.fieldName === 'phone' ? true:false}
        />

        <div className="address">
          <p className='title'>Delivery Address</p>

          <div className="location-icon-container" onClick={getHandleUserAddress}>
            <FaMapMarkerAlt className='location-icon' />
            <p>Use My Current Location</p>
          </div>
        </div>

        <InputTag
         name={'street'} 
         type={'text'} 
         value={orderData.street||''} 
         readonly={false} 
         func={handleOrderData} 
         placeholder={'Your street address'}
         isValueError={valueError.fieldName === 'street' ? true:false}
        />

        <InputTag
         name={'district'} 
         type={'text'} 
         value={orderData.district||''} 
         readonly={false} 
         func={handleOrderData} 
         placeholder={'Your district'}
         isValueError={valueError.fieldName === 'district' ? true:false}
        />

        <div className="multi-fields">
          <InputTag
           name={'city'}
           type={'text'}
           value={orderData.city||''} 
           readonly={false} 
           func={handleOrderData} 
           placeholder={'City'}
           isValueError={valueError.fieldName === 'city' ? true:false}
          />

          <InputTag 
            name={'state'} 
            type={'text'} 
            value={orderData.state||''} 
            readonly={false} 
            func={handleOrderData} 
            placeholder={'State'}
            isValueError={valueError.fieldName === 'state' ? true:false}
          />
        </div>
        <div className="multi-fields">
          <InputTag 
            name={'zip'} 
            type={'text'} 
            value={orderData.zip||''} 
            readonly={false} 
            func={handleOrderData} 
            placeholder={'Zip code'}
            isValueError={valueError.fieldName === 'zip' ? true:false}
          />
          <InputTag 
            name={'country'} 
            type={'text'} 
            value={orderData.country||''} 
            readonly={false} 
            func={handleOrderData} 
            placeholder={'Country'}
            isValueError={valueError.fieldName === 'country' ? true:false}
          />
        </div>

      </div>

      <div className="order-right">
        <div className="card-total">
          <CartTotal totalCartAmount={getTotalCartAmount()} deliveryFee={2}/>
          <button type='submit'>Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default Order

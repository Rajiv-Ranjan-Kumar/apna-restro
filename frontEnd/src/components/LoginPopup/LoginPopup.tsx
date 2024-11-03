import React, { useState } from 'react';
import './LoginPopup.scss';
import { FaTimes } from 'react-icons/fa';
import InputTag from '../Forms/InputTag/InputTag';
import { characterValidation, emailValidation, passwordValidation, validateFields } from '../../utils/Base';
import Checkbox from '../Forms/Checkbox/Checkbox';
import PasswordInputTag from '../Forms/PasswordInputTag/PasswordInputTag';
import { adminRoutes, generalRoutes, userRoutes } from '../../pages/AllRoutes';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface loginProps {
  setShowLogin: (showLogin: boolean) => void;
}

const LoginPopup: React.FC<loginProps> = ({ setShowLogin }) => {

  const [currentState, setCurrentState] = useState("Login");
  const [isValidatedLoginEmail, setIsValidatedLoginEmail] = useState(false);
  const [isValidatedSignupEmail, setIsValidatedSignupEmail] = useState(false);
  const [loginData, setLoginData] = useState<{ [key: string]: string | number | boolean | null | undefined }>({
    email: '',
    password: '',
    privacy: false
  });
  const [signupData, setSignupData] = useState<{ [key: string]: string | number | boolean | null | undefined }>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    privacy: false
  });
  const [validatedField, setValidationError] = useState<{ [key: string]: string }>({});
  const [passwordFormateValidationError, setPasswordFormateValidationError] = useState('');
  const [credentialError, setCredentialError] = useState('');


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValidationError({ fieldName: '' });

    const validatedData = characterValidation(value);
    if(currentState === 'Sign up'){
      if(name === 'first_name'){
        setSignupData((prevData) => ({ ...prevData, [name]: String(validatedData) }));
      }else if(name === 'last_name'){
        setSignupData((prevData) => ({ ...prevData, [name]: String(validatedData) }));
      }else if (name === 'email') {
        setSignupData((prevData) => ({ ...prevData, [name]: String(validatedData) }));
        setIsValidatedSignupEmail(emailValidation(value));
      }else{
        setSignupData((prevData) => ({ ...prevData, [name]: String(validatedData) }));
        const validateFormat = passwordValidation(value, true);
        setPasswordFormateValidationError(validateFormat);
      }
    }else{
      if (name === 'email') {
        setLoginData((prevData) => ({ ...prevData, [name]: String(validatedData) }));

        setIsValidatedLoginEmail(emailValidation(value));
      }else{
        setLoginData((prevData) => ({ ...prevData, [name]: String(validatedData) }));
      }
    }
  };



  const { login } = useAuth();

  const handleLoginOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fieldName, isValid } = validateFields(loginData);

    if (isValid) {
      setValidationError({ fieldName: '' });

      if (loginData.email === 'user@gmail.com' && loginData.password === 'User@123') {
        login('user' as 'user' | 'admin' | 'staff', 'userToken142563');
        navigate(userRoutes.userDashboard);
      }else if (loginData.email === 'admin@gmail.com' && loginData.password === 'Admin@123') {
        login('admin' as 'user' | 'admin' | 'staff', 'adminToken142563');
        navigate(adminRoutes.adminDashboard);
      }else if (loginData.email === 'staff@gmail.com' && loginData.password === 'Staff@123') {
        login('staff' as 'user' | 'admin' | 'staff', 'staffToken142563');
        navigate(adminRoutes.adminDashboard);
      }else{
        setCredentialError("wrong credentials");
      }
      console.log(loginData);
    } else {
      setValidationError({ fieldName });
    }
  };

  const handleSignupOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fieldName, isValid } = validateFields(signupData);

    if (isValid && !isValidatedLoginEmail && passwordFormateValidationError === 'valid') {
      setValidationError({ fieldName: '' });
      console.log(signupData);
    }
    setValidationError({ fieldName });
  };

  const navigate = useNavigate();
  


  return (
    <div className='login-popup'>
      <form onSubmit={currentState !== 'Sign up' ? handleLoginOnSubmit : handleSignupOnSubmit} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <span onClick={() => setShowLogin(false)}><FaTimes size={24} /></span>
        </div>
        {credentialError&&<span className='credential-error'>{credentialError}</span>}
        <div className="login-popup-inputs">
          {currentState === "Sign up" && (
            <div className="name-container">
              <InputTag
                name={'first_name'}
                type={'text'}
                placeholder='Your first name'
                value={signupData.first_name?.toString()}
                readonly={false}
                func={handleInput}
                isValueError={validatedField.fieldName === 'first_name'}
              />

              <InputTag
                name={'last_name'}
                type={'text'}
                placeholder='Your last name'
                value={signupData.last_name?.toString()}
                readonly={false}
                func={handleInput}
                isValueError={validatedField.fieldName === 'last_name'}
              />
            </div>
          )}

          <InputTag
            name={'email'}
            type={'text'}
            placeholder='Your email'
            value={currentState === 'Sign up'? 
              typeof signupData.email === 'boolean'?'':signupData.email||'':
              typeof loginData.email === 'boolean'? '': loginData.email || ''
            }
            readonly={false}
            func={handleInput}
            isValueError={validatedField.fieldName === 'email'}
          />
          {currentState === 'Sign up'?(
            !isValidatedSignupEmail && String(signupData.email).length > 0 && <p className="email-error">Email must valid email formate</p>
          ):(
            !isValidatedLoginEmail && String(loginData.email).length > 0 && <p className="email-error">Email must valid email formate</p>
          )}

          <div className="password-container">
            <span onClick={()=>{setShowLogin(false);navigate(generalRoutes.forgotPassword)}}>Forgot password</span>
            <PasswordInputTag 
              name={'password'} 
              value={currentState === 'Sign up'?
                typeof signupData.password === 'boolean'?'':signupData.password||'':
                typeof loginData.password === 'boolean'? '': loginData.password || ''
              }
              readonly={false} 
              placeholder='Your password'
              func={handleInput}
              isValueError={validatedField.fieldName === 'password'}
              passwordFormateValidationError={passwordFormateValidationError}
            />
          </div>
        </div>

        <button type={'submit'}>{currentState !== 'Sign up' ? "Login" : "Create account"}</button>

        <div className="login-popup-condition">
          <Checkbox
            label={'By continuing, I agree to the terms of use & privacy policy.'}
            name={'privacy'}
            readonly={false}
            setData={currentState !== 'Sign up' ? setLoginData : setSignupData}
            data={currentState === 'Sign up' ? typeof signupData.privacy === 'boolean' && signupData.privacy : typeof loginData.privacy === 'boolean' && loginData.privacy}
          />
        </div>

        {currentState === "Sign up" ? (
          <p>Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span></p>
        ) : (
          <p>Create a new account? <span onClick={() => setCurrentState('Sign up')}>Click here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
import React, { useState } from 'react'
import './Settings.scss'
import PasswordInputTag from '../../../../components/Forms/PasswordInputTag/PasswordInputTag'
import { passwordValidation, validateFields } from '../../../../utils/Base'

const Settings = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [valueError, setValidationError] = useState({fieldName: ''});
  const [passwordFormateValidationError, setPasswordFormateValidationError] = useState('');



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValidationError({ fieldName: '' });

    if (name === 'currentPassword') {
      const validatedCurrentPassword = passwordValidation(value);
      setFormData((prevData) => ({...prevData,[name]: String(validatedCurrentPassword)}));
    }

    if (name === 'newPassword') {
      const validatedNewPassword = passwordValidation(value);
      setFormData((prevData) => ({...prevData,[name]: String(validatedNewPassword)}));

      const validateFormat = passwordValidation(value, true);
      setPasswordFormateValidationError(validateFormat);
    }

    if (name === 'confirmPassword') {
      const validatedConfirmPassword = passwordValidation(value);
      setFormData((prevData) => ({...prevData,[name]: String(validatedConfirmPassword)}));

      if (value !== formData.newPassword) {
        setPasswordMatch(false)
      } else {
        setPasswordMatch(true)
      }
    }
  }



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { fieldName, isValid } = validateFields(formData);

    if (isValid && formData.newPassword === formData.confirmPassword && passwordFormateValidationError === 'valid') {
      console.log(formData)
      // Here you can add logic to send the data to your backend
    } 

    setValidationError({ fieldName: fieldName });
  }

  return (
    <div className="settings-container">
      <h1 className="settings-title">Change Password</h1>
      <form className="settings-form" onSubmit={handleSubmit}>
        <PasswordInputTag 
          label={'current password'}
          name={'currentPassword'} 
          value={formData.currentPassword} 
          readonly={false} 
          placeholder='current password'
          func={handleInputChange}
          isValueError={valueError.fieldName === 'currentPassword'?true:false}
        />

        <PasswordInputTag
          label={'new password'}
          name={'newPassword'}
          value={formData.newPassword}
          readonly={false}
          placeholder='new password'
          func={handleInputChange}
          isValueError={valueError.fieldName === 'newPassword'?true:false}
          passwordFormateValidationError={passwordFormateValidationError}
        />

        <PasswordInputTag
          label={'confirm password'}
          name={'confirmPassword'}
          value={formData.confirmPassword}
          readonly={false}
          placeholder='confirm password'
          func={handleInputChange}
          isValueError={valueError.fieldName === 'confirmPassword'?true:false}
          passwordMatch={passwordMatch}
        />
        
        <button type="submit" className="submit-button">Change Password</button>
      </form>

      <div className="delete-account">
        <h2 className="delete-title">Delete Account</h2>
        <p className="delete-warning">Warning: This action cannot be undone.</p>
        <button type="button" className="delete-button">Delete Account</button>
      </div>
    </div>
)}

export default Settings
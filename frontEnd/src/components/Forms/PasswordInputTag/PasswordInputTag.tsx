import React, { useState } from 'react'
import './PasswordInputTag.scss';
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordInputTagProps {
    label?: string;
    name: string;
    readonly: boolean;
    isValueError?: boolean;
    passwordMatch?: boolean;
    func: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    placeholder?: string;
    passwordFormateValidationError?: string;
}
const PasswordInputTag: React.FC<PasswordInputTagProps> = ({ label, name, readonly, value, placeholder, passwordMatch= true, func, isValueError = false, passwordFormateValidationError }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    return (
        <div className='password-input-tag'>
            <div className='form-group'>
                {label && <label htmlFor={name}>{label}:</label>}
                <div className={`input-field 
                        ${readonly === true ? '__readonly' : ''}
                        ${isValueError ? 'value-error' : ''}
                    `}
                >
                    <input
                        type={isShowPassword ? "text" : "password"}
                        name={name}
                        id={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e) => func(e)}
                        readOnly={readonly}
                    />
                    {!isShowPassword && <FaEye className='fa' onClick={() => setIsShowPassword(true)} />}
                    {isShowPassword && <FaEyeSlash className='fa' onClick={() => setIsShowPassword(false)} />}
                </div>
                {!passwordMatch && value && <p>password not match</p>}
                {passwordFormateValidationError !== 'valid' && <p>{passwordFormateValidationError}</p>}
            </div>
        </div>
    )
}

export default PasswordInputTag

import React, { useRef } from 'react';
import './Otp.scss';

interface OtpProps {
    otp1Name: string;
    otp2Name: string;
    otp3Name: string;
    otp4Name: string;
    otp1: string;
    otp2: string;
    otp3: string;
    otp4: string;
    func: (name: string, value: string) => void;
    valueErrorFields?: {fieldName: string}
}

const Otp: React.FC<OtpProps> = ({ otp1Name, otp2Name, otp3Name, otp4Name, otp1, otp2, otp3, otp4, func, valueErrorFields }) => {
    const inputRefs = [
        useRef<HTMLInputElement>(null), 
        useRef<HTMLInputElement>(null), 
        useRef<HTMLInputElement>(null), 
        useRef<HTMLInputElement>(null)
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.target;
        if (/^\d$/.test(value)) {
            func(name, value)
            if (e.target.value.length === 1 && index < inputRefs.length - 1) {
                inputRefs[index + 1].current?.focus();
            }
        }
    };



    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        const { name } = e.currentTarget;
        func(name, '')
        if (e.key === "Backspace" && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    };
    



    return (
        <div className="otp">
            <div className="otp-container">
                <input
                    type="text"
                    name={otp1Name}
                    id={otp1Name}
                    value={otp1}
                    maxLength={1}
                    ref={inputRefs[0]}
                    onChange={(e) => handleInputChange(e, 0)}
                    onKeyDown={(e) => handleKeyDown(e, 0)}
                    className={valueErrorFields?.fieldName === otp1Name ? 'value-error' : ''}
                />
                <input
                    type="text"
                    name={otp2Name}
                    id={otp2Name}
                    value={otp2}
                    maxLength={1}
                    ref={inputRefs[1]}
                    onChange={(e) => handleInputChange(e, 1)}
                    onKeyDown={(e) => handleKeyDown(e, 1)}
                    className={valueErrorFields?.fieldName === otp2Name ? 'value-error' : ''}
                />
                <input
                    type="text"
                    name={otp3Name}
                    id={otp3Name}
                    value={otp3}
                    maxLength={1}
                    ref={inputRefs[2]}
                    onChange={(e) => handleInputChange(e, 2)}
                    onKeyDown={(e) => handleKeyDown(e, 2)}
                    className={valueErrorFields?.fieldName === otp3Name ? 'value-error' : ''}
                />
                <input
                    type="text"
                    name={otp4Name}
                    id={otp4Name}
                    value={otp4}
                    maxLength={1}
                    ref={inputRefs[3]}
                    onChange={(e) => handleInputChange(e, 3)}
                    onKeyDown={(e) => handleKeyDown(e, 3)}
                    className={valueErrorFields?.fieldName === otp4Name ? 'value-error' : ''}
                />
            </div>
        </div>
    );
};

export default Otp;

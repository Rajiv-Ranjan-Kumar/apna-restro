import './InputTag.scss';

interface InputTagProps {
    label?: string;
    name: string;
    type: string;
    readonly: boolean;
    isValueError?: boolean;
    func: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string|number;
    placeholder?: string;
}

const InputTag:React.FC<InputTagProps> = ({ label, name, type, readonly, value, placeholder, func, isValueError=false }) => {
    
    return (
        <div className='input-tag'>
            <div className='form-group'>
                {label&&<label htmlFor={name}>{label}:</label>}
                <input
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e)=>func(e)}
                    readOnly={readonly}
                    className={ `${type === 'datetime-local' ? '__validity':''}
                                 ${readonly === true ? '__readonly' : ''}
                                 ${isValueError ? 'value-error' : ''}`
                                }
                />
            </div>
        </div>
    );
}

export default InputTag

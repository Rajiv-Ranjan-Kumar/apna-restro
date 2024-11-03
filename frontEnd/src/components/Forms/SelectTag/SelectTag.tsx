import './SelectTag.scss';

interface SelectTagProps<T>{
    label: string;
    name: string;
    isValueError?: boolean;
    options: { [key: string]: string | boolean }[];
    optionDefaultValue: string;
    selected?: string|number|boolean;
    isDecibel?: boolean;
    setOption: React.Dispatch<React.SetStateAction<T>>;
}

const SelectTag = <T,>({label, name, options=[], optionDefaultValue, setOption, isValueError, selected='' , isDecibel=false}: SelectTagProps<T>) => {

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;

        setOption((prev)=>({...prev, [name]: value}))
    };

    return (
        <div className='select-tag'>
            <div className='form-group'>
                <label htmlFor={name}>{label}:</label>
                <select id={name} name={name} onChange={handleSelectChange} disabled={isDecibel} defaultValue="" className={isValueError ? 'value-error' : ''}>
                    <option value='' disabled>{optionDefaultValue}</option>
                    {Array.isArray(options) && options.map((option) =>(
                        <option key={option.id?.toString()} value={option.id?.toString()}
                            selected={selected === option.name || selected === option.id}
                            disabled={option.is_active===false}
                        >{option.name}{option.is_active}</option>
                    ))}
                </select>
            </div>
        </div>    
    )
}

export default SelectTag

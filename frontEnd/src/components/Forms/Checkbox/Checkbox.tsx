import React, { useCallback } from 'react'
import './CheckBox.scss';

interface CheckboxProps {
    label: string;
    name: string;
    readonly: boolean;
    setData: React.Dispatch<React.SetStateAction<{ [key: string]: string | number | boolean | null | undefined }>>;
    data: boolean;
}

const Checkbox:React.FC<CheckboxProps> = ({label, name, readonly, setData, data}) => {


    const handelOnChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          const { checked } = e.target;
          setData((prev) => ({ ...prev, [name]: checked }));
        },
        [name, setData]
    );

  return (
    <div className='checkbox-container'>
      <div className='form-group'>
                <input
                    type='checkbox'
                    name={name}
                    id={name}
                    checked={data}
                    onChange={handelOnChange}
                    disabled={readonly} 
                />
               <label htmlFor={name}>{label}</label>
            </div>
    </div>
  )
}

export default Checkbox

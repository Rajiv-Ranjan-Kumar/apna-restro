import React from 'react';
import './UploadImageTag.scss';

interface UploadImageTagProps<T> {
  label: string;
  name: keyof T;
  imagePath: string | null;
  isValueError?: boolean;
  setImage: React.Dispatch<React.SetStateAction<T>>;
}

const UploadImageTag = <T,>({ label, name, imagePath, setImage, isValueError=false }: UploadImageTagProps<T>) => {
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage((prevData) => ({
        ...prevData,
        [name]: URL.createObjectURL(file)
      }));
    }
  };

  return (
    <div className='upload-image-tag'>
      <div className="form-group">
        <label htmlFor={String(name)}>{label}</label>
        <input type="file" id={String(name)} name={String(name)} accept="image/*" onChange={handleImageUpload} className={isValueError ? 'value-error' : ''}/>
      </div>
      {imagePath && <img src={imagePath} alt={String(name)} loading='lazy' />}
    </div>
  );
};

export default UploadImageTag;

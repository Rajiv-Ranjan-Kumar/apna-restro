import React from 'react';
import './SearchBoxAndAddButton.scss';
import { FaPlus } from 'react-icons/fa';

interface SearchBoxAndAddButtonProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddClick?: () => void;
  isAddButton?: boolean;
  buttonName?: string;
}

const SearchBoxAndAddButton: React.FC<SearchBoxAndAddButtonProps> = ({ placeholder, value, onChange, onAddClick= () => {}, isAddButton = false, buttonName='Add' }) => {
  return (
    <div className="search-add-container">
      <input
        type="text"
        className="search-box"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {isAddButton&&<button className="add-btn" onClick={onAddClick}><FaPlus/><span>{buttonName}</span></button>}
    </div>
  );
};

export default SearchBoxAndAddButton;

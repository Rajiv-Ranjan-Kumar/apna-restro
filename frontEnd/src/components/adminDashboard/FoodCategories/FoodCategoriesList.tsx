import React from 'react'
import './FoodCategoriesList.scss';

import { FaCheckCircle, FaEdit, FaTimesCircle, FaTrashAlt } from 'react-icons/fa';

interface FoodCategoriesListProps {
  currentItems: {[key:string]: string|boolean}[];
  handleUpdateCategories: (id: string) => void;
  handleDeleteCategories: (id: string) => void;
}

const FoodCategoriesList:React.FC<FoodCategoriesListProps> = ({currentItems, handleDeleteCategories, handleUpdateCategories}) => {
  return (
    <table className="categories-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Categories Name</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((categories) => (
              <tr key={typeof categories.id === 'number' ? categories.id : categories.id.toString()}>
                <td>
                  <img src={typeof categories.menu_image==='string'? categories.menu_image:''} alt={'image'} loading='lazy' className="categories-image" />
                </td>
                <td>{categories.menu_name}</td>
                <td>
                  {categories.is_active? (<FaCheckCircle style={{ color: 'green', marginLeft: '8px' }} />):( <FaTimesCircle style={{ color: 'red', marginLeft: '8px' }} />)}
                </td>
                <td>
                  <button className="action-btn edit-btn" onClick={()=>handleUpdateCategories(categories.id.toString())}><FaEdit /></button>
                  <button className="action-btn delete-btn" onClick={()=>handleDeleteCategories(categories.id.toString())}><FaTrashAlt /></button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No categories items found</td>
            </tr>
          )}
        </tbody>
    </table>
  )
}

export default FoodCategoriesList;

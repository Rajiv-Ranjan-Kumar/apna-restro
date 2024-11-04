import React from 'react'
import './FoodList.scss'
import { FaCheckCircle, FaEdit, FaTimesCircle, FaTrashAlt } from 'react-icons/fa';

interface currentItems {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: number;
    reviews: number;
    discount: number;
    is_available: boolean;
}

interface FoodListProps {
    currentItems: currentItems[];
    handleUpdateFoodStatus: (id: string) => void;
    handleDeleteFood: (id: string) => void;
}

const FoodList: React.FC<FoodListProps> = ({ currentItems, handleUpdateFoodStatus, handleDeleteFood }) => {
    const tableHeader = ['Image', 'Name', 'Category', 'Available', 'Price', 'Discount', 'Actions'];

    return (
        <table className="food-table">
            <thead>
                <tr>
                    {tableHeader.map((header, index) =>(
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {currentItems.length > 0 ? (
                    currentItems.map((food) => (
                        <tr key={food.id}>
                            <td>
                                <img src={food.image} alt={food.name} className="food-image" loading='lazy' />
                            </td>
                            <td>{food.name}</td>
                            <td>{food.category}</td>
                            <td>
                                {food.is_available ? (<FaCheckCircle style={{ color: 'green', marginLeft: '8px' }} />) : (<FaTimesCircle style={{ color: 'red', marginLeft: '8px' }} />)}
                            </td>
                            <td>₹{food.price}</td>
                            <td>₹{food.discount}</td>
                            <td>
                                <button className="action-btn edit-btn" onClick={() => handleUpdateFoodStatus(food.id)}><FaEdit /></button>
                                <button className="action-btn delete-btn" onClick={() => handleDeleteFood(food.id)}><FaTrashAlt /></button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5}>No food items found</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default FoodList

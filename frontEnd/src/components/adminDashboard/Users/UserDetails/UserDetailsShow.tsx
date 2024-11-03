import React from 'react';
import './UserDetailsShow.scss'
import CustomBarChart from '../../../chart/BarChart/BarChart';

interface UserAddress {
    flatNo: string;
    village: string;
    post: string;
    policeStation: string;
    street: string;
    district: string;
    state: string;
    country: string;
    zipCode: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    image: string;
    address: UserAddress;
}

interface OrderData {
    name: string;
    cancelled: number;
    accepted: number;
    rejected: number;
}

interface UserDetailsShowProps {
    user: User;
    lastYearOrdersData: OrderData[];
    totalOrdersData: OrderData[];
    handleBlockAccount: (userId: string) => void;
}

const UserDetailsShow: React.FC<UserDetailsShowProps> = ({ user, lastYearOrdersData, totalOrdersData, handleBlockAccount }) => {

    return (
        <div className="user-details-container">
            <h2 className="user-details-title">{user.name}'s Profile</h2>
            <img src={user.image} alt={user.name} className="user-image" loading='lazy' />
            <div className="user-info">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <h3>Address:</h3>
                <table className="user-address-table">
                    <tbody>
                        <tr>
                            <td><strong>Flat No:</strong> {user.address.flatNo}</td>
                            <td><strong>Village:</strong> {user.address.village}</td>
                        </tr>
                        <tr>
                            <td><strong>Post:</strong> {user.address.post}</td>
                            <td><strong>Police Station:</strong> {user.address.policeStation}</td>
                        </tr>
                        <tr>
                            <td><strong>Street:</strong> {user.address.street}</td>
                            <td><strong>District:</strong> {user.address.district}</td>
                        </tr>
                        <tr>
                            <td><strong>State:</strong> {user.address.state}</td>
                            <td><strong>Country:</strong> {user.address.country}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}><strong>Zip Code:</strong> {user.address.zipCode}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="chart-container">
                <CustomBarChart data={lastYearOrdersData} />
                <CustomBarChart data={totalOrdersData} />
            </div>

            <button className="block-account-button" onClick={()=>handleBlockAccount(user.id)}>Block Account</button>
        </div>
    );
};

export default UserDetailsShow;

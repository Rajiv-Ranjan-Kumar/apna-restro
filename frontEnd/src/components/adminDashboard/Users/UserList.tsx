import React from 'react'
import './UserList.scss'
import { FaEye } from 'react-icons/fa';

interface UserListProps {
  currentUsers: {[key: string]: string}[];
  viewDetails: (id: string) => void;
}

const UserList:React.FC<UserListProps> = ({currentUsers,viewDetails}) => {
  return (
    <table className="user-list-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.length > 0 ? (
            currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <FaEye 
                    onClick={() => viewDetails(user.id)} 
                    style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'green'}}
                    aria-hidden="true"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>Users not found.</td>
            </tr>
          )} 
        </tbody>
      </table>
  )
}

export default UserList

import { useEffect, useState } from 'react';
import './Users.scss';
import { initialUsers } from '../../../../data/Users';
import { useNavigate } from 'react-router-dom';
import { paginate } from '../../../../utils/User';
import Pagination from '../../../../components/PaginationButton/PaginationButton';

import SearchBoxAndAddButton from '../../../../components/SearchBoxAndAddButton/SearchBoxAndAddButton';
import { adminRoutes } from '../../../AllRoutes';
import UserList from '../../../../components/adminDashboard/Users/UserList';

const Users = () => {
  interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const usersPerPage = 6;

  useEffect(() => {
    setUsers(initialUsers);
  }, []);

  const filteredUsers = users.filter(user => {
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) || 
      user.email.toLowerCase().includes(query) || 
      user.id.toLowerCase().includes(query) ||
      user.phone.includes(query)
    );
  });

  const { currentUsers, totalPages } = paginate(filteredUsers, currentPage, usersPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const navigate = useNavigate();

  const viewDetails = (id: string) => {
    navigate(adminRoutes.adminDashboardUserDetails(id));
  };





  return (
    <div className="user-list-container">
      <SearchBoxAndAddButton 
        placeholder={'Search by name, email, ID or phone...'} 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="table-container">
        <UserList 
          currentUsers={currentUsers} 
          viewDetails={viewDetails}
        />
      </div>

      <div className="pagination">
        {totalPages > 1 && 
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onNext={handleNext} 
            onPrevious={handlePrevious}
          />
        }
      </div>
    </div>
  );
};

export default Users;

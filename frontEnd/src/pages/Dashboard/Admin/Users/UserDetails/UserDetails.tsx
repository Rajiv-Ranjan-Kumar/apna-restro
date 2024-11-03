import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetails.scss';
import { initialUsers } from '../../../../../data/Users';
import UserDetailsShow from '../../../../../components/adminDashboard/Users/UserDetails/UserDetailsShow';


const UserDetails = () => {
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

  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchedUser = initialUsers.find((user) => user.id === id);
    setUser(fetchedUser || null);
  }, [id]);

  if (!user) {
    return <div>User not found!</div>;
  }

  const handleBlockAccount = () => {
    alert(`Account for ${user.name} has been blocked.`);
  };

  const lastYearOrdersData = [
      { name: 'Last Year Orders', cancelled: 5, accepted: 15, rejected: 20 },
  ];

  const totalOrdersData = [
      { name: 'Total Orders', cancelled: 12, accepted: 25, rejected: 50 },
  ];



  return (
    <UserDetailsShow user={user} lastYearOrdersData={lastYearOrdersData} totalOrdersData={totalOrdersData} handleBlockAccount={handleBlockAccount}/>
  );
};

export default UserDetails;

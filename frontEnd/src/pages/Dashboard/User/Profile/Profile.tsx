import { lazy, Suspense, useEffect, useState } from 'react'
import './Profile.scss'
const UserBasicDetails = lazy(() => import('../../../../components/UserDashboard/Profile/UserBasicDetails/UserBasicDetails'));
import UserPermanentAddress from '../../../../components/UserDashboard/Profile/UserPermanentAddress/UserPermanentAddress';
import ProductDeliveryDetails from '../../../../components/UserDashboard/Profile/ProductDeliveryDetails/ProductDeliveryDetails';
import UserBasicDetailsLoading from '../../../../components/LoadingAnimation/UserDashboard/Profile/UserBasicDetailsLoading/UserBasicDetailsLoading';
import OtherDetailsLoading from '../../../../components/LoadingAnimation/UserDashboard/Profile/OtherDetailsLoading/OtherDetailsLoading';

const Profile = () => {

    const [userBasicData, setUserBasicData] = useState<{[key: string]: string | null}>({
        name: '',
        email: '',
        phone: '',
        image: null,
    });

    const [address, setAddress] = useState<{ [key: string]: string }>({
        flat: '',
        village: '',
        post: '',
        police: '',
        dist: '',
        state: '',
        country: '',
        pincode: '',
    });

    const [deliveryAddress, setDeliveryAddress] = useState<{ [key: string]: string }>({
        flat: '',
        street: '',
        city: '',
        state: '',
        country: '',
        zip: '',
    });

    useEffect(() => {  
        const setData = () => {
            setUserBasicData({
                name: 'John Doe',
                email: 'john.doe@example.com',
                phone: '+91 1234567890',
                image: 'https://via.placeholder.com/150',
            });

            setAddress({
                flat: '101',
                village: 'Green Valley',
                post: 'Central Post Office',
                police: 'City Police Station',
                dist: 'Metropolis',
                state: 'California',
                country: 'United States',
                pincode: '90210',
            });

            setDeliveryAddress({
                flat: '102',
                street: 'abc Street',
                city: 'Metropolis',
                state: 'California',
                country: 'United States',
                zip: '90210',
            });
        };

        const timer = setTimeout(setData, 10000);

        return () => clearTimeout(timer);
    }, []);

    


  return (
    <div className="profile">
        <Suspense fallback={<UserBasicDetailsLoading/>}>
            <UserBasicDetails userBasicData={userBasicData} setUserBasicData={setUserBasicData}/>
        </Suspense>

        <Suspense fallback={<OtherDetailsLoading/>}>
            <UserPermanentAddress address={ address } setAddress={setAddress}/>
        </Suspense>

        <Suspense fallback={<OtherDetailsLoading/>}>
            <ProductDeliveryDetails deliveryAddress={deliveryAddress} setDeliveryAddress={setDeliveryAddress}/>
        </Suspense>
    </div>
  )
}
export default Profile
import { useEffect, useState } from 'react';
import './FoodOffers.scss';

import { useNavigate } from 'react-router-dom';
import { adminRoutes } from '../../../AllRoutes';
import SearchBoxAndAddButton from '../../../../components/SearchBoxAndAddButton/SearchBoxAndAddButton';
import { paginate } from '../../../../utils/offers';
import Pagination from '../../../../components/PaginationButton/PaginationButton';
import { formatValidity } from '../../../../utils/Base';
import { initialOffers } from '../../../../data/offers';
import OfferList from '../../../../components/adminDashboard/Offers/OfferList';

const OffersTable = () => {
  type OfferType = {
    id: string; 
    title: string;
    description: string;
    foodName: string;
    category: string;
    offerCode: string;
    validity: string;
    price: number;
    discount: number;
    active: boolean;
    isUsed: boolean;
  };


  const [offers, setOffers] = useState<OfferType[]|null|undefined>([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const offerPerPage = 6;

  const navigate = useNavigate();


  useEffect(()=>{
    setOffers(initialOffers);
  },[]);


  const handleUpdateOffer = (id:string) => {
    navigate(adminRoutes.adminDashboardUpdateFoodOffer(id));
  }

  const handleDeleteOffer = (id:string) => {
    setOffers(offers?.filter((offer) => offer.id !== id));
  };


  const filteredOffers:OfferType[] = offers?offers.filter((offer) =>
    offer.foodName.toLowerCase().includes(searchTerm.toLowerCase())
  ):[];


  const { currentOffers, totalPages } = paginate(filteredOffers, currentPage, offerPerPage);


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


  return (
    <div className="offers-container">
      <SearchBoxAndAddButton 
        placeholder={'Search offers...'} 
        value={searchTerm} 
        onChange={(e)=>setSearchTerm(e.target.value)} 
        isAddButton={true} 
        buttonName='Add Offer' 
        onAddClick={()=>navigate(adminRoutes.adminDashboardAddFoodOffer)}
      />

      <div className="table-container">
        <OfferList
          currentOffers={currentOffers} 
          formatValidity={formatValidity} 
          handleUpdateOffer={handleUpdateOffer} 
          handleDeleteOffer={handleDeleteOffer}
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

export default OffersTable;

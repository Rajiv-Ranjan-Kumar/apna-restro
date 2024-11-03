import React from 'react'
import './OfferList.scss';
import { FaEdit, FaTrash } from 'react-icons/fa';

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

interface OfferListProps {
    currentOffers: OfferType[] | null | undefined;
    formatValidity: (validity: string) => string;
    handleUpdateOffer: (id: string) => void;
    handleDeleteOffer: (id: string) => void;
}

const OfferList:React.FC<OfferListProps> = ({ currentOffers, formatValidity, handleUpdateOffer, handleDeleteOffer }) => {
    const headerNames = ["Name", "Category", "Price", "Discount (%)", "Offer Code", "Validity", "Actions"];
  return (
    <table className="offers-table">
        <thead>
          <tr>
            {headerNames.map((headerName, index) =>(
                <th key={index}>{headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(currentOffers) && currentOffers.length > 0 ? (
            currentOffers.map((offer) => (
              <tr key={offer.id}>
                <td>{offer.foodName}</td>
                <td>{offer.category}</td>
                <td>${offer.price}</td>
                <td>{offer.discount}%</td>
                <td>{offer.offerCode.toUpperCase()}</td>
                <td>{formatValidity(offer.validity)}</td> 
                <td>
                  <button type="button" className="action-btn edit-btn" onClick={()=>handleUpdateOffer(offer.id)}><FaEdit/></button>
                  <button type="button" className="action-btn delete-btn" onClick={() => handleDeleteOffer(offer.id)}><FaTrash /></button>
                </td>
              </tr>
            ))
          ):(
            <tr>
              <td colSpan={7}>No any offers.</td>
            </tr>
          )}
        </tbody>
      </table>
  )
}

export default OfferList

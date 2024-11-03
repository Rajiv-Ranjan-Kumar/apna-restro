import React from 'react';
import './Offer.scss';

interface OfferProps {
  offers: {[key:string]: string|number|boolean|undefined|null}[]|undefined|null;
  showOfferCode: boolean;
  setShowOfferCode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Offer: React.FC<OfferProps> = ({ offers, showOfferCode, setShowOfferCode }) => {
  return (
    <div className="offer-container">
      {offers && offers.length > 0 ? (
        <ul className="offers-list">
          {offers.map((offer, index) => (
            <li key={index} className="offer-item">
              <h3 className="offer-item__title">{offer.title}</h3>
              <p className="offer-item__description">{offer.description}</p>
              <div className="discount-and-button">
                <span className="discount-and-button__discount">{offer.discount}% OFF</span>
                {offer.active ? (
                  !offer.isUsed && !showOfferCode ? (
                    <>
                      <button className="discount-and-button__button" onClick={() => setShowOfferCode(true)}>Redeem Now</button>
                      {showOfferCode && <span className="offer-code">{offer.offerCode}</span>}
                    </>
                  ) : (
                    <span className="offer-code">{offer.offerCode}</span>
                  )
                ) : (
                  <span className="offer-code">{offer.offerCode}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-offers">No offers available at the moment.</p>
      )}
    </div>
  );
}

export default Offer;

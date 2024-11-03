import './Offers.scss'
import { lazy, Suspense, useEffect, useState } from 'react'

import { initialOffers } from '../../../../data/offers';
const Offer = lazy(() => import('../../../../components/UserDashboard/Offer/Offer'));
import OfferLoading from '../../../../components/LoadingAnimation/UserDashboard/Offer/OfferLoading';

const Offers = () => {
  const [offers, setOffers] = useState<{[key:string]: string|number|boolean|undefined|null}[]|undefined|null>([]);
  const [showOfferCode, setShowOfferCode] = useState(false);

  useEffect(()=>{
    setOffers(initialOffers);
  },[]);

  return (
      <div className="offers">
        <Suspense fallback={<OfferLoading/>}><Offer offers={offers} showOfferCode={showOfferCode} setShowOfferCode={setShowOfferCode}/></Suspense>
      </div>
  )
}
export default Offers;
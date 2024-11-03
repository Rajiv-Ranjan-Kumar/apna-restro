import { useState } from 'react'
import useRequiredEnv from './base';


const UseLocation = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const [liveLatitude, setLiveLatitude] = useState(0);
  const [liveLongitude, setLiveLongitude] = useState(0);

  const [userAddress, setUserAddress] = useState<{[key: string]: string}>({
    road: "",
    road_type: "",
    city: "",
    district: "",
    state: "",
    country: "",
    postal_code: "",
    country_code: "",
  });

  const geo = navigator.geolocation;


  const userCoords = (position: GeolocationPosition) => {
    const userLatitude = position.coords.latitude;
    const userLongitude = position.coords.longitude;

    console.log(userLatitude, userLongitude);
    setLatitude(userLatitude);
    setLongitude(userLongitude);
  };

  geo.getCurrentPosition(userCoords);


  const { OPENCAGE_API_KEY } = useRequiredEnv();
  
  const fatchUserAddress = async () => {
    try {
      const url = `https://api.opencagedata.com/geocode/v1/json?key=${OPENCAGE_API_KEY}&q=${latitude},${longitude}&pretty=1&no_annotations=1`;
      const response = await fetch(url);
  
      if (!response.ok) {
        console.error("Error fetching address:", response.statusText);
        return;
      }
  
      const data = await response.json();
  
      setUserAddress((prev) => ({
        ...prev,
        road: data.results[0].components.road || 'N/A',
        road_type: data.results[0].components.road_type || '',
        city: data.results[0].components.city || '',
        district: data.results[0].components.state_district || '',
        state: data.results[0].components.state || '',
        country: data.results[0].components.country || '',
        postal_code: data.results[0].components.postcode || '',
        country_code: data.results[0].components.country_code || '',
      }));
    } catch (error) {
      console.error("Error occurred while fetching user address:", error);
    }
  };
  

  const getHandleUserAddress = () => {
    fatchUserAddress();
  }


  const userLiveCoords = (position: GeolocationPosition) => {
    const userLiveLatitude = position.coords.latitude;
    const userLiveLongitude = position.coords.longitude;

    // console.log(userLiveLatitude, userLiveLongitude,'kk');
    setLiveLatitude(userLiveLatitude);
    setLiveLongitude(userLiveLongitude);
  }

  const watchID = geo.watchPosition(userLiveCoords);

  const stopGPS = () => {
    geo.clearWatch(watchID);
}

  return{
    latitude,
    longitude,
    liveLatitude,
    liveLongitude,
    userAddress,
    getHandleUserAddress,
    stopGPS
  }

}

export default UseLocation;

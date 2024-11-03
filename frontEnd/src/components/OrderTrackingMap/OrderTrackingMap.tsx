import { useState, useEffect } from "react";
import './OrderTrackingMap.scss'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { assets } from "../../assets/assets";


const customerMarkup = new L.Icon({
  iconUrl: assets.markup_icon,
  iconSize: [20, 30],
  iconAnchor: [12, 30],
  popupAnchor: [1, -34],
  shadowSize: [30, 30],
  shadowAnchor: [22, 94],
});

const OrderTrackingMap = () => {
  const fixedLocation: LatLngTuple = [24.837208940560064, 84.51152571162655];
  const [dynamicLocation, setDynamicLocation] = useState<LatLngTuple>([24.845, 84.52]);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const locations: LatLngTuple[] = [
    [24.845, 84.52],
    [24.83, 84.53],
    [24.82, 84.50],
    [24.82, 84.46],
  ];

  useEffect(() => {
    let index = 0;
    let previousLocation = dynamicLocation;


    const interpolatePosition = (start: LatLngTuple, end: LatLngTuple, t: number): LatLngTuple => {
      return [
        start[0] + (end[0] - start[0]) * t,
        start[1] + (end[1] - start[1]) * t,
      ];
    };

    const calculateAngle = (start: LatLngTuple, end: LatLngTuple): number => {
      const deltaY = end[1] - start[1];
      const deltaX = end[0] - start[0];
      const angleInDegrees = Math.atan2(deltaY, deltaX) * (90 / Math.PI);
      return angleInDegrees;
    };


    const animateMarker = (start: LatLngTuple, end: LatLngTuple, duration: number) => {
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const progress = (currentTime - startTime) / duration;
        if (progress < 1) {
          const interpolatedLocation = interpolatePosition(start, end, progress);
          setDynamicLocation(interpolatedLocation);
          requestAnimationFrame(step);
        } else {
          setDynamicLocation(end);
        }
      };

      requestAnimationFrame(step);
    };

    const timer = setInterval(() => {
      const nextLocation = locations[(index + 1) % locations.length];

      const angle = calculateAngle(previousLocation, nextLocation);

      setRotationAngle(angle);

      animateMarker(previousLocation, nextLocation, 5000);
      previousLocation = nextLocation;
      index = (index + 1) % locations.length;
    }, 5000);

    return () => clearInterval(timer);
  }, [dynamicLocation]);



  const deliveryPartnerMarkup = L.divIcon({
    html: `<img src="${assets.bike_men}" loading="lazy" style="width: 25px; height: 41px; transform: rotate(${rotationAngle}deg);" />`,
    iconSize: [25, 41],
    iconAnchor: [12, 30], 
    className: "custom-div-icon",
  });



  return (
    <div className="map-responsive-container">
      <div className="inner-container">
        <MapContainer center={fixedLocation} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%", borderRadius: "10px", zIndex: "0" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <Marker position={fixedLocation} icon={customerMarkup}>
            <Popup>Fixed User Location</Popup>
          </Marker>
        
          <Marker position={dynamicLocation} icon={deliveryPartnerMarkup}>
            <Popup>Dynamic User Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default OrderTrackingMap;

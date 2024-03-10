import { MapContainer, Marker, TileLayer, Popup, Polyline } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from 'react-redux';
import {icon} from "leaflet";
import { clear } from '../redux/slices/flightSlice';

// eslint-disable-next-line react/prop-types
const MapView = ({openModal}) => {
  const state = useSelector((store) => store)
  const dispatch = useDispatch();
 

  //? ikon metodu
   const planeIcon = icon({
    iconUrl:"/pl3.png",
    iconSize: [50,60]
  });


  return (
    <MapContainer center={[39.149702, 35.420686]} zoom={6} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {/* İMLEÇ */}

  {state.flights.map((flight) => (

// eslint-disable-next-line react/jsx-key
<Marker icon={planeIcon} position={[flight.lat, flight.lng]}>
<Popup> 
<div className='popup'>
  <span>Kod: {flight.code} </span>
  <button onClick={() => openModal(flight.id)} >Detail</button>
  {state.trail.length > 0 && <button onClick={() => dispatch(clear())}>Clear Route</button>}
  
  </div>  
</Popup>
</Marker>
  ))}
 <Polyline positions={state.trail} />
</MapContainer>
  )
}

export default MapView
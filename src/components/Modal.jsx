import axios from "axios"
import { useEffect, useState } from "react"
import {  options2 } from "../redux/slices/constant"
import { useDispatch } from "react-redux";
import { setTrail } from "../redux/slices/flightSlice";
import moment from "moment";
import 'moment/locale/tr';


// eslint-disable-next-line react/prop-types
const Modal = ({detailId, closeModal}) => {
    const [d,setData] = useState(null);
    const dispatch = useDispatch();

  
   
    
    useEffect(() => {
        //? useEffect her çalıştığında önceki uçuşun verilerini temizle
        //? bu sayede yükleniyor devreye girecek  
        setData(null);
        axios.get(`https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`, options2)
        .then(res => {
            dispatch(setTrail(res.data.trail));
            setData(res.data);
        })
    },[detailId])

    const formatDate = (time) => {
     const date =  new Date(time * 1000).toUTCString();

     return moment(date).calendar();
      
    }  

  return (
    <div className="detail-outer">
    <div className="detail-inner">
    <p className="close-area"><span onClick={closeModal}>X</span></p>
    {!d ? 
        <div className="wrapper"> 
    <div className="loader">
  <span></span>
</div> 
</div>: !d.airport.origin || !d.airport.destination? (
<div>
<p>{d.airline?.name}</p>
<p>Data of this Flight is Confidential</p>
</div>): <>
    <h2>{d.aircraft.model.text}</h2>
    <h2>{d.aircraft.model.code}</h2>

    <p>{d.aircraft.registration}</p>

        <img src={d.aircraft.images.large[0].src} />
        <p>
        <span>Company:</span>
        <span> {d.airline.name}</span>
        </p>

        <p>
        <span>Departure:</span>
        <span><a target="_blank" href={d.airport.origin.website} rel="noreferrer">{d.airport.origin.name} </a></span>
        </p>

        <p>
        <span>Destination:</span>
        <span><a target="_blank" href={d.airport.destination.website} rel="noreferrer">{d.airport.destination.name} </a></span>
        </p>

        <p>
          <span>Departure time: </span>
          <span>
          {formatDate(d.time.scheduled.departure)}
          </span>
        </p>


        <p>
          <span>landing time: </span>
          <span>
          {formatDate(d.time.scheduled.arrival)}
          </span>
        </p>

        <p className={d.status.icon}>
            <span>{d.status.text}</span>
        </p>

    </> }
    </div>
    </div>
  )
}

export default Modal
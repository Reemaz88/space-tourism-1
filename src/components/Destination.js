import React, {useState} from 'react'
import '../style/Destination.css'; 
import data from '../data.json';
import moon from '../assets/destination/image-moon.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';
import mars from '../assets/destination/image-mars.png';

function Destination() {
  const [DestinationOption, setDestination] = useState("Moon");
  return (
    <div className="destination-main">
        <p className="title"><h6>01</h6>PICK YOUR DESTINATION</p>
        <div className="destination-options">
            {data.destinations.map((destination)=>(
                <span key={destination.name}
                className={"dest-option " + (DestinationOption === destination.name ? "active" : "") }
                onClick={e => setDestination(destination.name)}>
                    {destination.name}
                </span>
            ))}
        </div>
        {data.destinations.map((destination)=>(
            <div key={destination.name} className="destination">
                <div className={"dest-info " + (DestinationOption === destination.name ? "active" : "")}>
                    <img 
                    src={DestinationOption === "Moon" ? moon : DestinationOption === "Titan" ? titan : 
                    DestinationOption === "Mars" ? mars : europa} 
                    alt={destination.name} /> 
                    <div className="dest-Subinfo">
                        <p className="name">{destination.name}</p>
                        <p className="description">{destination.description}</p>
                        <div className="distance">
                            <p className="distance-info">AVG. DISTANCE <span>{destination.distance}</span></p>
                            <p className="distance-info">EST. TRAVEL TIME <span>{destination.travel}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Destination
import React, {useState} from 'react';
import '../style/Crew.css';
import data from '../data.json';
import hurley from '../assets/crew/image-douglas-hurley.png'
import ansari from '../assets/crew/image-anousheh-ansari.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import victor from '../assets/crew/image-victor-glover.png'

function Crew() {
  const [CrewOption, setCrewOption] = useState("Douglas Hurley");
  return <div className="crew">
      <p className="title"><h6>02 </h6>MEET YOUR CREW</p>
      {data.crew.map((member)=>(
      <div key={member.name} className={"crew-info " + (CrewOption === member.name ? "active" : "")}>
        <div className="crew-subinfo">
          <p className="role">{member.role}</p>
          <p className="name">{member.name}</p>
          <p className="bio">{member.bio}</p>
        </div>
        <div className="crew-image">
          <img 
          src={
            CrewOption === 'Douglas Hurley' ? hurley : CrewOption === 'Mark Shuttleworth' ? mark : 
            CrewOption === 'Victor Glover' ? victor : ansari } 
          alt="" />
        </div>
      </div>
      ))}
      <div className="crew-option">
          {data.crew.map((member)=>(
            <input key={member.name} checked={CrewOption === member.name ? true : false} 
            type="radio" name="crew" className="option" 
            value={member.name}
            onChange={e => setCrewOption(member.name)}/>
          ))}
            
      </div>
    </div>;
}

export default Crew;
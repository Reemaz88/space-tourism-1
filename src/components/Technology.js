import React, {useState} from 'react'
import '../style/Technology.css'
import data from '../data.json';
import launch from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceport from '../assets/technology/image-spaceport-portrait.jpg'
import capsule from '../assets/technology/image-space-capsule-portrait.jpg'


function Technology() {
  const [technology, setTechnology] = useState("launch vehicle");
  return (
    <div className="technology">
        <p className="title"><h6>03</h6>SPACE LAUNCH 101</p>
        <div className="tech-content">
          <div className="tech-options">
            <input type="button" name="tech" 
              className={"option " + (technology === "launch vehicle" ? "active" : "")} 
              value="1" onClick={e => setTechnology("launch vehicle")}/>
            <input type="button" name="tech" 
              className={"option " + (technology === "spaceport" ? "active" : "")}
              value="2" onClick={e => setTechnology("spaceport")}/>
            <input type="button" name="tech" 
            className={"option " + (technology === "space capsule" ? "active" : "")}
            value="3" onClick={e => setTechnology("space capsule")}/>
          </div>
          {data.technology.map((tech)=>(
            <div className={"tech-info " + (technology === tech.name.toLowerCase() ? "active" : "")}>
              <p className="tech-title">The Therminology...</p>
              <p className="tech-name">{tech.name}</p>
              <p className="tech-desc">{tech.description}</p>
            </div>
          ))}
          <div className="tech-image">
            <img src={technology === "launch vehicle" ? launch 
            : technology === "spaceport" ? spaceport : capsule} 
            alt=""/>
          </div>
        </div>
    </div>
  )
}

export default Technology
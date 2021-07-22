import React from 'react';
import  Carousel  from "react-bootstrap/Carousel";

import './EventComponent.css';
function EventComponent() {
  return (
    <div >
     <div className="event">
     <div className="ename">
      <p className="pevent">EVENT</p>
      <div className="ediv">
      <input type="date" className="dt"></input> 
      <p  className="pcss">WEDDING</p>
      </div>
      <div className="ediv2">
      <input type="date" className="dt"></input>
      <p  className="pcss">ANNIVE</p>
      </div>
      
      <div className="ediv3" >
      <input type="date" className="dt"></input> 
      <p  className="pcss">BIRTHDAY</p>
      </div>
      <div className="ediv4">
      <input type="date" className="dt"></input>
      <p  className="pcss">WEDDING</p>
      </div>
      <div className="ediv5">
      <input type="date" className="dt"></input>
      <p  className="pcss" >ANNIVER</p>
      </div>
      <div className="ediv6">
      <input type="date" className="dt"></input>
      <p className="pcss">BIRTHDAY</p>
      </div>
     </div>
     </div>
    
    </div>
  );
}

export default EventComponent;
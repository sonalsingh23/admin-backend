import React from 'react';

import { Carousel } from 'react-bootstrap';
import './EventComponent.css';
const EVENT_LIST = [
  {
  id: 1,
  name: "WEEDING"
  },
  {
  id: 2,
  name: "ANNIVE"
  },
  {
  id: 3,
  name: "BIRTHDAY"
  },
  {
  id: 4,
  name: "WEDDING"
  },
  {
  id: 5,
  name: "ANNIVER"
  },
  {
    id: 6,
    name: "BIRTHDAY"
    },
];

const EventComponent = () => {
  return (
    <div >
     <div className="event">
     
     <div className="ename">
      <p className="pevent">EVENT</p>
      { EVENT_LIST && EVENT_LIST.map((event, index) =>(
        <>
       
      <div className="ediv">
      <input type="date" className="dt"></input> 
      <p  className="pcss">{event.name}</p>
      </div>
      
      </>
      ))}
      </div>
     
    
    
     </div>
    
    </div>
  );
}

export default EventComponent;
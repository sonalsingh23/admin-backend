import React from 'react';
import "../assest/css/Card.css"

export default function Card(props) {
  return (
    <>
      <div className='col-lg-6 col-12 padding'>
        <div className="card cardbody">
          <img src={props.imgsrc} className="card-img-top avatar" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.titless}</h5>
            <p className="card-text">{props.para}</p>
         
          </div>
        </div>
      </div>
    </>
  );
}
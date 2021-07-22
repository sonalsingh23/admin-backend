import React from 'react';
import './FaceImage.css';
import download from './download.jpg'
function FaceImage() {
  return (
      <div>
    <div className="img">
       <img src={download} className="dow" alt="BigCo Inc. logo"/>
      <div className="hel"> <h4>HELLO , RACHEL</h4></div>
    </div>
    </div>
  );
}

export default FaceImage;
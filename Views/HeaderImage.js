import React from "react";
import './HeaderImage.css';
import imagef from './imagef.jpg';
function HeaderImage() {
  return (
    <div class="container">
    <div class="row">
   <div class="col-xl-6 col-lg-6 col-md-6">
    <img src={imagef} className="dimg" alt="BigCo Inc. logo"/>
    </div>
      <div class="col-xl-6 col-lg-6 col-md-6">
       <img src={imagef} className="dimg1" alt="BigCo Inc. logo"/>
       </div>

   </div>
    </div>
  );
}

export default HeaderImage;
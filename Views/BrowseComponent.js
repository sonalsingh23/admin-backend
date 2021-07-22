import React from "react";
import './BrowseComponent.css';
import imagef from './imagef.jpg';
import { Carousel } from 'react-bootstrap';
function BrowseComponent() {
    return (
      <div class="container">
        <div class="row mt-5 bg-black">
      <Carousel className="car">
  <Carousel.Item>
  <div className="pbrouse"  class="col-xl-2 col-lg-2 col-md-2">
       <p >Brouse:</p>
       </div>
       </Carousel.Item> 
       <Carousel.Item>
  <div className="brouse" class="col-xl-2 col-lg-2 col-md-2">
           <button className="brsbtn">FASHION</button>
       </div>
    
  </Carousel.Item>
  <Carousel.Item>
  <div className="brouse1" class="col-xl-2 col-lg-2 col-md-2 ">
       <button className="bsbtn">HEALTH&BEAUTI</button>
       </div>

  
  </Carousel.Item>
  <Carousel.Item>
  <div className="brouse2" class="col-xl-2 col-lg-2 col-md-2 ">
       <button className="bsbtn">ELWCTRIC&TECH</button>
       </div>

  </Carousel.Item>
  <Carousel.Item>
  <div className="brouse3" class="col-xl-2 col-lg-2 col-md-2 ">
       <button className="bsbtn">BOOK&STATIONARY</button>
       </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="brouse4" class="col-xl-2 col-lg-2 col-md-2 ">
       <button className="bsbtn">TOYS&HOBBIES</button>
       </div>
    </Carousel.Item>

</Carousel>
    
     
      
     
       <div className="imgr" >
       <img src={imagef} className="fimg" alt="BigCo Inc. logo"/>
   
       </div>
       </div>
      </div>
    );
  }
  
  export default BrowseComponent;
import React from "react";
import './BrowseComponent.css';
import imagef from './imagef.jpg';
import { Carousel } from 'react-bootstrap';

const BROWSE_LIST = [
    {
    id: 1,
    name: "FASHION"
    },
    {
    id: 2,
    name: "HEALTH&BEAUTI"
    },
    {
    id: 3,
    name: "FASHION"
    },
    {
    id: 4,
    name: "FASHION"
    },
    {
    id: 5,
    name: "FASHION"
    },
];

const BrowseComponent = () => {
    return (
      <div class="container">
        <div class="">
          <Carousel className="car" >
          <div className="pbrouse"  class="col-xl-2 col-lg-2 col-md-2">
                    <p >Brouse:</p>
                </div>
         
                { BROWSE_LIST && BROWSE_LIST.map((browse, index) => (
                    <>
                    <Carousel.Item key={index}> 
                        <div className="brouse col-xl-2 col-lg-2 col-md-2">
                            <button className="brsbtn">{browse.name}</button>
                        </div>
                    </Carousel.Item> 
                    </>
                ))}
          </Carousel>
          <div className="imgr" >
            <img src={imagef} className="fimg" alt="BigCo Inc. logo"/>
          </div>
       </div>
      </div>
    );
  }

  export default BrowseComponent; 
import React from "react";
import imagef from './imagef.jpg';
function BrowseComponent() {
    return (
      <div >
       <p className="pbrouse">Brouse:</p>
       <div className="brouse">
           <button className="brsbtn">btn</button>
       </div>
       <div className="brouse1">
       <button className="bsbtn">btn</button>
       </div>
       <div className="brouse2">
       <button className="bsbtn">btn</button>
       </div>
       <div className="brouse3">
       <button className="bsbtn">btn</button>
       </div>
       <div className="brouse4">
       <button className="bsbtn">btn</button>
       </div>
       <div className="brouse5">
       <button className="bsbtn">btn</button>
       </div>
       <div className="imgr">
       <img src={imagef} className="fimg" alt="BigCo Inc. logo"/>
       </div>
      </div>
    );
  }
  
  export default BrowseComponent;
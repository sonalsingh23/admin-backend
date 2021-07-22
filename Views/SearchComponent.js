import React from "react";
import './SearchComponent.css';
function SearchComponent() {
  return (
    <div className="search" >
     
     <input type="text" placeholder="Search Product or brand here" name="search" className="scmt"></input>
  <button type="submit">Hey</button>
    </div>
  );
}

export default SearchComponent;

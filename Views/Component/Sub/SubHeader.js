import React from "react";
import './SubHeader.css';
function SubHeader() {
  return (
    <ul className="hc">
     <div className="add">
        <button className="sbtn">BTN</button>
        <p className="cmt">VISIT CONCIERATE</p>
     </div>
     <div className="book">
        <button className="sbtn">BTN</button>
        <p className="cmt">BOOK SHOP</p>
     </div>
    <div className="visit">
        <button className="abtn">BTN</button>
         <p className="cmt">ADD EVENT</p>
     </div>
    </ul>
  );
}

export default SubHeader;
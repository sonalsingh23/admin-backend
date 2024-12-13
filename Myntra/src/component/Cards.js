import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import image3 from '../assests/Images/dress.jpg'
import "../assests/CSS/nav.css"

const Cards = () => {
  return (
    <div className="card">
      <img
        src={image3} // Fallback image
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">
          <strong>Price:</strong> 
        </p>
        <div className="card-buttons">
          <button className="btn btn-primary">
            <FaShoppingCart size={20} />
          </button>
          <button className="btn btn-secondary" >
            <FcLike size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

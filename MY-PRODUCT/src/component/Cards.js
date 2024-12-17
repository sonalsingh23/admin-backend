import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import image3 from '../assests/Images/dress.jpg'
import "../assests/CSS/nav.css"
import { useDispatch, useSelector } from "react-redux";
import { addCart,addWishlist,removeCart,removeWishlist } from "../Redux/addtoCartSlice";
import { GrCart } from "react-icons/gr";

const Cards = ({ id, price, image = image3,quantity }) => {
  const dispatch=useDispatch();
  const { cartList, wishList } = useSelector((state) => state.Cart );

  const isInCart = cartList.some((item) => item.id === id);
  const isInWishlist = wishList.some((item) => item.id === id);

  const handleAddToCart = () => {
    if (isInCart) {
      console.log("Removing from cart:", id);
      dispatch(removeCart(id)); 
    } else {
      if (isInWishlist) {
        console.log("Removing from wishlist to add to cart:", id);
        dispatch(removeWishlist(id)); 
      }
      console.log("Adding to cart:", { id, price });
      dispatch(addCart({ id, price, quantity: 1, image })); // Add to cart
    }
  };
  
  const handleWishList = () => {
    if (isInWishlist) {
      console.log("Removing from wishlist:", id);
      dispatch(removeWishlist(id)); 
    } else if (!isInCart) { 
      console.log("Adding to wishlist:", { id, price });
      dispatch(addWishlist({ id, price, quantity: 1, image })); 
    }
  };
  
  return (
    <div className="card">
      <img
  src={image || image3}
  alt={`Cards ${id}`}
  className="card-img-top"
  style={{
    width: "100%",
    height: "200px",
    objectFit: "contain",
  }}
/>

      
      <div className="card-body">
        <h5 className="card-title">Product ID: {id}</h5>
        <p className="card-text">
          <strong>Price:</strong> ${price}
        </p>
        <div className="card-buttons">
          <button className="btn " onClick={() => handleAddToCart()}>
          {isInCart ? (
              <FaShoppingCart size={30} style={{ color: "black" }} />
            ) : (
              <GrCart size={30} style={{ color: "#252b33" }} />
            )}
          </button>
          <button className="btn" onClick={() => handleWishList()}>
            {isInWishlist ? (
              <FcLike size={40} style={{ color: "#252b33" }} />
            ) : (
              <FcLikePlaceholder size={40} style={{ color: "#252b33" }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};


export default Cards;

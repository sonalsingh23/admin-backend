import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveShoppingCart } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import image3 from '../assests/Images/dress.jpg';
import { addWishlist, removeCart, removeWishlist } from '../Redux/addtoCartSlice';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const AddtoCart = () => {
  const dispatch = useDispatch();
  
  // Access cartList and wishList from Redux store
  const { cartList, wishList } = useSelector((state) => state.Cart);
  
  const [quantities, setQuantities] = useState(
    cartList.reduce((acc, item) => {
      acc[item.id] = item.quantity || 0;
      return acc;
    }, {})
  );

  const addFunction = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const subtractFunction = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(0, prevQuantities[id] - 1),
    }));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeCart(id));
  };

  const handleWishList = (id) => {
    // Check if the item is in the cart
    const isInCart = cartList.some((item) => item.id === id);
    const isInWishlist = wishList.some((item) => item.id === id);

    if (isInCart) {
      console.log("Cannot add to wishlist: Item is already in cart");
      return; // Prevent adding to wishlist if it's already in the cart
    }

    if (isInWishlist) {
      dispatch(removeWishlist(id)); // Remove from wishlist if it's already there
    } else {
      dispatch(addWishlist({ id, quantity: quantities[id] })); // Add to wishlist
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        margin: "20px",
        marginTop: "30px",
      }}
    >
      {cartList.length ? (
        cartList.map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.id}>
            <img
              src={item.image || image3}
              className="card-img-top"
              alt={`Product ${item.id}`}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                marginTop: "10px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Product ID: {item.id}</h5>
              <p className="card-text">
                <strong>Quantity:</strong> {quantities[item.id]}
              </p>
              <p className="card-text">
                <strong>Original Price: </strong> ${item.price}
              </p>
              <p className="card-text">
                 <strong>Total Price:</strong> ${item.price * quantities[item.id]} 
              </p>
              <div>
                <button
                  className="btn btn-secondary m-2"
                  onClick={() => subtractFunction(item.id)}
                  disabled={quantities[item.id] === 0}
                >
                  <GrFormSubtract />
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => addFunction(item.id)}
                >
                  <IoIosAdd />
                </button>
              </div>
              <button
                className="btn btn-dark m-3"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                <MdRemoveShoppingCart size={20} style={{ color: "white" }} />
              </button>

              {/* Wishlist */}
              {/* <button
                className="btn"
                onClick={() => handleWishList(item.id)}
                style={{ border: "none", background: "none", cursor: "pointer" }}
              >
                {wishList.some((wishlistItem) => wishlistItem.id === item.id) ? (
                  <FcLike size={30} style={{ color: "#252b33" }} />
                ) : (
                  <FcLikePlaceholder size={30} style={{ color: "#252b33" }} />
                )}
              </button> */}
            </div>
          </div>
        ))
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </div>
  );
};

export default AddtoCart;

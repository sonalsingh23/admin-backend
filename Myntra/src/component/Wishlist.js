import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import image1 from '../assests/Images/dress.jpg';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { addWishlist, removeWishlist } from "../Redux/addtoCartSlice";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { addCart } from "../Redux/addtoCartSlice";  // Import addCart action
import "../assests/CSS/nav.css"

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishList, cartList } = useSelector((state) => state.Cart); // Getting cartList too

  const [quantities, setQuantities] = useState(
    wishList.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1;
      return acc;
    }, {})
  );

  useEffect(() => {
    setQuantities((prevQuantities) =>
      wishList.reduce((acc, item) => {
        acc[item.id] = prevQuantities[item.id] || item.quantity || 1;
        return acc;
      }, {})
    );
  }, [wishList]);

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

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeWishlist(id));
  };

  const handleAddToCartFromWishlist = (id) => {
    const item = wishList.find((item) => item.id === id);

    if (item) {
      // Remove from wishlist
      dispatch(removeWishlist(id));
      
      // Add to cart with quantity from wishlist
      dispatch(addCart({ ...item, quantity: quantities[id] }));

      
      console.log(`Moved product ${id} to cart`);
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
      {wishList.length ? (
        wishList.map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.id}>
            <img
              src={item?.image || image1}
              className="card-img-top"
              alt={`Product ${item.id}`}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title">Product ID: {item.id}</h5>
              <p className="card-text">
                <strong>Quantity:</strong> {quantities[item.id]}
              </p>
              <p className="card-text">
                <strong>Price:</strong> ${item.price}
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  className="btn"
                  onClick={() => handleAddToCartFromWishlist(item.id)}  // Move to Cart
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  <div className="add">
                  <strong>Add to Bag</strong>
                  </div>
                </button>
                <button
                  className="btn"
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  style={{ border: "none", background: "none", cursor: "pointer" }}
                >
                  {wishList.some((wishlistItem) => wishlistItem.id === item.id) ? (
                    <FcLike size={30} style={{ color: "#252b33" }} />
                  ) : (
                    <FcLikePlaceholder size={30} style={{ color: "#252b33" }} />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>Your Wishlist is empty</h2>
      )}
    </div>
  );
};

export default Wishlist;


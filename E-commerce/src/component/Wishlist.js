import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import image1 from "../assests/CSS/61WUSYIQdKL._AC_UY327_FMwebp_QL65_.webp";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { addWishList, removeWishlist } from "../Redux/addtocartSlice";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.cart);

  const [quantities, setQuantities] = useState(
    wishlist.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1; // Default to 1 if no quantity is set
      return acc;
    }, {})
  );

  useEffect(() => {
    // Sync quantities with wishlist changes
    setQuantities((prevQuantities) =>
      wishlist.reduce((acc, item) => {
        acc[item.id] = prevQuantities[item.id] || item.quantity || 1;
        return acc;
      }, {})
    );
  }, [wishlist]);

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

  const handleWishList = (id) => {
    const isInWishlist = wishlist.some((item) => item.id === id);
    if (isInWishlist) {
      dispatch(removeWishlist(id));
    } else {
      dispatch(addWishList({ id, quantity: quantities[id] }));
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
      {wishlist.length ? (
        wishlist.map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.id}>
            <img
              src={image1}
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
                  onClick={() => handleWishList(item.id)}
                  style={{ border: "none", background: "none", cursor: "pointer" }}
                >
                  {wishlist.some((wishlistItem) => wishlistItem.id === item.id) ? (
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




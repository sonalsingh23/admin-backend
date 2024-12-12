import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import image1 from "../assests/CSS/61WUSYIQdKL._AC_UY327_FMwebp_QL65_.webp";
import { MdRemoveShoppingCart } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { removeCart } from "../Redux/addtocartSlice"; // Import removeCart action

const AddtoCart = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);

  // Local state to manage quantities for each product
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
   
    dispatch(removeCart({ id }));
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
              src={image1}
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
                {/* <strong>Total Price:</strong> ${item.price * quantities[item.id]} */}
                <strong>Total Price:{item.price}</strong>
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





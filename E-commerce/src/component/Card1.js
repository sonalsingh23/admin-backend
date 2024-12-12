import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addWishList, removeCart, removeWishlist } from "../Redux/addtocartSlice";
import { GrCart } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import image1 from "../assests/CSS/61WUSYIQdKL._AC_UY327_FMwebp_QL65_.webp";

const Card1 = ({ id, image, price, quantity }) => {
  const dispatch = useDispatch();
  const { cartList, wishlist } = useSelector((state) => state.cart);

  const isInCart = cartList.some((item) => item.id === id);
  const isInWishlist = wishlist.some((item) => item.id === id);

  const handleAddToCart = () => {
    if (isInCart) {
      dispatch(removeCart(id));
    } else {
      if (isInWishlist) {
        dispatch(removeWishlist(id));
      }
      dispatch(addCart({ id, price, quantity: 1 }));
    }
  };

  const handleWishList = () => {
    if (isInWishlist) {
      dispatch(removeWishlist(id));
    } else {
      dispatch(addWishList({ id, price, quantity: 1 }));
    }
  };

  return (
    <div className="card" key={id} style={styles.card}>
      <img
        src={image1 || "image1"} // Use default image if `image` prop is missing
        className="card-img-top"
        alt="Product"
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
        <div>
          <button className="btn" onClick={() => handleAddToCart()}>
            {isInCart ? (
              <FaShoppingCart size={30} style={{ color: "#252b33" }} />
            ) : (
              <GrCart size={30} style={{ color: "#252b33" }} />
            )}
          </button>
          <button className="btn" onClick={() => handleWishList()}>
            {isInWishlist ? (
              <FcLike size={30} style={{ color: "#252b33" }} />
            ) : (
              <FcLikePlaceholder size={30} style={{ color: "#252b33" }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default Card1;



{
  /* <FcLike size={30} style={{ color: '#252b33' }} /> */
}

{
  /* <button
            className="btn btn-secondary m-2"
            onClick={subtractFunction}
            disabled={quantity === 0}
          >
            <GrFormSubtract />
          </button>
          <button className="btn btn-secondary" onClick={handleAddToCart}>
            Go to Cart
          </button>
          <button className="btn btn-secondary m-2" onClick={addFunction}>
            <IoIosAdd />
          </button> */
}

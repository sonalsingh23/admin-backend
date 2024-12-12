import React from "react";
import { Link } from "react-router-dom";
import "../assests/CSS/Style.css";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useSelector } from "react-redux";

const NavBar = () => {
  // Ensure the selector paths match your Redux store structure
  const cartList = useSelector((state) => state.cart.cartList || []);
  const wishlist = useSelector((state) => state.cart.wishlist || []);

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.5rem 1rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 10,
        width: "100%",
      }}
    >
      {/* Logo */}
      <div>
        <a
          href="#home"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textDecoration: "none",
            color: "#252b33",
          }}
        >
          PKS
        </a>
      </div>

      {/* Search Bar */}
      <form
        className="d-flex"
        style={{
          flex: 1,
          margin: "0 2rem",
          display: "flex",
          alignItems: "center",
          maxWidth: "400px",
          marginLeft: "300px",
        }}
      >
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          className="form-control"
          style={{ width: "100%", marginRight: "0.5rem" }}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Search
        </button>
      </form>

      <ul
        style={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          margin: 0,
          padding: 0,
          gap: "1rem",
        }}
      >
        <li>
          <Link to="/Home" style={{ textDecoration: "none", color: "#252b33" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#252b33" }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/Card"
            style={{ textDecoration: "none", color: "#252b33" }}
          >
            Product
          </Link>
        </li>
        <li>
          <CgProfile
            size={30}
            style={{ cursor: "pointer", color: "#252b33" }}
          />
        </li>
        <li>
          <Link
            to="/AddtoCart"
            style={{
              position: "relative",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            <FaShoppingCart
              size={30}
              style={{
                color: "#252b33",
                fontWeight: "bold",
                fontSize: "20px",
                verticalAlign: "middle",
              }}
            />
            {cartList.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {cartList.length}
              </div>
            )}
          </Link>
        </li>
        <li>
          <Link
            to="/wishlist"
            style={{
              position: "relative",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            <FcLike
              size={30}
              style={{
                color: "#252b33",
                fontWeight: "bold",
                fontSize: "20px",
                verticalAlign: "middle",
              }}
            />
            {wishlist.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {wishlist.length}
              </div>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;










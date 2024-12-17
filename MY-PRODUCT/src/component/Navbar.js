import React, { useState } from 'react';
import '../assests/CSS/nav.css';
import logo from '../assests/Images/logo.jpg';
import { FcLike } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Navbar = ({ settext, text }) => {
  const [searchtext, setsearchtext] = useState("");
  const cartList = useSelector((state) => state.Cart.cartList);
  const wishList = useSelector((state) => state.Cart.wishList);

  const handleSearchChange = (e) => {
    setsearchtext(e.target.value); // Update the local state
    settext(e.target.value); // Send the updated search text to the parent
  };

  return (
    <div className="container-fluid header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid header">
          {/* Logo Section */}
          <Link to="/Home">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" className="logo" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Navigation Links */}
            <ul className="navbar-nav mx-3 me-auto nav-section">
              {['Men', 'Women', 'Kids', 'House & Living', 'Beauty'].map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link active" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Search Form */}
            <form className="d-flex me-3 search-form" role="search" onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchtext}
                onChange={handleSearchChange} // Handle search input change
              />
             
            </form>

            {/* Right Aligned Menu */}
            <ul className="navbar-nav right-section">
              <li className="nav-item position-relative">
                <Link to="/Wishlist" className="nav-link active" aria-label="Wishlist">
                  <FcLike size={40} />
                  {wishList.length > 0 && (
                    <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                      {wishList.length}
                    </span>
                  )}
                </Link>
              </li>
              <li className="nav-item position-relative">
                <Link to="/AddtoCart" className="nav-link active" aria-label="Bag">
                  <FaShoppingCart size={40} />
                  {cartList && cartList.length > 0 && (
                    <span className="badge rounded-pill bg-dark position-absolute top-0 start-100 translate-middle">
                      {cartList.length}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

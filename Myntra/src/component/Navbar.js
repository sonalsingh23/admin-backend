import React from 'react';
import '../assests/CSS/nav.css';
import logo from '../assests/Images/logo.jpg';
import { FcLike } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container-fluid header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid header">
          {/* Logo Section */}
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" className="logo" />
          </a>
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
            <form className="d-flex me-3 search-form" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            {/* Right Aligned Menu */}
            <ul className="navbar-nav right-section">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-label="Wishlist">
                  <FcLike size={30} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-label="Bag">
                  <FaShoppingCart size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;





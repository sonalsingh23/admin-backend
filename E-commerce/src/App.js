import React from "react";
import Login from "./container/Login";

// import NavBar from './container/NavBar'
// import Navbar from './container/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from './container/Navbar'

import Layout from "./container/Layout";
import AddtoCart from "./component/AddtoCart";
import Dashboard from "./container/Dashboard";
import Wishlist from "./component/Wishlist";
import Card from "./component/Card";
// import ShoppingCart from './container/ShoppingCart'
// import React from 'react';
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/addtocart" element={<AddtoCart />} />
          <Route path="/Wishlist" element={<Wishlist />} />

          {/* <Route path='/card' element={<Card/>} /> */}

          {/* <Route path='/product' element={<ProductList/>} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

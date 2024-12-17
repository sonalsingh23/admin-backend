import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Dashboard from "./container/Dashboard";
import Wishlist from "./component/Wishlist";
import Layout from "./container/Layout"; // Ensure this is a valid component
import AddtoCart from "./component/AddtoCart"; // Ensure this is a valid component

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/addtocart" element={<AddtoCart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/" element={<Dashboard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;


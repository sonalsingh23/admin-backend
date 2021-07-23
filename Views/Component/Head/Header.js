import React from 'react';
import './App.css';
function Header() {
  return (
    <div className="App">
     <div className="shop">ShopLife</div>
     <div className="link" >
     <ul >
  <a href="#home" className="txtd">Home</a>
  <a href="#news" className="txtd">News</a>
  <a href="#contact" className="txtd">Contact</a>
  </ul>
  </div>
    </div>
  );
}
export default Header;
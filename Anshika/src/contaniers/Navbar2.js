import React from 'react';
import "../assest/css/Navbar2.css"

function Navbar2() {
  return (
<>
<header className='header2'>

<div className="navbar3 scrollbar scrollbar-primary  ">
      <ul className="nav-menu" style={{ position: 'relative', marginBottom: '1px' }}>
        <li className="nav-item background_Nav">
          <a className="nav-link nav-link-paddi navc active" href="#/home">Home</a>
        </li>
        <li className="nav-item background_Nav">
          <a className="nav-link nav-link-paddi navc"  href="#/tournament">Tournament & Event</a>
        </li>
        <li className="nav-item background_Nav">
          <a className="nav-link nav-link-paddi navc" href="#/teamclub">Clubs & Teams</a>
        </li>
        <li className="nav-item background_Nav">
          <a className="nav-link nav-link-paddi navc" href="#/liveplay">Live Play</a>
        </li>
        <li className="nav-item background_Nav">
          <a className="nav-link nav-link-paddi navc" href="#/match">Matches</a>
        </li>
        <li className="nav-item background_Nav">
          <a className="nav-link nav-link-paddi navc" href="#/offer">Offers</a>
        </li>
        <li className="nav-item background_Nav">
          <a className="nav-link nav-link-paddi navc" href="#/gallery">Gallery</a>
        </li>
        <li className="nav-item background_Nav">
          <a className="nav-link nav-link-paddi navc" href="#/parteners">Partners & Franchises</a>
        </li>
        <li className="nav-item background_Nav">
          <a className="nav-link nav-link-paddi navc" href="#/spacelist">Open Darts Center</a>
        </li>
      </ul>
    </div>
   
  </header>
</>
  );
}

export default Navbar2;





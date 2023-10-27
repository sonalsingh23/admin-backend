import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillFacebook ,AiFillYoutube} from 'react-icons/ai';


import {AiFillInstagram  } from 'react-icons/ai';
import {MdKeyboardArrowRight  } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';


import "../assest/css/Footer.css";

function Footer() {
  return (
    <div className=" headerr containers">
      <div className='row divv gx-0 ' >
        <div className='col-md-auto col-lg-8'>
          <div className='generalinfo'>
            <div className='info'>
              <h1 className='headinfo'>General-info</h1>
            </div>
            <div className='row inside' style={{ width: "100%" }}>
              <div className='col-md-auto col-lg-6'>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>About Us</span>
                  <span className='arrow'><MdKeyboardArrowRight/></span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Contact Us</span>
                  <span className='arrow'><MdKeyboardArrowRight/></span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>How To Play</span>
                  <span className='arrow'><MdKeyboardArrowRight/></span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Tournament & Event</span>
                  <span className='arrow'><MdKeyboardArrowRight/></span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Clubs & Teams</span>
                  <span className='arrow'><MdKeyboardArrowRight/></span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Advantages</span>
                  <span className='arrow'><MdKeyboardArrowRight/></span>
                </NavLink>
              </div>
              <div className='col-md-auto col-lg-6'>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Live play</span>
                  <span className='arrow'><MdKeyboardArrowRight/></span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Matches</span>
                  <span className='arrow'><MdKeyboardArrowRight/></span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Offers</span>
                  <span className='arrow'><MdKeyboardArrowRight/></span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Gallery</span>
                  <span className='arrow'><MdKeyboardArrowRight/></span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Partners & Franchies</span>
                  <span className='arrow'><MdKeyboardArrowRight/></span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Open Darto Center</span>
                  <span className='arrow'><MdKeyboardArrowRight/></span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Darto Rules</span>
                  <span className='arrow'><MdKeyboardArrowRight/></span>
                </NavLink>
           
              
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-auto col-lg-4'> 
          <div className='generalinfo'>
            <div className='info'>
              <h1 className='headinfo'>Website-info</h1>
            </div>
            <div className='col-md-auto col-lg-12'>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Privacy Policy</span>
                  <span className='arrow' >{">"}</span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Terms & Conditions</span>
                  <span className='arrow' >{">"}</span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Site Map</span>
                  <span className='arrow' >{">"}</span>
                </NavLink>
                <NavLink to="/aboutus" className="listsearch">
                  <span className='about-darto'>Cookies</span>
                  <span className='arrow' >{">"}</span>
                </NavLink>
              </div>
           
           
          </div>
      
          <div className='generalinfo'>
            <div className='info'>
              <h1 className='headinfo'>Follow Us</h1>
            </div>
          <div className='iconsrow row'>
            <div className='social col-2 col-sm-2'>
<div className='icondiv'>
  <center>
    <NavLink to="/gh" className="itt"><AiFillFacebook/></NavLink>
  </center>
</div>
            </div>
            <div className='social col-2 col-sm-2'>
<div className='icondiv'>
  <center>
    <NavLink to="/gh" className="itt"><AiFillYoutube/></NavLink>
  </center>
</div>
            </div>
            <div className='social col-2 col-sm-2'>
<div className='icondiv'>
  <center>
    <NavLink to="/gh" className="itt"><AiFillInstagram/></NavLink>
  </center>
</div>
            </div>
            <div className='social col-2 col-sm-2'>
<div className='icondiv'>
  <center>
    <NavLink to="/gh" className="itt"><BsTwitter/></NavLink>
  </center>
</div>
            </div>
          </div>
          </div>
        </div>
        <div className="copyRight_define " style={{paddingBottom:"130px"}}><span>Copyright © 2022 DARTO. ALL RIGHTS RESERVED. ALL TRADEMARKS CONTAINED HEREIN ARE THE PROPERTY OF THEIR RESPECTIVE OWNERS. VIZ CREATIVE.</span></div>
      </div>
    </div>
  );
}

export default Footer;


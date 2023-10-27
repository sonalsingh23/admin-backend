import React from 'react'
import lo from "../assest/images/lo.png"
import { AiFillHome } from 'react-icons/ai';
import { PiMagnifyingGlassDuotone } from 'react-icons/pi';
import { FaDotCircle } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import "../assest/css/Navbar1.css"
import { NavLink } from 'react-router-dom';



function Navbar1() {
  return (
    
    <div className='header'>
      <div className='Navbar1'>
        <div className='leftlogo'>

            <button className='bton'><img src={lo} className='dartologo'></img></button>
        </div>
        <div className='rightside'>
            <div className='rightmenu'>
                <span className='menuicn'><AiFillHome/></span>
                <span className='menu'>Home</span>
            </div>
            <div className='rightmenu'>
                <span className='menuicn'><PiMagnifyingGlassDuotone/></span>
                <span className='menu'>Search</span>
            </div>
            <div className='rightmenu'>
                <span className='menuicn'><FaDotCircle/></span>
                <span className='menu'>Darto<span>center</span></span>
            </div>
            <div className='rightmenu'>
               <NavLink to="/profile" style={{color:" #5c778a",    textDecoration: "auto"}} ><span className='menuicn'><FaUserCircle/></span>
                <span className='menu'>me</span></NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar1

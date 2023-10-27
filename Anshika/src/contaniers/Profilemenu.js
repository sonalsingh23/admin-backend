import React from 'react'
import anima from "../assest/images/anima.png"
import Customstake from '../components/Customstake'
import "../assest/css/Profilemenu.css"
import Customprofle from '../components/Customprofle'
import { NavLink } from 'react-router-dom'
import { FaBullseye } from 'react-icons/fa';
import { MdGroups2 } from 'react-icons/md';
import { MdDashboardCustomize } from 'react-icons/md';
import { BiSolidMessageDots } from 'react-icons/bi';
import { FaEarthAmericas } from 'react-icons/fa6';
import { FaHistory } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';


function Profilemenu() {
  return (
    <div className='loginfrm'>
    <NavLink to="/"><Customstake/></NavLink> 
     <div className='padding-top'style={{    paddingTop: "40px"}}>
    <div className='bpdycolor headers mobile-hide'>
           <div className='divider'>
      <div className='bgcolor'>
        <div className='padding-boto'>
            <div className='paddingpx details'>
<div className='stackprofile'>
    <div className='stackprofile1'>
        <div className='sizemangae col-3'>
<span><img src={anima} className='imgavtar'/></span>
        </div>
        <div className='col-9'>
            <div className='paddingg' style={{float:"right",textTransform: "uppercase"}}>
<NavLink to="/login"><button type='submit'className='btn  btn-lg bto'>Log in</button></NavLink>
            </div>
        </div>
    </div>
</div>
<button className='update'>
    <span>
        <img src={anima} className='upadteimg'></img> 
    </span>
    <span className='textt'>My Profile</span>
    <span><MdKeyboardArrowRight/></span>
   </button>
<Customprofle proimg1={<FaBullseye/>} txtt="Darto Profiles"/>
<Customprofle proimg1={<MdGroups2/>} txtt="My Teams and clubs"/>
<Customprofle proimg1={<MdDashboardCustomize/>} txtt="My MemberShip Card"/>
<Customprofle proimg1={<BiSolidMessageDots/>} txtt="How To Play"/>
<Customprofle proimg1={<FaEarthAmericas/>} txtt="Social Connect"/>
<Customprofle proimg1={<FaHistory/>} txtt="History"/>
<Customprofle proimg1={<IoMdSettings/>} txtt="Setting"/>
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
   
  )
}

export default Profilemenu

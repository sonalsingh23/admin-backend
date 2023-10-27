import React from 'react'
import Navbar2 from '../contaniers/Navbar2'
import "../assest/css/Body.css"
import Navbar1 from '../contaniers/Navbar1'
import Footer from '../contaniers/Footer'
import Homepage from '../contaniers/Homepage'
import Divs from "../contaniers/Divs"
import Dartodivider from "../contaniers/Dartodivider"
import Customdiv from './Customdiv'
import Playjoin from '../contaniers/Playjoin'
import Homeicons from '../contaniers/Homeicons'
import { NavLink } from 'react-router-dom'

function Body() {
  return (
<>
<div className='divbody'>
    <div className='bpdycolor'>
      <> 
 <Navbar1/> 
      <Navbar2/> 
      <Homepage/>
      <Divs divtitle="Tournament"/>
      <hr style={{ margin: "3px 0px" }} />
 
      <Divs divtitle="Tournament More"/>
      <Dartodivider/>
      <div className='head' style={{textAlign:"center",justifyContent:"center"}}>
<NavLink to="/jn" style={{color:"#7890a1",textDecoration:"auto" }}><h1 style={{    fontSize: "16PX",    marginTop: "9px"}}>Event Gallery</h1></NavLink>
      </div>
      <Divs divtitle="Event Gallery"/>
      <Playjoin/>
      <Homeicons/>  
   <Footer/>
     </>
   
    </div>
</div>
</>
  )
}

export default Body

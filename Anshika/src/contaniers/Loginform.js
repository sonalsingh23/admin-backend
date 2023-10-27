import React from 'react'
import "../assest/css/Loginform.css"
import imgg from "../assest/images/2.jpg"
import anima from "../assest/images/anima.png"
// import darto from "../assest/images/darto.svg"
import CustomInput from '../components/CustomInput'
import { NavLink } from 'react-router-dom'
import Custombtn from '../components/Custombtn'
import { BiSolidUserCircle } from "react-icons/bi";
import { AiTwotoneLock } from "react-icons/ai";
import Customstake from '../components/Customstake'
function Loginform() {
  return (
     <div className='loginfrm'>
     <NavLink to="/profile"><Customstake/></NavLink> 
      <div className='padding-top'>
        <div className='login'>
            <form className='form'> 
<div className='dartoavtar'>
<img src={anima} className='images'></img>
</div>
<CustomInput reacticns={<BiSolidUserCircle/>} title={"Enter Email Id"}/>
<CustomInput reacticns={<AiTwotoneLock/>} title={"Enter Password"}/>
<div className='paddingto'>
<div className='left'>
<input type="checkbox" style={{marginRight:"12px"}}/>
"Remember me"
</div>
<div className='right'>
  <NavLink to="/userforgotpassword" className="frogt">Forget password ?</NavLink>
</div>

</div>
<Custombtn/>
<div>
  <div className='signupfrm'><NavLink to="/userregister" className="signup"> Sign up</NavLink></div>
</div>

            </form>
        </div>
      </div>
      
     </div>
  )
}

export default Loginform

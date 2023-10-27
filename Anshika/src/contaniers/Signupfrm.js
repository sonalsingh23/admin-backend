import React from 'react'
import "../assest/css/Loginform.css"
import imgg from "../assest/images/2.jpg"
import CustomInput from '../components/CustomInput'
import { NavLink } from 'react-router-dom'
import anima from "../assest/images/anima.png"

import Customstake from '../components/Customstake'
import Custombtn from '../components/Custombtn'
import { BiSolidUserCircle } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { AiTwotoneLock } from "react-icons/ai";
function Signupfrm() {
  return (
     <div className='loginfrm'>
               <NavLink to="/login"><Customstake/></NavLink> 
      <div className='padding-top'>
        <div className='login'>
            <form className='form'> 
<div className='dartoavtar'>
<img src={anima} className='images'></img>
</div>
<CustomInput reacticns={<BiSolidUserCircle/>} title={"First Name"}/>
<CustomInput reacticns={<BiSolidUser/>} title={"last name"}/>
<CustomInput reacticns={<MdEmail/>} title={"Email "}/>
<CustomInput reacticns={<FiSmartphone/>} title={"Mobile Number(optional)"}/>
<CustomInput reacticns={<AiTwotoneLock/>} title={"Password"}/>

<div className='paddingto'>
<div className='left'>
<input type="checkbox" style={{marginRight:"12px"}}/>
"I understand and accept the privacy and policy"
</div>


</div>
<Custombtn/>

<div>
  <div className='signupfrm'><NavLink to="/userregister" className="signup">Sign up</NavLink></div>
</div>

            </form>
        </div>
      </div>
      
     </div>
  )
}

export default Signupfrm
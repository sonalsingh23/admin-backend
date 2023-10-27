import React from 'react'
import Custombtn from '../components/Custombtn'
import { NavLink } from 'react-router-dom'
import Customstake from '../components/Customstake'
import "../assest/css/Forgetpswd.css"
function Forgetpaswd() {
  return (
    <div className='loginfrm'>
           <NavLink to="/login"><Customstake/></NavLink> 
    <div className='padding-top'>
      <div className='logins'>
          <form className='form'> 
          <p className='txt'>Forgot Password</p>
          <div>
          <input placeholder="Registered Email id" type="email" id="email" class="form-control frm" value="" />
          </div>

<Custombtn/>



          </form>
      </div>
    </div>
    
   </div>
  )
}

export default Forgetpaswd

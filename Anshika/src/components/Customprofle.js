import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import "../assest/css/Customprofile.css"


function Customprofle({proimg1,txtt}) {
  return (
   <button className='update'>
    <span>
        <span  className='upadteimg'>{proimg1}</span> 
    </span>
    <span className='textt'>{txtt}</span>
    <span><MdKeyboardArrowRight/></span>
   </button>
  )
}

export default Customprofle

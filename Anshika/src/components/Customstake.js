import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import lo from "../assest/images/lo.png"
import "../assest/css/Customstake.css"
function Customstake() {
  return (
    <div className='back header'>
      <div className='stakeback'>
        <span className='update'>
            <AiOutlineArrowLeft/>
        </span>
      </div>
      <div className='darto-logo'>
        <img src={lo} className='loge'></img>
      </div>
    </div>
  )
}

export default Customstake

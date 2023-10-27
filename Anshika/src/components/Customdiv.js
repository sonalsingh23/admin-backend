import React from 'react'
import "../assest/css/Customdiv.css"

function Customdiv(props) {
  return (
    <div className='customdivs'>
      {props.divtitle}
    </div>
  )
}

export default Customdiv

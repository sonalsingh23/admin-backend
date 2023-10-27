import React from 'react'
import "../assest/css/Dartodivider.css"
import logo from "../assest/images/logos.png"
function Dartodivider() {
  return (
    <div className="divs" style={{padding:"0px 10px"}}>
<div className='contanier1'>
    <div className='firstdiv'>
<h4 className='text'>FREE signup to the DARTO TO Receive Information, Latest News and Competitions</h4>
    </div>
    <div className='seconddiv'>
<img src={logo} className='logosdatos'></img>
<button className='dartosbtn'>Start Learning</button>
    </div>
</div>
      
    </div>
  )
}

export default Dartodivider

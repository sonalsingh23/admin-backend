import React from 'react'
import background from '../assests/intro-bg-4.jpg'
import { IoPlayOutline } from "react-icons/io5";
import '../assests/Style.css';

const Promo = () => {
  return (
    <div>
        <div className="container-fluid position-relative mb-5" style={{ padding: 0,background:'black',opacity:'0.8' }}>
      {/* Background Image */}
      <img 
  src={background} 
  alt="background" 
  style={{ 
    width: '100%', 
    height: '300px', 
    objectFit: 'cover',
    position: 'relative', 
    left: '50%', 
    transform: 'translateX(-50%)', 
    backfaceVisibility:'hidden',
    opacity:'0.3',
backgroundColor:"black"
  }} 
/>


      {/* Overlay Content */}
      <div 
        className="container position-absolute top-50 start-50 translate-middle" 
        style={{ zIndex: 1 }}
      >
        <div className="row gy-5">
        <div className='container text-center'>
        <h1 class="text-9 fw-600 text-white mb-4 mb-lg-5">How it's Works? Play And Watch!</h1>
        </div>
       <div className=' youtube text-center d-flex'>
       <span
  className="icon-wrapper text-center"
  style={{
    display: "flex",         
    justifyContent: "center",
    alignItems: "center",    
    backgroundColor: "white",
    width: "40px",
    height: "40px",
    borderRadius: "50%",     
  }}
>
  <IoPlayOutline
    style={{
      fontSize: "20px",      
      color: "black",        
    }}
  />
</span>
       </div>
         <p class="text-white font text-uppercase ls-1 mt-2 mb-0 text-center">View Promo</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Promo
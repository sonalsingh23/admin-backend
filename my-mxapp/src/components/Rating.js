// import React from 'react';
// import background from '../assests/intro-bg-4.jpg'
// import { FaUsers, FaDownload } from "react-icons/fa";
// import { FaRegStarHalfStroke } from "react-icons/fa6";
// import { IoDiamond } from "react-icons/io5";

// const Rating = () => {
//   return (
//     <section id="counter" className="hero-wrap">
//       {/* Background Overlay */}
//       <div className="hero-mask opacity-8 bg-dark"></div>

//       {/* Parallax Section */}
//       <div className="react-parallax" style={{ position: 'relative', overflow: 'hidden' }}>
//         <img
//           className="react-parallax-bgimage"
//           src={background}
//           alt="Background"
//           style={{
//             position: 'absolute',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             // backfaceVisibility: 'hidden',
//             // height: 'auto',
//             // width: '100%',
//             // filter: 'none',
//           }}
//         />

//         {/* Content Section */}
//         <div className="react-parallax-content" style={{ position: 'relative' }}>
//           <div className="hero-content section">
//             <div className="container">
//               <div className="row gy-5">
//                 {/* Stat Item: Happy Users */}
//                 <div className="col-6 col-md-3">
//                   <div className="featured-box text-center">
//                     <div className="featured-box-icon text-white">
//                       <FaUsers size={32} />
//                     </div>
//                     <h4 className="text-11 text-white fw-500">120K</h4>
//                     <p className="text-light mb-0">Happy Users</p>
//                   </div>
//                 </div>

//                 {/* Stat Item: Positive Ratings */}
//                 <div className="col-6 col-md-3">
//                   <div className="featured-box text-center">
//                     <div className="featured-box-icon text-white">
//                       <FaRegStarHalfStroke size={32} />
//                     </div>
//                     <h4 className="text-11 text-white fw-500">46K</h4>
//                     <p className="text-light mb-0">Positive Ratings</p>
//                   </div>
//                 </div>

//                 {/* Stat Item: Total Downloads */}
//                 <div className="col-6 col-md-3">
//                   <div className="featured-box text-center">
//                     <div className="featured-box-icon text-white">
//                       <FaDownload size={32} />
//                     </div>
//                     <h4 className="text-11 text-white fw-500">125K</h4>
//                     <p className="text-light mb-0">Total Downloads</p>
//                   </div>
//                 </div>

//                 {/* Stat Item: Premium Users */}
//                 <div className="col-6 col-md-3">
//                   <div className="featured-box text-center">
//                     <div className="featured-box-icon text-white">
//                       <IoDiamond size={32} />
//                     </div>
//                     <h4 className="text-11 text-white fw-500">58K</h4>
//                     <p className="text-light mb-0">Premium Users</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Rating;


import React from 'react';
import background from '../assests/intro-bg-4.jpg'
import { IoDiamond } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { FaDownload } from 'react-icons/fa';

const Rating = () => {
  return (
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
          {/* Happy Users */}
          <div className="col-6 col-md-3 text-center">
            <div className="box-icon text-white">
              <FaUsers size={40} />
            </div>
            <h4 className="text-11 text-white fw-500">120K</h4>
            <p className="text-white mb-0">Happy Users</p>
          </div>

          {/* Positive Ratings */}
          <div className="col-6 col-md-3 text-center">
            <div className="box-icon text-white">
              <FaRegStarHalfStroke size={40} />
            </div>
            <h4 className="text-11 text-white fw-500">46K</h4>
            <p className="text-white mb-0">Positive Ratings</p>
          </div>

          {/* Total Downloads */}
          <div className="col-6 col-md-3 text-center">
            <div className="box-icon text-white">
              <FaDownload size={40} />
            </div>
            <h4 className="text-11 text-white fw-500">125K</h4>
            <p className="text-white mb-0">Total Downloads</p>
          </div>

          {/* Premium Users */}
          <div className="col-6 col-md-3 text-center">
            <div className="box-icon text-white">
              <IoDiamond size={40} />
            </div>
            <h4 className="text-11 text-white fw-500">58K</h4>
            <p className="text-white mb-0">Premium Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;






import React,{useRef} from 'react';
import '../assests/Style.css' 

import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
  return (
    <div className='container'>
    <div className="row gy-4">
      {/* Basic Plan */}
      <div className="col-sm-6 col-lg-3">
        <div className="card text-center border-0 shadow-md">
          <div className="card-header text-6 fw-500 text-bg-secondary border-bottom-0 py-4">
            Basic
          </div>
          <div className="card-body">
            <h5 className="text-9 fw-600 mb-0">Free</h5>
            <p className="text-2 badge text-bg-warning fw-600 rounded-pill">Monthly</p>
            <ul className="list-style-2 text-2 text-start">
              <li><IoMdCheckmark />Fully Responsive</li>
              <li><IoMdCheckmark />Dedicated Support</li>
              <li><IoMdCheckmark />Clean and Modern Design</li>
              <li><IoMdCheckmark />Simple and Professional</li>
              <li><IoMdCheckmark />24/7 Support</li>
            </ul>
            <a href="/" className="btn btn-secondary text-uppercase my-1">Start Now</a>
          </div>
        </div>
      </div>

      {/* Advance Plan */}
      <div className="col-sm-6 col-lg-3">
        <div className="card text-center border-0 shadow-md">
          <div className="card-header text-6 fw-500 text-bg-secondary border-bottom-0 py-4">
            Advance
          </div>
          <div className="card-body">
            <h5 className="text-9 fw-600 mb-0">$9.99</h5>
            <p className="text-2 badge text-bg-warning fw-600 rounded-pill">Monthly</p>
            <ul className="list-style-2 text-2 text-start">
              <li><IoMdCheckmark />Fully Responsive</li>
              <li><IoMdCheckmark />Dedicated Support</li>
              <li><IoMdCheckmark />Clean and Modern Design</li>
              <li><IoMdCheckmark />Simple and Professional</li>
              <li><IoMdCheckmark />24/7 Support</li>
            </ul>
            <a href="/" className="btn btn-secondary text-uppercase my-1">Start Now</a>
          </div>
        </div>
      </div>

      {/* Standard Plan */}
      <div className="col-sm-6 col-lg-3"
      >
        <div className="card text-center border-0 shadow-md">
          <div className="card-header text-6 fw-500 text border-bottom-0 py-4 text-white" style={{ backgroundColor: '#BE2583' }}>
            Standard
          </div>
          <div className="card-body">
            <h5 className="text-9 fw-600 mb-0">$19.99</h5>
            <p className="text-2 badge text-bg-warning fw-600 rounded-pill">Monthly</p>
            <ul className="list-style-2 text-2 text-start">
              <li><IoMdCheckmark />Fully Responsive</li>
              <li><IoMdCheckmark />Dedicated Support</li>
              <li><IoMdCheckmark />Clean and Modern Design</li>
              <li><IoMdCheckmark />Simple and Professional</li>
              <li><IoMdCheckmark />24/7 Support</li>
            </ul>
            <a href="/" className="btn text-uppercase my-1"
             style={{ backgroundColor: '#BE2583' }}>Start Now</a>
          </div>
        </div>
      </div>

      {/* Premium Plan */}
      <div className="col-sm-6 col-lg-3">
        <div className="card text-center border-0 shadow-md">
          <div className="card-header text-6 fw-500 text-bg-secondary border-bottom-0 py-4">
            Premium
          </div>
          <div className="card-body">
            <h5 className="text-9 fw-600 mb-0">$29.99</h5>
            <p className="text-2 badge text-bg-warning fw-600 rounded-pill">Monthly</p>
            <ul className="list-style-2 text-2 text-start">
              <li><IoMdCheckmark />Fully Responsive</li>
              <li><IoMdCheckmark />Dedicated Support</li>
              <li><IoMdCheckmark />Clean and Modern Design</li>
              <li><IoMdCheckmark />Simple and Professional</li>
              <li><IoMdCheckmark />24/7 Support</li>
            </ul>
            <a href="/" className="btn btn-secondary text-uppercase my-1">Start Now</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pricing;





 // <div id="pricing-tables" className="pricing-section">
    //   <div className="container text-center">
    //     <div className="section-title">
    //       <h1>Pricing Plans</h1>
    //       <p>You can present your app pricing plans here!</p>
    //     </div>
    //     <div className="pricing-table">
    //       <div className="row">
    //         {/* Basic Plan */}
    //         <div className="col-md-6 col-lg-3">
    //           <div className="pricing-card">
    //             <h2>Basic</h2>
    //             <p className="price">
    //               <span className="dollar">$</span>0<span className="duration">/month</span>
    //             </p>
    //             <ul>
    //               <li>Fully Responsive</li>
    //               <li>Dedicated Support</li>
    //               <li>Clean and Modern Design</li>
    //               <li>Simple and Professional</li>
    //             </ul>
    //             <a href="#" className="btn btn-primary">
    //               START NOW
    //             </a>
    //           </div>
    //         </div>
    //         {/* Advance Plan */}
    //         <div className="col-md-6 col-lg-3">
    //           <div className="pricing-card">
    //             <h2>Advance</h2>
    //             <p className="price">
    //               <span className="dollar">$</span>9.99<span className="duration">/month</span>
    //             </p>
    //             <ul>
    //               <li>Fully Responsive</li>
    //               <li>Dedicated Support</li>
    //               <li>Clean and Modern Design</li>
    //               <li>Simple and Professional</li>
    //             </ul>
    //             <a href="#" className="btn btn-primary">
    //               START NOW
    //             </a>
    //           </div>
    //         </div>
    //         {/* Standard Plan */}
    //         <div className="col-md-6 col-lg-3">
    //           <div className="pricing-card">
    //             <h2>Standard</h2>
    //             <p className="price">
    //               <span className="dollar">$</span>19.99<span className="duration">/month</span>
    //             </p>
    //             <ul>
    //               <li>Fully Responsive</li>
    //               <li>Dedicated Support</li>
    //               <li>Clean and Modern Design</li>
    //               <li>Simple and Professional</li>
    //             </ul>
    //             <a href="#" className="btn btn-primary">
    //               START NOW
    //             </a>
    //           </div>
    //         </div>
    //         {/* Premium Plan */}
    //         <div className="col-md-6 col-lg-3">
    //           <div className="pricing-card">
    //             <h2>Premium</h2>
    //             <p className="price">
    //               <span className="dollar">$</span>29.99<span className="duration">/month</span>
    //             </p>
    //             <ul>
    //               <li>Fully Responsive</li>
    //               <li>Dedicated Support</li>
    //               <li>Clean and Modern Design</li>
    //               <li>Simple and Professional</li>
    //             </ul>
    //             <a href="#" className="btn btn-primary">
    //               START NOW
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


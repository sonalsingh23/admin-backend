import React from 'react';
import '../assests/Style.css'

// import { FaTwitter } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-7'>
          <h2 className='heading text-center'>Contact Us</h2>
          <p className='para text-center'>
            We will get back to you in less than 24 hours.
          </p>

          <div className="mb-3">
            <input
              type="name"
              className="form-control"
              placeholder="Name"
            />
            <input
              type="email"
              className="form-control mt-3"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder='Message...'
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="btn  btn-lg"
              style={{ padding: '10px 30px', backgroundColor:"#BE2583",color:'white' }}
            >
              Send Message
            </button>
          </div>
        </div>

        <div className='col-12 col-md-5 p-5 s-3 bg-light'>
          <h2 className='text-start'>Our Headquarters</h2>
          <p>For Customer Support and Query, Get in touch with us.</p>

          <div className="mb-3">
            <FaLocationDot size={20} />
            <span className="ms-2">MXapp Inc.</span>
            <p className="text-start mt-1">
              4th Floor, Plot No.22, Above Public Park
              <br />
              145 Murphy Canyon Rd.
              <br />
              Suite 100-18
              <br />
              San Diego, CA 2028
            </p>
          </div>

          <div className="mb-3">
            <FaPhone size={20} />
            <span className="ms-2">Telephone</span>
            <p className="text-start mt-1">
              (+060) 9898980098, (+060) 8898880088
            </p>
          </div>

          <div className="mb-3">
            <MdEmail size={20} />
            <span className="ms-2">Business Inquiries</span>
            <p className="text-start mt-1">
              info@mxapp.com
            </p>
          </div>
        </div>
      </div>
      
      {/* <footer id="footer" className="section bg-dark footer-text-light">
      <div className="container-fluid">
        <div className="row">
          {/* Footer Text */}
          {/* <div className="col-lg-4 align-self-center text-center text-lg-start">
  <p className="mb-0">
    <span style={{ color: "white" }}> © 2023 MXapp. All Rights Reserved. </span>
  </p>
</div> */}

          {/* Social Media Links */}
          {/* <div className="col-lg-4 align-self-center text-center">
            <div className="social-links">
              <a
                href="https://github.com"
                className="card-link mx-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="card-link mx-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="card-link mx-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="card-link mx-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div> */}

          {/* Navigation Links */}
          {/* <div className="col-lg-4 align-self-center text-center text-lg-end">
            <ul className="nav nav-separator nav-separator-light justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a href="/terms" className="nav-link">
                  Terms of Use
                </a>
              </li>
              <li className="nav-item">
                <a href="/privacy" className="nav-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer> */} 
      </div>
      
    
  );
};

export default Contact;

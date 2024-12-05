import React from 'react'
import '../assests/Style.css'
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
         <footer id="footer" className="section bg-dark footer-text-light">
      <div className="container"
      style={{ padding: '50px 50px',
      width:"100%",
      height:"100",
      
       }}>
        <div className="row">
          {/* Footer Text */}
          <div className="col-lg-4 align-self-center text-center text-lg-start">
  <p className="mb-0">
    <span style={{ color: "white" }}> © 2023 MXapp. All Rights Reserved. </span>
  </p>
</div>

          {/* Social Media Links */}
          <div className="col-lg-4 align-self-center text-center">
            <div className="social-links f-link" style={{color:"white"}}>
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
          </div>

          {/* Navigation Links */}
          <div className="col-lg-4 align-self-center text-center text-lg-end last">
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
    </footer>
    </div>
  )
}

export default Footer
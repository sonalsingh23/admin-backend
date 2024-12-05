import React from 'react';
import '../assests/Style.css'
import logo from '../assests/logo.png'

const Navbar = ({ scrollToSection, refs }) => {
  const { contentRef, aboutRef, featureRef, screenshotRef, testimonialRef, pricingRef, faqRef, contactRef } = refs;

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary navHeader"
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 10,
        backgroundColor: '#fff',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="container-lg">
        <img src={logo} alt="Logo" style={{ height: '40px' }} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" key="home">
              <button className="nav-link active head" onClick={() => scrollToSection(contentRef)}>
                Home
              </button>
            </li>
            <li className="nav-item" key="about">
              <button className="nav-link active head" onClick={() => scrollToSection(aboutRef)}>
                About
              </button>
            </li>
            <li className="nav-item" key="features">
              <button className="nav-link active head" onClick={() => scrollToSection(featureRef)}>
                Features
              </button>
            </li>
            <li className="nav-item" key="screenshot">
              <button className="nav-link active head" onClick={() => scrollToSection(screenshotRef)}>
                Screenshot
              </button>
            </li>
            <li className="nav-item" key="testimonials">
              <button className="nav-link active head" onClick={() => scrollToSection(testimonialRef)}>
                Testimonials
              </button>
            </li>
            <li className="nav-item" key="pricing">
              <button className="nav-link active head" onClick={() => scrollToSection(pricingRef)}>
                Pricing
              </button>
            </li>
            <li className="nav-item" key="faq">
              <button className="nav-link active head" onClick={() => scrollToSection(faqRef)}>
                FAQ
              </button>
            </li>
            <li className="nav-item" key="contact">
              <button className="nav-link active head" onClick={() => scrollToSection(contactRef)}>
                Contact Us
              </button>
            </li>
            <li className="nav-item m-2" key="download">
              <button type="button" className="btn" style={{ backgroundColor: '#BE2583', color: 'white' }}>
                Download
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

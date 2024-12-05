import React, { useRef } from 'react';
import Navbar from './Navbar';
import Content from './Content';
import About from './About';
import Pricing from './Pricing';
import Downloads from './Downloads';
import Subscribe from './Subscribe';
import Contact from '../components/Contect'
import Footer from './Footer';
import Faq from './Faq';
import Testimonial from './Testimonial';
import Features from './Features';
import Rating from './Rating';
import Promo from './Promo';
import ScreenShots from './ScreenShots';

const Dashboard = () => {
  const contentRef = useRef(null);
  const aboutRef = useRef(null);
  const featureRef = useRef(null);
  const screenshotRef = useRef(null);
  const testimonialRef = useRef(null);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{
          contentRef,
          aboutRef,
          featureRef,
          screenshotRef,
          testimonialRef,
          pricingRef,
          faqRef,
          contactRef,
        }}
      />
      <div  ref={contentRef}><Content /></div>
<div ref={aboutRef}><About/></div>
      
      <Rating />
      <div ref={featureRef}><Features/></div>
      <Promo />
      <div ref={pricingRef}><Pricing/></div>
      <div ref={screenshotRef}><ScreenShots/></div>
      <div ref={faqRef}><Faq/></div>
      <Subscribe />
      <div ref={testimonialRef}><Testimonial/></div>
      <div ref={contactRef}><Contact/></div>
      <Footer />
    </div>
  );
};

export default Dashboard;

import React from 'react';
import backimage from '../assests/intro-bg-2.jpg'

const Subscribe = () => {
  return (
    <div
      className="container-fluid position-relative overflow-hidden text-center mt-5 mb-5"
      style={{ backgroundColor: '#BE2583', height: '350px' }}
    >
      {/* Background Image */}
      <img
        src={backimage}
        alt="App download background"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures the image fits well
          opacity: 0.2,
        }}
      />
    
      {/* Content Overlay */}
      <div
        className="position-absolute top-50 start-50 translate-middle text-white"
        style={{
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <h2 className="text-9 fw-600 mb-3" style={{fontSize:'2.8rem',fontWeight:'500',}}>Subscribe to Newsletter</h2>
        <hr className="heading-separator-line mx-auto" style={{backgroundColor:"white",opacity:'1'}}/>
        <p className="lead mb-4"style={{color:'white'}} >
          Subscribe to receive the latest news, new features, and updates.
        </p>
        
        {/* Input and Button */}
        <div className="d-flex justify-content-center">
          <input
            className="form-control"
            type="search"
            placeholder="Your email Address"
            aria-label="Search"
            style={{
              maxWidth: '400px',
              
              fontSize: '1rem',
            }}
          />
          <button
            className="btn btn-outline-dark"
            type="button"
            style={{
              fontSize: '1.5rem',
              padding: '8px 20px',
              borderWidth: '2px',
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;

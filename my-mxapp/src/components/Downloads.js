import React from 'react';
import backimage from '../assests/intro-bg-2.jpg'
import appStore from '../assests/app-store.png'
import googleStore from '../assests/google-play-store.png'

const Downloads = () => {
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
    <h2 className="text-9 fw-700 mb-3" style={{fontSize:'2.8rem',fontWeight:'500',}}>Get the App</h2>
    <hr className="heading-separator-line mx-auto" style={{backgroundColor:"white",opacity:'1'}}/>
    <p className="lead mb-4" style={{color:'white'}}>
      Download our app! Join over 500,000 people already using Our App.
    </p>
    <div>
      <a
        className="d-inline-flex mx-3 my-2"
        href="https://www.apple.com/in/app-store/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="img-fluid"
          src={appStore}
          alt="Download on the App Store"
          style={{ height: '60px' }}
        />
      </a>
      <a
        className="d-inline-flex mx-3 my-2"
        href="https://play.google.com/store/games"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="img-fluid"
          src={googleStore}
          alt="Get it on Google Play"
          style={{ height: '60px' }}
        />
      </a>
    </div>
  </div>
</div>

  );
};

export default Downloads;





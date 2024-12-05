import React from 'react';

import aboutApp from '../assests/about-app.png';
import appStore from '../assests/app-store.png';
import googleStore from '../assests/google-play-store.png'


const About = () => {
  return (
    <div>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
          <h1 className="text-9 fw-600 text-center">About Our App</h1>
            <hr className="heading-separator-line mx-auto" style={{backgroundColor:"#BE2583",opacity:'1'}}/>
            <p className='lead text-center mb-5'>You can present your app. It is all very easy!</p>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <div className="row align-items-center">
          {/* Adjust column sizes for responsiveness */}
          <div className="col-md-6 col-12 mb-4 mb-md-0 text-center text-md-start">
            <img
              src={aboutApp}
              className="img-fluid"
              alt="About the App"
              style={{ maxWidth: '100%' }}
            />
          </div>
          <div className="col-md-6 col-12">
            <h2>Inspired Design for App Landing</h2>
            <p>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure. Simply dummy text of the printing and
              typesetting industry.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
            <div className="d-flex flex-column flex-md-row pt-2 justify-content-center justify-content-md-start">
              {/* App Store Link */}
              <a
                href="https://www.apple.com/in/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 mb-md-0 me-md-4"
              >
                <img
                  className="img-fluid"
                  src={appStore}
                  alt="Download on the App Store"
                  style={{ maxWidth: '150px' }}
                />
              </a>
              {/* Google Play Store Link */}
              <a
                href="https://play.google.com/store/games"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid"
                  src={googleStore}
                  alt="Get it on Google Play"
                  style={{ maxWidth: '150px' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

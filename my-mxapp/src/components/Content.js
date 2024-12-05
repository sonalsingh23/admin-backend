import React from 'react';
import appImage from '../assests/app-showcase.png';
import appStore from '../assests/app-store.png';
import googleStore from '../assests/google-play-store.png';

const Content = () => {
  return (
    <div className="container-fluid my-auto p-5"
      style={{ backgroundColor: '#faeaf2' }}
    >
      <div className="row my-5 my-lg-0">
        {/* Text Content */}
        <div className="col-lg-6 align-self-center text-center text-lg-start order-1 order-lg-0">
          <h1 className="text-17 fw-600 mb-3">
            Your Mobile <span className="text-primary">App</span> Showcase
          </h1>
          <p className="lead mb-4">
            Create your next mobile app landing page in minutes. Lisque persius interesset his et,
            in quot quidam persequeris vim, ad mea essent possim iriure.
          </p>
          <div className="d-inline-flex pt-2">
            {/* App Store Link */}
            <a
              href="https://www.apple.com/in/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4"
            >
              <img
                className="img-fluid"
                src={appStore}
                alt="Download on the App Store"
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
              />
            </a>
          </div>
        </div>
        {/* Image Content */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 mb-4 mb-lg-0">
          <img className="img-fluid " src={appImage}  style={{marginTop:"40px"}}alt="App Showcase" />
        </div>
      </div>
    </div>
  );
};

export default Content;



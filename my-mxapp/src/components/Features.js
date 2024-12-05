import React from "react";
import { FaPencilRuler, FaCloudUploadAlt, FaTags, FaLock } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import appFeature from '../assests/app-showcase-feature.png'
import { FaSyncAlt } from "react-icons/fa";
import '../assests/Style.css'

const Features = () => {
  return (
    <div className="container">
      {/* Section Header */}
      <h1 className="text-9 fw-600 text-center">App's Features</h1>
      <hr className="heading-separator-line mx-auto" style={{backgroundColor:"#BE2583",opacity:'1'}}/>
      <p className="lead text-center mb-5">
        You can present your app features. It is all very easy!
      </p>

      {/* Features Content */}
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-4 align-self-center">
          <div className="row justify-content-center">
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-12">
              <div className="featured-box featured-box-reverse-xl style-3 ">
                <div className="featured-box-icon bg-body-secondary ">
                  <FaPencilRuler style={{margin:"auto",justifyContent:"center",display:"flex"}}/>
                </div>
                <h3>Exclusive Design</h3>
                <p>
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-6 col-lg-12">
              <div className="featured-box featured-box-reverse-xl style-3 mb-5">
                <div className="featured-box-icon bg-body-secondary text-end">
                  <FaCloudUploadAlt style={{margin:"auto",justifyContent:"center",display:"flex"}}/>
                </div>
                <h3>Your Data in Cloud</h3>
                <p>
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-6 col-lg-12">
              <div className="featured-box featured-box-reverse-xl style-3 mb-5">
                <div className="featured-box-icon bg-body-secondary text-end">
                  <FaTags style={{margin:"auto",justifyContent:"center",display:"flex"}}/>
                </div>
                <h3>Low Pricing</h3>
                <p>
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column (Image) */}
        <div className="col-lg-4 text-center mb-4 mb-xl-0">
          <img alt="App Features" src= {appFeature} className="img-fluid" />
        </div>

        {/* Right Column */}
        <div className="col-lg-4 align-self-center">
          <div className="row justify-content-center">
            {/* Feature 4 */}
            <div className="col-md-6 col-lg-12">
              <div className="featured-box style-3 mb-5">
                <div className="featured-box-icon bg-body-secondary">
                  <FaLock style={{margin:"auto",justifyContent:"center",display:"flex"}}/>
                </div>
                <h3>Fully Secured</h3>
                <p>
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="col-md-6 col-lg-12">
              <div className="featured-box style-3 mb-5">
                <div className="featured-box-icon bg-body-secondary">
                <FaPaperPlane style={{margin:"auto",justifyContent:"center",display:"flex"}}/>
                </div>
                <h3>Easy to Use</h3>
                <p>
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="col-md-6 col-lg-12">
              <div
                className="featured-box style-3 mb-5"
                style={{ borderRadius: "50%" }}
              >
                <div className="featured-box-icon bg-body-secondary text-start">
                <FaSyncAlt style={{margin:"auto",justifyContent:"center",display:"flex"}}/>
                </div>
                <h3>Free Updates</h3>
                <p>
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

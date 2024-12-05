import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assests/app-showcase-feature.png';
import image2 from '../assests/app-showcase.png';
import image3 from '../assests/06.jpg';
import image4 from '../assests/03.jpg';
import '../assests/Screenshot.css'


const Screenshot = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    { image: image1, alt: 'App Screenshot 1' },
    { image: image2, alt: 'App Screenshot 2' },
    { image: image3, alt: 'App Screenshot 3' },
    { image: image4, alt: 'App Screenshot 4' },
    { image: image1, alt: 'App Screenshot 5' },
    { image: image3, alt: 'App Screenshot 6' },
  ];

  return (
    <section id="screenshot" className="section bg-light">
      <div className="container">
        <h2 className="text-9 fw-600 text-center" style={{fontSize:'2.8rem',fontWeight:'500',}}>App Screens</h2>
        <hr className="heading-separator-line mx-auto" style={{backgroundColor:"#BE2583",opacity:'1'}}/>
        <p className="lead text-center mb-4">
          You can present your app screens. It is all very easy!
        </p>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="screen shadow-sm">
              <img className="img-fluid" alt={src.alt} src={src.image} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Screenshot;









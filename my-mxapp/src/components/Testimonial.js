

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assests/Testimonial.css'
import client1 from '../assests/client-sm-1.jpg'
import client2 from '../assests/client-sm-2.jpg'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Remove prev and next arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      quote: "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
      name: "Dennis Jacques",
      country: "Canada",
      image: client1,
    },
    {
      quote: "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
      name: "Chris Tom",
      country: "UK",
      image: client2,
    },
    {
      quote: "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
      name: "Jay Shah",
      country: "India",
      image: client1,
    },
    {
      quote: "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
      name: "Patrick Cary",
      country: "USA",
      image: client2,
    },
  ];

  return (
    <div className="container">
      <h2 className="text-9 fw-600 text-center"style={{fontSize:'2.8rem',fontWeight:'500',}}>What Our Users Say</h2>
      <hr className="heading-separator-line mx-auto" style={{backgroundColor:"#BE2583",opacity:'1'}}/>
      <p className="lead text-center mb-4">
        See what our happy customers say about the app. We're proud of our users!
      </p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="item testimonial border rounded text-center p-4">
              <span className="text-9 text-body-tertiary opacity-2">
              <FaQuoteLeft />
              </span>
              <p>{testimonial.quote}</p>
              <img className="img-fluid d-inline-block w-auto rounded-circle shadow-sm border"
                src={testimonial.image}
                alt={`Photo of ${testimonial.name}`}
              />
              <strong className="d-block fw-500">{testimonial.name}</strong>
              <span className="text-body-tertiary text-2">
                User from {testimonial.country}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;





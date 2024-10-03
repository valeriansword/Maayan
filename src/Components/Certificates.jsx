import React, { useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Certificate.css";
import certificate1 from "../assets/certificate-1.jpg";
import certificate2 from "../assets/certificate-2.jpg";
import certificate3 from "../assets/certificate-3.jpg";
import certificate4 from "../assets/certificate-4.jpg";
import certificate5 from "../assets/certificate-5.jpg";
import certificate6 from "../assets/certificate-6.jpg";
import certificate7 from "../assets/certificate-7.jpg";
import certificate8 from "../assets/certificate-8.jpg";


const Certificates = () => {
  const settings = {
    dots: true,  // Pagination dots
    infinite: true, // Infinite loop
    speed: 1000,    // Transition speed
    slidesToShow: 4,  // Show one image at a time
    slidesToScroll: 1,
    // autoplay: true,  // Enable autoplay
    // autoplaySpeed: 3000,  // Time between transitions
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows:false
        }
      }
    ]}
    const servicesData = [
      {
        
        img: certificate1,
        
           },
      {
        
        img: certificate2,
        
        
            },
      {
       
        img: certificate3,
        
         },
      {
        
        img: certificate4,
        
         },
      {
        
        img: certificate5,
        
         },
      {
        
        img: certificate6,
      
             },
             {
        
              img: certificate7,
      
                   },
                   {
        
                    img: certificate8,
      
                         },
    ];

  return (
    <div className='bg-[#dad7cd]'>
    <div className="container mx-auto py-10 ">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#3a5a40] ">Certificates</h2>
      <div className='w-full flex max-sm:flex-col justify-around px-[20px]'>
    <div className="w-3/4 max-w-4xl mx-auto py-8 max-sm:w-full ">
      
      <Slider {...settings}>
        {servicesData.map((service, index) => (
          <div key={index} className="relative rounded-md">
            <img
              src={service.img}
              alt={service.text}
              className="w-full h-[250px] max-sm:h-[350px] object-fit "
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <p className="text-white text-xl font-bold">{service.text}</p>
            </div> */}
          </div>
        ))}
      </Slider>
      </div>
      
      
    </div>
    </div></div>
  );
};

export default Certificates;

import React, { useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Truck } from "lucide-react";
import {   ArrowDownUp } from "lucide-react";
import { PackageOpen } from "lucide-react";
// import { ChartColumnIncreasing } from "lucide-react";
import { Ship } from "lucide-react";
import {  Plane } from "lucide-react";
import { TrendingUp } from "lucide-react";

import warehouse from "../assets/warehouse.jpg";
import groundShipping from "../assets/GroundShipping.jpg";
import ship from "../assets/ship.jpg"
import logistics from "../assets/logistics.jpg"
import airShipping from "../assets/air1.jpg"
import exportImport from "../assets/export.jpg"


const Certificates = () => {
  const settings = {
    dots: true,  // Pagination dots
    infinite: true, // Infinite loop
    speed: 3000,    // Transition speed
    slidesToShow: 1,  // Show one image at a time
    slidesToScroll: 1,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000,  // Time between transitions
    arrows:false,
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
        }
      }
    ]}
    const servicesData = [
      {
        icon:<PackageOpen />,
        img: warehouse,
        text: "Warehousing",
        description:
          "Secure and organized storage solutions to keep your inventory safe and accessible, tailored to meet your specific needs."
      },
      {
        icon: <Plane />,
        img: airShipping,
        text: "Air Delivery",
        
        description:
          "Fast and reliable air freight services for timely deliveries across the globe, ensuring your shipments arrive on schedule.",
      },
      {
        icon:<Ship />,
        img: ship,
        text: "Sea Delivery",
        description:
          "Cost-effective and efficient sea freight solutions for bulk shipments, providing global reach with dependable transit times."
      },
      {
        icon:<Truck />,
        img: groundShipping,
        text: "Ground Shipping",
        description:
          "Flexible and reliable ground transportation options for domestic and regional deliveries, optimizing your supply chain."
      },
      {
        icon:<ArrowDownUp />,
        img: exportImport,
        text:"Export/Import",
        description:
        "Expert handling of export and import processes, ensuring smooth and compliant international trade operations."
      },
      {
        icon:<TrendingUp />,
        img: logistics,
        text: "Logistics",
        description:
          "Streamlined local logistics services to manage and distribute goods efficiently within your region, enhancing operational efficiency."
      },
    ];

  return (
    <div className='bg-gradient-to-b from-[#dad7cd] to-[#ffffff]'>
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
              className="w-full h-64 object-cover "
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <p className="text-white text-xl font-bold">{service.text}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
      
    </div>
    </div></div>
  );
};

export default Certificates;

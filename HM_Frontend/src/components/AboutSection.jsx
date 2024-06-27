import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AboutSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
        <p className="text-center text-lg mb-10">
          Welcome to [Hotel Name], where luxury meets comfort. Founded in [Year], we have a rich history of providing exceptional service and creating memorable experiences for our guests. Our mission is to make you feel at home while enjoying the finest amenities and services.
        </p>
        <Slider {...settings} className="mx-auto max-w-4xl">
          <div>
            <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hotel Interior" className="w-full h-72 object-cover rounded-md" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hotel Exterior" className="w-full h-72 object-cover rounded-md" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hotel Amenities" className="w-full h-72 object-cover rounded-md" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default AboutSection;

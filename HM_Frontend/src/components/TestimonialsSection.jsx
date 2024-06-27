import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'Mahesh ',
    review: 'The hotel was fantastic! The staff was friendly and the rooms were clean and comfortable.',
    photoUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Basant Meena',
    review: 'I had a wonderful stay. The amenities were top-notch and the location was perfect.',
    photoUrl: 'https://cdn.pixabay.com/photo/2015/11/19/08/52/banner-1050629_1280.jpg',
  },
  {
    id: 3,
    name: 'kamal ',
    review: 'Great experience! The food was delicious and the service was impeccable.',
    photoUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const TestimonialsSection = () => {
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
    <section id="testimonials" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-18">What Our Guests Say</h2>
        <Slider {...settings}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="flex flex-col items-center text-center bg-sky-200 p-6 rounded-lg shadow-md">
              <img
                src={testimonial.photoUrl}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <p className="text-xl font-semibold mb-2">{testimonial.name}</p>
              <p className="text-gray-700">{testimonial.review}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;

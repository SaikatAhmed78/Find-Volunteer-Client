import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Volunteer',
    quote: 'Volunteering with this organization has been a life-changing experience. I have met wonderful people and made a real impact in my community.',
    image: 'https://i.ibb.co.com/WykqzwW/happy-young-man-volunteer-t-shirt-ready-help-smiling-camera-cross-arms-chest-confident-white-backgro.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Beneficiary',
    quote: 'The volunteers were so kind and helpful. They made a significant difference in my life when I needed it the most.',
    image: 'https://i.ibb.co.com/VHgRgp2/close-up-volunteers-with-box.jpg',
  },
  {
    name: 'Michael Lee',
    role: 'Volunteer',
    quote: 'I love being a part of this community. Every event is well-organized, and I always leave feeling fulfilled and happy.',
    image: 'https://i.ibb.co.com/1z645Vd/lifestyle-scene-from-community-showing-care-support-from-people.jpg',
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Testimonials</h2>
      <Slider {...settings} className="container mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-gray-300" />
            </div>
            <FaQuoteLeft className="text-gray-400 text-2xl mb-2 text-center" />
            <p className="text-gray-600 italic mb-4 text-center">{testimonial.quote}</p>
            <FaQuoteRight className="text-gray-400 text-2xl mb-4 text-center" />
            <p className="text-gray-800 font-semibold text-center">{testimonial.name}</p>
            <p className="text-gray-600 text-center">{testimonial.role}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;

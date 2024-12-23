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
    image: 'https://i.ibb.co/WykqzwW/happy-young-man-volunteer-t-shirt-ready-help-smiling-camera-cross-arms-chest-confident-white-backgro.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Beneficiary',
    quote: 'The volunteers were so kind and helpful. They made a significant difference in my life when I needed it the most.',
    image: 'https://i.ibb.co/VHgRgp2/close-up-volunteers-with-box.jpg',
  },
  {
    name: 'Michael Lee',
    role: 'Volunteer',
    quote: 'I love being a part of this community. Every event is well-organized, and I always leave feeling fulfilled and happy.',
    image: 'https://i.ibb.co/1z645Vd/lifestyle-scene-from-community-showing-care-support-from-people.jpg',
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
  };

  return (
    <div className="py-20 px-4 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div className="relative z-10 p-12">
          <h2 className="text-5xl font-extrabold text-white mb-10 text-center">What People Say</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center px-4">
                <div className="flex flex-col items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-28 h-28 rounded-full border-4 border-white shadow-lg mb-4" />
                </div>
                <FaQuoteLeft className="text-white text-5xl opacity-50 mb-4" />
                <p className="text-lg text-white italic leading-relaxed max-w-2xl mx-auto">{testimonial.quote}</p>
                <FaQuoteRight className="text-white text-5xl opacity-50 mt-4" />
                <p className="text-2xl font-semibold text-white mt-6">{testimonial.name}</p>
                <p className="text-md text-gray-300">{testimonial.role}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

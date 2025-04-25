import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

const TestimonialsStatic = () => {
  return (
    <div className="py-20 px-6 my-10 mb-12 rounded-xl flex flex-col items-center justify-center mt-10">
      <h2 className="text-5xl font-extrabold text-lime-500  mb-16 tracking-widest text-center">What People Say</h2>
      <motion.div
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-32 h-32 rounded-full border-4 border-teal-300 shadow-lg mb-4 transform transition-all duration-300 hover:scale-110"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <FaQuoteLeft className="text-teal-500 text-4xl mb-4" />
            <p className="text-gray-700 text-lg italic leading-relaxed px-4 mb-4">
              {testimonial.quote}
            </p>
            <FaQuoteRight className="text-teal-500 text-4xl mt-4" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">{testimonial.name}</h3>
            <p className="text-md text-teal-600 font-semibold">{testimonial.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsStatic;

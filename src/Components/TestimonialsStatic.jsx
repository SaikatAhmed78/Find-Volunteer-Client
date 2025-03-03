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
    <div className="py-20 px-6 mb-10 rounded-xl flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      <h2 className="text-5xl font-extrabold text-white mb-16">What People Say</h2>
      <motion.div
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md mb-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <FaQuoteLeft className="text-gray-500 text-3xl mb-3" />
            <p className="text-gray-700 text-lg italic leading-relaxed">
              {testimonial.quote}
            </p>
            <FaQuoteRight className="text-gray-500 text-3xl mt-3" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              {testimonial.name}
            </h3>
            <p className="text-md text-gray-500">{testimonial.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsStatic;

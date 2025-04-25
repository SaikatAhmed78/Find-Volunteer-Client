import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const events = [
  {
    title: "Beach Cleanup",
    date: "2026-12-24",
    location: "Santa Monica Beach",
    description:
      "Join us for a beach cleanup event to help remove trash and protect our beautiful beach environment.",
  },
  {
    title: "Food Drive",
    date: "2026-01-15",
    location: "Community Center",
    description:
      "Help us collect food donations and distribute them to families in need during this important food drive.",
  },
  {
    title: "Tree Planting",
    date: "2026-02-10",
    location: "City Park",
    description:
      "Come join us for a tree planting event and contribute to making our community greener and more sustainable.",
  },
];

const EventHighlights = () => {
  return (
    <div className="container mx-auto px-6 py-12 mt-10">
      <h2 className="text-4xl font-extrabold text-center text-lime-500  mb-6 uppercase tracking-wide">
        Upcoming Volunteer Events
      </h2>
      <p className="text-lg text-center text-blue-600 mb-10">
        Explore our upcoming events and find an opportunity to make a positive impact in your community.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="bg-white text-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-center mb-3">{event.title}</h3>
            <div className="flex items-center justify-center gap-2 text-md font-medium text-gray-700">
              <FaCalendarAlt className="text-blue-500" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-md font-medium text-gray-700 my-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span>{event.location}</span>
            </div>
            <p className="text-sm text-center leading-relaxed">
              {event.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventHighlights;

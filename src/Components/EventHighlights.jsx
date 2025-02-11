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
    <div className="container mx-auto px-6 py-12 my-10">
      <h2 className="text-4xl font-extrabold text-center text-lime-500 mb-12 uppercase tracking-wide">
        Upcoming Volunteer Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-4">{event.title}</h3>
            <div className="flex items-center justify-center gap-3 text-lg font-medium">
              <FaCalendarAlt className="text-yellow-300" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg font-medium my-4">
              <FaMapMarkerAlt className="text-green-300" />
              <span>{event.location}</span>
            </div>
            <p className="text-sm text-center opacity-90 leading-relaxed">
              {event.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventHighlights;

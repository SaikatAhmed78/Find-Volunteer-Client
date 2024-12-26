import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const events = [
  {
    title: 'Beach Cleanup',
    date: '2023-12-24',
    location: 'Santa Monica Beach',
    description: 'Join us for a beach cleanup event to help remove trash and protect our beautiful beach environment.',
  },
  {
    title: 'Food Drive',
    date: '2024-01-15',
    location: 'Community Center',
    description: 'Help us collect food donations and distribute them to families in need during this important food drive.',
  },
  {
    title: 'Tree Planting',
    date: '2024-02-10',
    location: 'City Park',
    description: 'Come join us for a tree planting event and contribute to making our community greener and more sustainable.',
  },
];

const EventHighlights = () => {
  return (
    <div className="container mt-12 mb-12 mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-lime-400 mb-6 text-center">Explore Upcoming Volunteer Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-semibold text-indigo-700 mb-2 text-center">{event.title}</h3>
            <div className="flex justify-center items-center text-lg font-medium text-gray-600 my-2 space-x-3">
              <FaCalendarAlt className="text-indigo-500" />
              <span>{event.date}</span>
            </div>
            <div className="flex justify-center items-center text-lg font-medium text-gray-600 mb-4 space-x-3">
              <FaMapMarkerAlt className="text-green-500" />
              <span>{event.location}</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm mb-4">
              {event.description}
            </p>
            <div className="text-center">
              <button className="px-6 py-2 bg-teal-500 text-white text-lg font-semibold rounded-full shadow-lg transition-all hover:bg-teal-400 hover:scale-105">
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHighlights;

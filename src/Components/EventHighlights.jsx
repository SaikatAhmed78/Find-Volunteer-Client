import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';


const events = [
  {
    title: 'Beach Cleanup',
    date: '2023-12-24',
    location: 'Santa Monica Beach',
    description: 'Join us for a beach cleanup event. Help keep our beaches clean and beautiful!',
    image: 'https://i.ibb.co.com/DY8WcWL/KPMG-Shoreline-Cleanup-June-3-2023.png',
},
{
    title: 'Food Drive',
    date: '2024-01-15',
    location: 'Community Center',
    description: 'Help us collect and distribute food to those in need. Volunteers are needed for sorting and packing.',
    image: 'https://i.ibb.co.com/3p00mjF/smiley-female-volunteer-holding-box-with-food-donations.jpg',
},
{
    title: 'Tree Planting',
    date: '2024-02-10',
    location: 'City Park',
    description: 'Participate in our tree planting event to make our city greener. No experience needed!',
    image: 'https://i.ibb.co.com/fqkQcdz/volunteers-little-kid-planting-tree-covering-hole-ground.jpg',
  },
];

const EventHighlights = () => {
  return (
    <div className="container mt-12 mb-12 mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Event Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
              <div className="flex items-center text-gray-600 my-2">
                <FaCalendarAlt className="mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <FaMapMarkerAlt className="mr-2" />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHighlights;

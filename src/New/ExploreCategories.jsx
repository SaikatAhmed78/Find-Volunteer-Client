import React from 'react';
import { FaTree, FaHandsHelping, FaHeartbeat, FaBookReader } from 'react-icons/fa';

const categories = [
  {
    id: 1,
    icon: <FaTree className="text-green-600 w-10 h-10" />,
    title: 'Environment',
    desc: 'Tree plantation, clean-up drives & eco-awareness.',
  },
  {
    id: 2,
    icon: <FaHandsHelping className="text-yellow-500 w-10 h-10" />,
    title: 'Community Support',
    desc: 'Distribute food, help the homeless, support NGOs.',
  },
  {
    id: 3,
    icon: <FaHeartbeat className="text-red-500 w-10 h-10" />,
    title: 'Healthcare',
    desc: 'Blood donation, first-aid camps, health awareness.',
  },
  {
    id: 4,
    icon: <FaBookReader className="text-blue-500 w-10 h-10" />,
    title: 'Education',
    desc: 'Teach underprivileged children or help in schools.',
  },
];

const ExploreCategories = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">Explore Volunteer Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">{cat.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;

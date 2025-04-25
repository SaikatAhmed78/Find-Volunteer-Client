// VolunteerImpactStats.jsx
import React from 'react';
import CountUp from 'react-countup';
import { Users, Clock, Globe, Calendar } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: <Users className="w-8 h-8 text-green-600" />,
    value: 1200,
    label: 'Active Volunteers',
  },
  {
    id: 2,
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    value: 8500,
    label: 'Hours Contributed',
  },
  {
    id: 3,
    icon: <Globe className="w-8 h-8 text-orange-500" />,
    value: 35,
    label: 'Regions Covered',
  },
  {
    id: 4,
    icon: <Calendar className="w-8 h-8 text-purple-600" />,
    value: 180,
    label: 'Events Completed',
  },
];

const VolunteerImpactStats = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Our Impact So Far</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-extrabold text-green-600 dark:text-green-400">
                <CountUp end={stat.value} duration={2.5} />+
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerImpactStats;

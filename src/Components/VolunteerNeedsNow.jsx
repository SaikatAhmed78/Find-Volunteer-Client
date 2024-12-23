import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const VolunteerNeedsNow = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchVolunteerNeeds();
  }, []);

  const fetchVolunteerNeeds = async () => {
    try {
      const response = await axios.get('http://localhost:5000/volunteer-needs-now');
      setPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch volunteer needs', error);
    }
  };

  const handleViewAll = () => {
    navigate('/allosts');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-lime-500">Volunteer Needs Now</h2>
      <p className="text-center text-blue-600 mb-8 max-w-2xl mx-auto">
        Explore the most urgent volunteer opportunities that need your help today. Make a difference by contributing your time and skills.
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div key={post._id} className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={post.thumbnail} alt={post.postTitle} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{post.postTitle}</h3>
              <p className="text-gray-600 mb-1">Category: <span className="text-blue-500">{post.category}</span></p>
              <p className="text-gray-600">Deadline: {new Date(post.deadline).toLocaleDateString()}</p>
              <Link to={`/postDetails/${post._id}`} className="block bg-blue-600 hover:bg-blue-800 text-white font-semibold text-center py-2 px-4 rounded-full mt-4">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      {posts.length > 0 && (
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAll} 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
            View All Posts
          </button>
        </div>
      )}
    </div>
  );
};

export default VolunteerNeedsNow;

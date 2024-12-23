import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VolunteerNeedsNow = () => {
  const [posts, setPosts] = useState([]);

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Volunteer Needs Now</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div key={post._id} className="bg-white shadow-md rounded-lg p-4">
            <img src={post.thumbnail} alt={post.postTitle} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">{post.postTitle}</h3>
            <p className="text-gray-700 mb-2">Category: {post.category}</p>
            <p className="text-gray-700 mb-2">Deadline: {new Date(post.deadline).toLocaleDateString()}</p>
            <Link to={`/post/${post._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block mt-4">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerNeedsNow;

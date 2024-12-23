import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchPosts();
  }, [search]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/volunteer-needs', {
        params: { title: search }
      });
      setPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch posts', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-extrabold mb-4 text-blue-500 text-center">All Volunteer Need Posts</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div key={post._id} className="bg-white shadow-md rounded-lg p-4">
            <img src={post.thumbnail} alt={post.postTitle} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">{post.postTitle}</h3>
            <p className="text-gray-700 mb-2">Category: {post.category}</p>
            <p className="text-gray-700 mb-2">Location: {post.location}</p>
            <p className="text-gray-700 mb-2">Volunteers Needed: {post.volunteersNeeded}</p>
            <Link to={`/postDetails/${post._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block mt-4">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;

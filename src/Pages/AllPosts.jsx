import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaTable, FaTh } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
// http://localhost:5000/volunteer-needss
const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [isTableView, setIsTableView] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [search]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/volunteer-needss', {
        params: { title: search }
      });
      setPosts(response.data);
    } catch (error) {
      console.error('Failed to fetch posts', error);
    }
  };

  const toggleLayout = () => {
    setIsTableView(!isTableView);
  };

  return (
    <>
      <Helmet>
        <title>All Post </title>
      </Helmet>
      <div className="container mx-auto px-4 py-8 mt-32">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">All Volunteer Need Posts</h2>
        <div className="mb-6 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by title"
            className="shadow appearance-none border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full max-w-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={toggleLayout}
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
          >
            {isTableView ? <><FaTh className="mr-2" /> Grid View</> : <><FaTable className="mr-2" /> Table View</>}
          </button>
        </div>

        {isTableView ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-blue-100">
                <tr>
                  <th className="py-3 px-4 border-b">Thumbnail</th>
                  <th className="py-3 px-4 border-b">Post Title</th>
                  <th className="py-3 px-4 border-b">Category</th>
                  <th className="py-3 px-4 border-b">Location</th>
                  <th className="py-3 px-4 border-b">Volunteers Needed</th>
                  <th className="py-3 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(post => (
                  <tr key={post._id} className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b">
                      <img src={post.thumbnail} alt={post.postTitle} className="w-24 h-24 object-cover rounded-md" />
                    </td>
                    <td className="py-3 px-4 border-b">{post.postTitle}</td>
                    <td className="py-3 px-4 border-b">{post.category}</td>
                    <td className="py-3 px-4 border-b">{post.location}</td>
                    <td className="py-3 px-4 border-b">{post.volunteersNeeded}</td>
                    <td className="py-3 px-4 border-b">
                      <Link to={`/postDetails/${post._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
              <div key={post._id} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
                <img src={post.thumbnail} alt={post.postTitle} className="w-full h-56 object-cover rounded-xl mb-6" />
                <h3 className="text-2xl font-semibold mb-3">{post.postTitle}</h3>
                <p className="text-gray-600 mb-3">Category: <span className="text-blue-500">{post.category}</span></p>
                <p className="text-gray-600 mb-3">Location: <span className="text-blue-500">{post.location}</span></p>
                <p className="text-gray-600 mb-3">Volunteers Needed: <span className="text-blue-500">{post.volunteersNeeded}</span></p>
                <Link to={`/postDetails/${post._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block mt-6">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllPosts;
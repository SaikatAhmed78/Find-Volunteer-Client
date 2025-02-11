import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthContext from '../Context/AuthContext';
import backgroundImage from '../../src/assets/banner/flat-lay-composition-still-life-friendship-day-elements.jpg';
import { Helmet } from 'react-helmet-async';

const RequestVolunteer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state || {};
  const { user } = useContext(AuthContext);

  const [suggestion, setSuggestion] = useState('');

  if (!post) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-red-500">Invalid Access</h1>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      postId: post._id,
      thumbnail: post.thumbnail,
      postTitle: post.postTitle,
      description: post.description,
      location: post.location,
      category: post.category,
      deadline: post.deadline,
      volunteersNeeded: post.volunteersNeeded,
      organizer: post.organizerName,
      volunteerName: user.name,
      volunteerEmail: user.email,
      suggestion,
      status: 'requested',
    };

    try {
      await axios.post('http://localhost:5000/request-volunteer', requestData);
      Swal.fire('Success', 'Your request has been submitted!', 'success');
      navigate('/');
    } catch (error) {
      Swal.fire('Error', 'Failed to submit request', 'error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Request Volunteer</title>
      </Helmet>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center rounded-e-lg py-12 px-4 xl:px-6 lg:px-8 mt-32 rounded-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="max-w-4xl w-full p-10 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">Request to Volunteer</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xl font-bold text-gray-700">Post Title</label>
                <input
                  type="text"
                  value={post.postTitle}
                  readOnly
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-xl font-bold text-gray-700">Organizer</label>
                <input
                  type="text"
                  value={post.organizerName}
                  readOnly
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-xl font-bold text-gray-700">Thumbnail</label>
                <input
                  type="text"
                  value={post.thumbnail}
                  readOnly
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-xl font-bold text-gray-700">Category</label>
                <input
                  type="text"
                  value={post.category}
                  readOnly
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-xl font-bold text-gray-700">Volunteers Needed</label>
                <input
                  type="text"
                  value={post.volunteersNeeded}
                  readOnly
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-xl font-bold text-gray-700">Location</label>
                <input
                  type="text"
                  value={post.location}
                  readOnly
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-xl font-bold text-gray-700">Deadline</label>
                <input
                  type="text"
                  value={new Date(post.deadline).toLocaleDateString()}
                  readOnly
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-xl font-bold text-gray-700">Your Suggestion</label>
              <textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-green-300"
                rows="5"
              ></textarea>
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RequestVolunteer;

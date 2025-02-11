import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthContext from '../Context/AuthContext';
import { Helmet } from 'react-helmet-async';
import { FaTrash, FaEdit } from 'react-icons/fa';

const ManagePosts = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [volunteerNeedPosts, setVolunteerNeedPosts] = useState([]);
  const [volunteerRequestPosts, setVolunteerRequestPosts] = useState([]);

  useEffect(() => {
    const fetchVolunteerNeedPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/volunteer-needs?organizer=${user.email}`);
        setVolunteerNeedPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchVolunteerNeedPosts();
  }, [user.email]);

  useEffect(() => {
    const fetchVolunteerRequestPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/volunteer-requests?volunteerEmail=${user.email}`);
        setVolunteerRequestPosts(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };
    fetchVolunteerRequestPosts();
  }, [user.email]);

  const handleDelete = async (postId) => {
    Swal.fire({
      title: 'Delete Post?',
      text: 'Are you sure you want to delete this post?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/volunteer-needs/${postId}`);
          Swal.fire('Deleted!', 'Your post has been deleted.', 'success');
          setVolunteerNeedPosts(volunteerNeedPosts.filter(post => post._id !== postId));
        } catch (error) {
          Swal.fire('Error!', 'Failed to delete the post.', 'error');
        }
      }
    });
  };

  const handleCancelRequest = async (requestId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to cancel your "Be a Volunteer Request"?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/volunteer-requests/${requestId}`);
          Swal.fire('Cancelled!', 'Your "Be a Volunteer Request" has been cancelled.', 'success');
          setVolunteerRequestPosts(volunteerRequestPosts.filter(request => request._id !== requestId));
        } catch (error) {
          Swal.fire('Error!', 'Failed to cancel the request.', 'error');
        }
      }
    });
  };


  return (
    <>
      <Helmet>
        <title>Manage My Posts</title>
      </Helmet>

      <div className="max-w-6xl mx-auto py-12 px-6 mt-32">
        <h1 className="text-5xl font-bold text-center text-indigo-700 mb-12">Manage My Posts</h1>

        <section className="mb-16">
          <h2 className="text-3xl text-center text-lime-500 font-semibold mb-8">Volunteer Need Posts: {volunteerNeedPosts.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerNeedPosts.length === 0 ? (
              <p className="text-2xl font-semibold text-red-600">No posts available..!</p>
            ) : (
              volunteerNeedPosts.map(post => (
                <div key={post._id} className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{post.postTitle}</h3>
                  <p className="text-gray-700 mb-4">Category: {post.category}</p>
                  <p className="text-gray-600 mb-6">Deadline: {new Date(post.deadline).toLocaleDateString()}</p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => navigate(`/update-post/${post._id}`)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center"
                    >
                      <FaEdit className="mr-2" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center"
                    >
                      <FaTrash className="mr-2" /> Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <section>
          <h2 className="text-3xl text-center text-lime-600 font-semibold mb-8">Volunteer Requests: {volunteerRequestPosts.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerRequestPosts.length === 0 ? (
              <p className="text-2xl font-semibold text-red-600">No requests made yet.</p>
            ) : (
              volunteerRequestPosts.map(request => (
                <div key={request._id} className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{request.postTitle}</h3>
                  <p className="text-gray-700 mb-4">Status: {request.status}</p>
                  <p className="text-gray-700 mb-4">Category: {request.category}</p>
                  <p className="text-gray-600 mb-4">Description: {request.description}</p>
                  <button
                    onClick={() => handleCancelRequest(request._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg w-full"
                  >
                    Cancel Request
                  </button>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ManagePosts;

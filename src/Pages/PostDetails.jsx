import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { FaMapMarkerAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PostDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    fetchPostDetails();
  }, [id]);

  const fetchPostDetails = async () => {
    try {
      const { data } = await axios.get(`https://assingment11-lemon.vercel.app/volunteer-needs/${id}`);
      setPost(data);
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to load post details. Please try again later.',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBeVolunteer = (id) => {
    if (post?.volunteersNeeded > 0) {
      navigate(`/request-volunteer/${id}`, { state: { post } });
    } else {
      Swal.fire({
        title: 'No Slots Available!',
        text: 'All volunteer slots for this post are already filled.',
        icon: 'info',
        confirmButtonText: 'OK'
      }).then(() => {
        setIsButtonDisabled(true);
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-32">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-indigo-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold text-red-500">Post Not Found</h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen"
    >
      <Helmet>
        <title>Post Details</title>
      </Helmet>
      <div className="container mx-auto py-16 px-4 mt-32">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex md:space-x-6">
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img
              src={post?.thumbnail}
              alt="Event"
              className="w-full h-full object-cover rounded-lg transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-4xl font-bold text-indigo-700 mb-6">{post?.postTitle}</h1>
            <div className="flex items-center text-lg text-gray-600 mb-4">
              <FaMapMarkerAlt className="text-red-400 mr-3" />
              <span>{post?.location}</span>
            </div>
            <div className="flex items-center text-lg text-gray-600 mb-4">
              <FaUsers className="text-blue-400 mr-3" />
              <span>{post?.volunteersNeeded} Volunteers Needed</span>
            </div>
            <div className="flex items-center text-lg text-gray-600 mb-6">
              <FaCalendarAlt className="text-green-400 mr-3" />
              <span>Deadline: {new Date(post?.deadline).toLocaleDateString()}</span>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed">{post?.description}</p>
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleBeVolunteer(post._id)}
              className={`${isButtonDisabled
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700'
                } text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md`}
              disabled={isButtonDisabled}
            >
              Be a Volunteer
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PostDetails;

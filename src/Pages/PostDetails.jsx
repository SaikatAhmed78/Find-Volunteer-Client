import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { FaMapMarkerAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const PostDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPostDetails();
  }, [id]);

  const fetchPostDetails = async () => {
    try {
      const {data} = await axios.get(`http://localhost:5000/volunteer-needs/${id}`);
      setPost(data);
    } catch (error) {
      console.error('Failed to fetch post details', error);
    }
  };

  const handleBeVolunteer = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    Swal.fire({
      title: 'Success!',
      text: 'You have volunteered successfully!',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={post?.thumbnail}  className="w-full h-96 object-cover" />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">{post?.postTitle}</h2>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">{post?.location}</span>
          </div>
          <div className="flex items-center mb-4">
            <FaUsers className="text-gray-500 mr-2" />
            <span className="text-gray-700">{post?.volunteersNeeded} Volunteers Needed</span>
          </div>
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">Deadline: {new Date(post?.deadline).toLocaleDateString()}</span>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Description</h3>
            <p className="text-gray-700">{post?.description}</p>
          </div>
          <button
            onClick={handleBeVolunteer}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Be a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

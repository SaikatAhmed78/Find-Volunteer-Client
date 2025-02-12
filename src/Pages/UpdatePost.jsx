import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    thumbnail: '',
    postTitle: '',
    description: '',
    category: '',
    location: '',
    volunteersNeeded: '',
    deadline: new Date(),
    organizerName: '',
    organizerEmail: '',
  });

  useEffect(() => {
    axios.get(`https://edu-connect-server-five.vercel.app/volunteer-needs/${id}`)
      .then(res => {
        const { thumbnail, postTitle, description, category, location, volunteersNeeded, deadline, organizerName, organizerEmail } = res.data;
        setPostData({
          thumbnail,
          postTitle,
          description,
          category,
          location,
          volunteersNeeded,
          deadline: new Date(deadline),
          organizerName,
          organizerEmail,
        });
      })
      .catch(err => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to fetch post data',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        console.error(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://edu-connect-server-five.vercel.app/volunteer-needs/${id}`, postData)
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Post updated successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        navigate('/managePost');
      })
      .catch(err => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update post',
          icon: 'error',
          confirmButtonText: 'Try Later',
        });
        console.error(err);
      });
  };


  return (
    <div className="max-w-4xl mx-auto p-8 shadow-lg mt-12 bg-white rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Update Volunteer Need Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Thumbnail</label>
          <input
            type="text"
            value={postData.thumbnail}
            onChange={(e) => setPostData({ ...postData, thumbnail: e.target.value })}
            placeholder="Thumbnail URL"
            className="w-full p-3 border rounded-lg bg-gray-100"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Post Title</label>
          <input
            type="text"
            value={postData.postTitle}
            onChange={(e) => setPostData({ ...postData, postTitle: e.target.value })}
            placeholder="Post Title"
            className="w-full p-3 border rounded-lg bg-gray-100"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Description</label>
          <textarea
            value={postData.description}
            onChange={(e) => setPostData({ ...postData, description: e.target.value })}
            placeholder="Description"
            className="w-full p-3 border rounded-lg bg-gray-100"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Category</label>
          <select
            value={postData.category}
            onChange={(e) => setPostData({ ...postData, category: e.target.value })}
            className="w-full p-3 border rounded-lg bg-gray-100"
            required
          >
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social_service">Social Service</option>
            <option value="animal_welfare">Animal Welfare</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Location</label>
          <input
            type="text"
            value={postData.location}
            onChange={(e) => setPostData({ ...postData, location: e.target.value })}
            placeholder="Location"
            className="w-full p-3 border rounded-lg bg-gray-100"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Number of Volunteers Needed</label>
          <input
            type="number"
            value={postData.volunteersNeeded}
            onChange={(e) => setPostData({ ...postData, volunteersNeeded: Number(e.target.value) })}
            placeholder="Number of Volunteers Needed"
            className="w-full p-3 border rounded-lg bg-gray-100"
            required
          />

        </div>
        <div>
          <label className="block mb-2">Deadline</label>
          <DatePicker
            selected={postData.deadline}
            onChange={(date) => setPostData({ ...postData, deadline: date })}
            placeholderText="Select Deadline"
            className="w-full p-3 border rounded-lg bg-gray-100"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Organizer Name</label>
          <input
            type="text"
            value={postData.organizerName}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2">Organizer Email</label>
          <input
            type="text"
            value={postData.organizerEmail}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100"
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;

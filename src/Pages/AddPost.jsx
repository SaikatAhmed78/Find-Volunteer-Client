import React, { useContext, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import AuthContext from '../Context/AuthContext';
import formImg from '../../src/assets/banner/diversity-equity-inclusion-concept-kids_916191-84362.jpg'
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(null);
  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();

    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const postTitle = form.postTitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNeeded = parseInt(form.volunteersNeeded.value);

    if (!thumbnail || !postTitle || !description || !category || !location || !volunteersNeeded || !startDate) {
      Swal.fire({
        title: "Error!",
        text: "All fields are required.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const postData = {
      thumbnail,
      postTitle,
      description: description.split("\n").map((item) => item.trim()),
      category,
      location,
      volunteersNeeded,
      deadline: startDate.toISOString(),
      organizerName: user.displayName,
      organizerEmail: user.email,
    };

    try {
      await axios.post('http://localhost:5000/add-volunteer', postData);
      Swal.fire({
        title: "Success!",
        text: "Volunteer need post has been added successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      form.reset();
      setStartDate(null);
      navigate('/allPosts')
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to add post. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Add Post</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8 relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${formImg})`,
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto  p-10 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">Add Volunteer Need Post</h2>
          <form onSubmit={handlePost} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-800 font-medium mb-2" htmlFor="thumbnail">Thumbnail</label>
              <input className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" id="thumbnail" type="text" placeholder="Thumbnail URL" name="thumbnail" />
            </div>
            <div>
              <label className="block text-gray-800 font-medium mb-2" htmlFor="postTitle">Post Title</label>
              <input className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" id="postTitle" type="text" placeholder="Post Title" name="postTitle" />
            </div>
            <div>
              <label className="block text-gray-800 font-medium mb-2" htmlFor="category">Category</label>
              <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" id="category" name="category">
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="social_service">Social Service</option>
                <option value="animal_welfare">Animal Welfare</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-800 font-medium mb-2" htmlFor="location">Location</label>
              <input className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" id="location" type="text" placeholder="Location" name="location" />
            </div>
            <div>
              <label className="block text-gray-800 font-medium mb-2" htmlFor="volunteersNeeded">No. of Volunteers Needed</label>
              <input className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" id="volunteersNeeded" type="number" placeholder="No. of Volunteers Needed" name="volunteersNeeded" />
            </div>
            <div>
              <label className="block text-gray-800 font-medium mb-2" htmlFor="deadline">Deadline</label>
              <ReactDatePicker className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholderText="Select date" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-800 font-medium mb-2" htmlFor="description">Description</label>
              <textarea className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" id="description" placeholder="Description" name="description"></textarea>
            </div>
            <div className="col-span-2 flex justify-end">
              <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg" type="submit">Add Post</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );

};

export default AddPost;

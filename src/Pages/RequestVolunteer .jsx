import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const RequestVolunteer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state || {};
  const [suggestion, setSuggestion] = React.useState('');

//   if (!post) {
//     return (
//       <div className="text-center mt-20">
//         <h1 className="text-3xl font-bold text-red-500">Invalid Access</h1>
//       </div>
//     );
//   }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      postId: post._id,
      thumbnail: post.thumbnail,
      postTitle: post.postTitle,
      description: post.description,
      location: post.location,
      deadline: post.deadline,
      volunteersNeeded: post.volunteersNeeded,
      organizer: post.organizerName,
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
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg mt-12 rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Request to Volunteer</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">Post Title</label>
            <input
              type="text"
              value={post.postTitle}
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <label className="block mb-2">Organizer</label>
            <input
              type="text"
              value={post.organizer?.name}
              readOnly
              className="w-full p-3 border rounded-lg bg-gray-100"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block mb-2">Location</label>
          <input
            type="text"
            value={post.location}
            readOnly
            className="w-full p-3 border rounded-lg bg-gray-100"
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2">Your Suggestion</label>
          <textarea
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            className="w-full p-3 border rounded-lg"
          ></textarea>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestVolunteer;

import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';



const SocialLogin = () => {
  const { signInWithGoogle, signinWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        Swal.fire({
          title: 'Success!',
          text: 'Logged in with Google successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          navigate('/');
        });
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to log in with Google!',
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      });
  };



  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-3"
      >
        <FaGoogle className="text-red-500 mr-2" size={24} />
        <span className="text-gray-700 font-semibold">Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;

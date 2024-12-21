import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaSignInAlt, FaPlus, FaListAlt } from 'react-icons/fa';
import Logo from '../../src/assets/logo/360_F_272398712_z28EMWLbM9Y8zojg51tLZo4D8Ju3R7EG.jpg'
import AuthContext from '../Providers/AuthProvider';
import { useContext } from 'react';

const Navbar = () => {
  // const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-white text-2xl font-bold">
          <img src={Logo} alt="" className="w-10 h-10 mr-2" />
          Be The Change
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-white text-lg">Home</Link>
          <Link to="/posts" className="text-white text-lg">All Volunteer Posts</Link>

          {/* {user ? (
            <div className="relative group">
              <img
                src={user?.photoURL}
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
                <p className="px-4 py-2 text-gray-800">{user?.displayName}</p>
                <Link to="/add-post" className="block px-4 py-2 text-gray-800 flex items-center">
                  <FaPlus className="mr-2" /> Add Volunteer Post
                </Link>
                <Link to="/manage-posts" className="block px-4 py-2 text-gray-800 flex items-center">
                  <FaListAlt className="mr-2" /> Manage My Posts
                </Link>
                <button onClick={logout} className="block w-full text-left px-4 py-2 text-gray-800 flex items-center">
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="bg-white text-red-500 font-bold px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-110 flex items-center">
              <FaSignInAlt className="mr-2" /> Login
            </Link>
          )} */}
        </div>
        
        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

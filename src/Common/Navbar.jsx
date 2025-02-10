import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaSignInAlt, FaPlus, FaListAlt, FaHome, FaClipboardList, FaBars } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import Logo from '../../src/assets/logo/360_F_272398712_z28EMWLbM9Y8zojg51tLZo4D8Ju3R7EG.jpg';
import ThemeToggle from '../Components/ThemeToggle';
import AuthContext from '../Context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!user && localStorage.getItem('user')) {
      logout();
      navigate('/login');
    }
  }, [user, logout, navigate]);

  return (
    <div className="navbar bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl dark:bg-gray-900 w-full px-4 md:px-6 py-3 mb-4">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center text-white text-2xl font-extrabold dark:text-gray-200">
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full mr-2" />
          <span className="text-3xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400 drop-shadow-lg">Be The Change</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white text-lg font-semibold hover:scale-105 transition-all dark:text-gray-200">Home</Link>
          <Link to="/allPosts" className="text-white text-lg font-semibold hover:scale-105 transition-all dark:text-gray-200">All Posts</Link>
          <Link to="/aboutUs" className="text-white text-lg font-semibold hover:scale-105 transition-all dark:text-gray-200">About Us</Link>
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar cursor-pointer">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} alt="User Avatar" className="w-full h-full rounded-full" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-gray-800 rounded-box w-52 dark:bg-gray-800 dark:text-gray-200">
                <li className="font-semibold text-lg">
                  <span>{user?.displayName}</span>
                </li>
                <li><Link to="/addPost">Add a New Post</Link></li>
                <li><Link to="/managePost">Manage Your Posts</Link></li>
                <li>
                  <button onClick={logout} className="text-sm">Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="px-3 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all text-sm flex items-center">
              <FaSignInAlt className="mr-2" /> Login
            </Link>
          )}
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl dark:text-gray-200">
            <FaBars />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl dark:bg-gray-900 p-4">
          <ul className="flex flex-col space-y-3">
            <li><Link to="/" className="block text-white py-2 text-lg dark:text-gray-200">Home</Link></li>
            <li><Link to="/allPosts" className="block text-white py-2 text-lg dark:text-gray-200">All Posts</Link></li>
            <li><Link to="/aboutUs" className="block text-white py-2 text-lg dark:text-gray-200">About Us</Link></li>
            {user ? (
              <>
                <li><Link to="/addPost" className="block text-white py-2 text-lg dark:text-gray-200">Add a New Post</Link></li>
                <li><Link to="/managePost" className="block text-white py-2 text-lg dark:text-gray-200">Manage Your Posts</Link></li>
                <li>
                  <button onClick={logout} className="block text-white py-2 text-lg dark:text-gray-200">Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="block text-white py-2 text-lg dark:text-gray-200">Login</Link>
              </li>
            )}
          </ul>
          <ThemeToggle />
        </div>
      )}
    </div>
  );
};

export default Navbar;

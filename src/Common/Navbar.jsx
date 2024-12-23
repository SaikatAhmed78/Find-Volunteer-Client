import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaSignInAlt, FaPlus, FaListAlt, FaHome, FaClipboardList } from 'react-icons/fa';
import { useContext, useEffect } from 'react';
import Logo from '../../src/assets/logo/360_F_272398712_z28EMWLbM9Y8zojg51tLZo4D8Ju3R7EG.jpg';
import ThemeToggle from '../Components/ThemeToggle';
import AuthContext from '../Context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

 
  useEffect(() => {
    if (!user && localStorage.getItem('user')) {
      logout();  
      navigate('/login'); 
    }
  }, [user, logout, navigate]);

  return (
    <div className="navbar mb-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl dark:bg-gray-900">
      <div className="flex-1">
        <Link to="/" className="flex items-center text-white text-3xl font-extrabold">
          <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full mr-2" />
          Be The Change
        </Link>
      </div>
      <div className="flex-none hidden md:flex items-center space-x-6">
        <Link to="/" className="flex items-center text-white text-lg font-semibold hover:scale-105 transition-all">
          <FaHome className="mr-2" /> Home
        </Link>
        <Link to="/allPosts" className="flex items-center text-white text-lg font-semibold hover:scale-105 transition-all">
          <FaClipboardList className="mr-2" /> All Posts
        </Link>
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="avatar cursor-pointer">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} alt="User Avatar" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-white rounded-box w-52 dark:bg-gray-800"
            >
              <li>
                <span className="justify-between font-semibold text-lg">
                  {user?.displayName}
                </span>
              </li>
              <li>
                <Link to="/addPost" className="flex items-center text-sm">
                  <FaPlus className="mr-2" /> Add a New Post
                </Link>
              </li>
              <li>
                <Link to="/managePost" className="flex items-center text-sm">
                  <FaListAlt className="mr-2" /> Manage Your Posts
                </Link>
              </li>
              <li>
                <button onClick={logout} className="flex items-center text-sm">
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary flex items-center px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <FaSignInAlt className="mr-2" /> Login
          </Link>
        )}
        <ThemeToggle />
      </div>

      <div className="md:hidden flex-none">
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost text-white text-2xl">☰</button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-800"
          >
            <li><Link to="/" className="flex items-center"><FaHome className="mr-2" /> Home</Link></li>
            <li><Link to="/allPosts" className="flex items-center"><FaClipboardList className="mr-2" /> All Posts</Link></li>
            {user && (
              <>
                <li><Link to="/addPost" className="flex items-center"><FaPlus className="mr-2" /> Add a New Post</Link></li>
                <li><Link to="/managePost" className="flex items-center"><FaListAlt className="mr-2" /> Manage Your Posts</Link></li>
                <li>
                  <button onClick={logout} className="flex items-center"><FaSignOutAlt className="mr-2" /> Logout</button>
                </li>
              </>
            )}
            {!user && (
              <li>
                <Link to="/login" className="flex items-center"><FaSignInAlt className="mr-2" /> Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

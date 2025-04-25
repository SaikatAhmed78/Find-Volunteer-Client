
import { Link, useNavigate } from 'react-router-dom';
import {
  FaSignOutAlt, FaSignInAlt, FaPlus, FaListAlt, FaHome,
  FaClipboardList, FaBars, FaInfoCircle
} from 'react-icons/fa';
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
    <div className="navbar bg-gradient-to-r from-green-500 via-teal-500 to-emerald-500 shadow-xl dark:bg-gray-900 w-full px-4 md:px-6 fixed top-0 left-0 z-50">
      <div className="flex flex-wrap items-center justify-between w-full">
        <Link to="/" className="flex items-center text-white text-2xl font-extrabold dark:text-gray-200">
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full mr-2" />
          <span className="text-3xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400 drop-shadow-lg">Be The Change</span>
        </Link>

        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
          <NavItem to="/" icon={<FaHome />} text="Home" />
          <NavItem to="/allPosts" icon={<FaListAlt />} text="All Posts" />
          <NavItem to="/aboutUs" icon={<FaInfoCircle />} text="About Us" />
        </div>

        <div className="hidden md:flex items-center space-x-4">
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
                <li>
                  <Link to="/addPost" className="flex items-center">
                    <FaPlus className="mr-2" /> Add a New Post
                  </Link>
                </li>
                <li>
                  <Link to="/managePost" className="flex items-center">
                    <FaClipboardList className="mr-2" /> Manage Your Posts
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="text-sm flex items-center">
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
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
        <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-green-500 via-teal-500 to-emerald-500 shadow-xl dark:bg-gray-900 p-4 z-50">
          <ul className="flex flex-col space-y-3">
            <NavMobileItem to="/" icon={<FaHome />} text="Home" />
            <NavMobileItem to="/allPosts" icon={<FaListAlt />} text="All Posts" />
            <NavMobileItem to="/aboutUs" icon={<FaInfoCircle />} text="About Us" />
            {user ? (
              <>
                <NavMobileItem to="/addPost" icon={<FaPlus />} text="Add a New Post" />
                <NavMobileItem to="/managePost" icon={<FaClipboardList />} text="Manage Your Posts" />
                <li>
                  <button onClick={logout} className="text-white py-2 text-lg dark:text-gray-200 flex items-center">
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </li>
              </>
            ) : (
              <NavMobileItem to="/login" icon={<FaSignInAlt />} text="Login" />
            )}
            <ThemeToggle />
          </ul>
        </div>
      )}
    </div>
  );
};

// Reusable link component
const NavItem = ({ to, icon, text }) => (
  <Link
    to={to}
    className="text-white font-semibold text-lg hover:scale-110 hover:text-yellow-300 transition-all duration-200 dark:text-gray-200 flex items-center"
  >
    <span className="mr-2">{icon}</span> {text}
  </Link>
);

// Mobile nav item
const NavMobileItem = ({ to, icon, text }) => (
  <li>
    <Link to={to} className="text-white py-2 text-lg dark:text-gray-200 flex items-center">
      <span className="mr-2">{icon}</span> {text}
    </Link>
  </li>
);

export default Navbar;

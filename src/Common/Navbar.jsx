import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaSignInAlt, FaPlus, FaListAlt, FaHome, FaClipboardList, FaBars, FaInfoCircle } from 'react-icons/fa';
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
    <header className="fixed top-0 left-0 z-50 w-full shadow-md bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <nav className="flex justify-between items-center px-4 md:px-10 py-3">
        {/* Logo and title */}
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Be The Change
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-base font-medium text-gray-800 dark:text-gray-100">
          <li><Link to="/" className="hover:text-emerald-500 flex items-center gap-2"><FaHome /> Home</Link></li>
          <li><Link to="/allPosts" className="hover:text-emerald-500 flex items-center gap-2"><FaListAlt /> All Posts</Link></li>
          <li><Link to="/aboutUs" className="hover:text-emerald-500 flex items-center gap-2"><FaInfoCircle /> About Us</Link></li>

          {user ? (
            <li className="relative group">
              <div className="flex items-center gap-2 cursor-pointer">
                <img src={user?.photoURL} alt="User Avatar" className="w-9 h-9 rounded-full border border-emerald-500" />
              </div>
              <ul className="absolute hidden group-hover:block top-12 right-0 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-md p-3 z-50 min-w-[200px] space-y-2">
                <li className="text-gray-700 dark:text-gray-100 font-semibold">{user?.displayName}</li>
                <li><Link to="/addPost" className="flex items-center gap-2 hover:text-emerald-600"><FaPlus /> Add Post</Link></li>
                <li><Link to="/managePost" className="flex items-center gap-2 hover:text-emerald-600"><FaClipboardList /> Manage Posts</Link></li>
                <li><button onClick={logout} className="flex items-center gap-2 hover:text-red-500"><FaSignOutAlt /> Logout</button></li>
              </ul>
            </li>
          ) : (
            <li>
              <Link to="/login" className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md flex items-center gap-2 text-sm">
                <FaSignInAlt /> Login
              </Link>
            </li>
          )}
          <ThemeToggle />
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl ml-4 text-gray-800 dark:text-gray-200">
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-3 space-y-3 text-gray-800 dark:text-gray-100">
          <Link to="/" className="block flex items-center gap-2"><FaHome /> Home</Link>
          <Link to="/allPosts" className="block flex items-center gap-2"><FaListAlt /> All Posts</Link>
          <Link to="/aboutUs" className="block flex items-center gap-2"><FaInfoCircle /> About Us</Link>
          {user ? (
            <>
              <Link to="/addPost" className="block flex items-center gap-2"><FaPlus /> Add Post</Link>
              <Link to="/managePost" className="block flex items-center gap-2"><FaClipboardList /> Manage Posts</Link>
              <button onClick={logout} className="block flex items-center gap-2 text-red-500"><FaSignOutAlt /> Logout</button>
            </>
          ) : (
            <Link to="/login" className="block flex items-center gap-2 text-emerald-600"><FaSignInAlt /> Login</Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;

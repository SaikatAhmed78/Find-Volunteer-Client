import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../Providers/ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hidden md:block focus:outline-none focus:ring-2"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
    </button>
  );
};

export default ThemeToggle;

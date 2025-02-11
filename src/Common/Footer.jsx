import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../src/assets/logo/360_F_272398712_z28EMWLbM9Y8zojg51tLZo4D8Ju3R7EG.jpg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12 mt-10">
      <div className="container mx-auto px-6 text-center">

        <div className="flex justify-center items-center mb-6">
          <img src={logo} className="w-16 h-16 rounded-full shadow-lg" alt="Logo" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-wide mb-3 drop-shadow-lg">Be The Change</h2>
        <p className="text-lg max-w-lg mx-auto mb-6 opacity-90">Join us in making a difference. Volunteer today and be part of something bigger.</p>
        
 
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.facebook.com/saikat.ahmed.544161" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="https://x.com/ahm18110" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/shaikat-ahmed-86578632b" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>

 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="/aboutUs" className="hover:underline">About Us</a></li>
              <li><a href="/" className="hover:underline">Careers</a></li>
              <li><a href="/" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Help Center</a></li>
              <li><a href="/" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Contact Us</a></li>
              <li><a href="/aboutUs" className="hover:underline">Support</a></li>
              <li><a href="/" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
        </div>

       
        <div className="mt-10 border-t border-white/30 pt-4 text-sm opacity-80">
          &copy; {new Date().getFullYear()} Be The Change. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

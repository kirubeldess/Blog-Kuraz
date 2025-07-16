import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('authuser');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authuser');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md font-sans">
      <div className="text-3xl font-bold text-gray-800">
        <Link to="/" className="hover:text-blue-500 transition duration-300">BlogIt</Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link to="/blog" className="text-gray-600 hover:text-blue-500 transition duration-300">Blog</Link>
        <Link to="/about" className="text-gray-600 hover:text-blue-500 transition duration-300">About</Link>
        {/* <Link to="/contact" className="text-gray-600 hover:text-blue-500 transition duration-300">Contact</Link> */}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="px-5 py-2 text-white bg-red-600 rounded-full font-semibold text-sm hover:bg-red-700 transition"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="px-5 py-2 text-white bg-blue-600 rounded-full font-semibold text-sm hover:bg-blue-700 transition">
              Log In
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
  
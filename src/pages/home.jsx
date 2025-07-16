import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white w-full">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Welcome to BlogIt</h1>
        <p className="text-xl text-gray-200 mb-8">
          Your daily dose of amazing articles and inspiring stories.
        </p>
        <Link to="/blog">
          <button className="px-8 py-4 text-white bg-transparent border-2 border-white rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition duration-300 ease-in-out">
            Explore Blog
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
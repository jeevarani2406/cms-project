import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome to</h1>
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          Festival & Cultural Event Manager
        </h2>
        <p className="text-gray-600 mb-6">
          The complete platform to explore, manage, and celebrate college festivals.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/events">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Get Started
            </button>
          </Link>
          <Link to="/about">
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
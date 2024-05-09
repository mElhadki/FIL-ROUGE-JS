// CallToAction.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const CallToAction = () => {
  return (
    <div className="bg-gray-800 py-8" id='te'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-white mb-4">
          Stay Updated with the Latest IT News!
        </h2>
        <p className="text-lg text-center text-gray-300 mb-6">
         Follow me on X  for the latest updates, news, and insights in the world of technology.
        </p>
        <div className="flex justify-center">
          <Link
            to="https://twitter.com/ElhadkiM"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            Follow Me Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

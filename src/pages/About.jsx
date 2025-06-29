import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About CulinaryCanvas</h1>
      
      <div className="bg-gray-800/30 rounded-lg border border-gray-700/50 p-6 shadow-lg mb-8">
        <p className="text-gray-300 mb-4">
          CulinaryCanvas is a platform for food enthusiasts to discover, create, and share recipes. 
          Our mission is to inspire creativity in the kitchen and bring people together through the joy of cooking.
        </p>
        
        <p className="text-gray-300">
          Whether you're looking for quick weeknight dinner ideas, impressive dishes for special occasions, 
          or want to share your own culinary creations with the world, CulinaryCanvas provides the perfect platform.
        </p>
      </div>
      
      <h2 className="text-xl font-semibold mb-4">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-800/30 rounded-lg border border-gray-700/50 p-4">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h3 className="font-semibold">Browse Recipes</h3>
          </div>
          <p className="text-gray-400 text-sm">Discover a variety of recipes across different categories</p>
        </div>
        
        <div className="bg-gray-800/30 rounded-lg border border-gray-700/50 p-4">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <h3 className="font-semibold">Create Recipes</h3>
          </div>
          <p className="text-gray-400 text-sm">Share your culinary masterpieces with detailed instructions</p>
        </div>
        
        <div className="bg-gray-800/30 rounded-lg border border-gray-700/50 p-4">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 className="font-semibold">Save Favorites</h3>
          </div>
          <p className="text-gray-400 text-sm">Bookmark recipes you love for quick access</p>
        </div>
        
        <div className="bg-gray-800/30 rounded-lg border border-gray-700/50 p-4">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <h3 className="font-semibold">Edit and Update</h3>
          </div>
          <p className="text-gray-400 text-sm">Easily modify your recipes as you refine them</p>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <Link 
          to="/recipes" 
          className="inline-block px-6 py-3 bg-teal-500 text-gray-900 rounded-md font-medium hover:bg-teal-400 transition-colors"
        >
          Start Exploring Recipes
        </Link>
      </div>
    </div>
  );
};

export default About;
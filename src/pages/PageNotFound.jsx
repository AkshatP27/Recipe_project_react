import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="mb-6">
        <svg className="w-24 h-24 text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-gray-300 mb-2">404</h1>
      <p className="text-xl text-gray-400 mb-8">Oops! Page not found</p>
      <p className="text-gray-500 mb-6 max-w-md">
        We couldn't find the page you're looking for. The recipe might have been moved or doesn't exist.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-teal-500 text-gray-900 rounded-md font-medium hover:bg-teal-400 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
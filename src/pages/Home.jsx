import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { recipeContext } from '../context/RecipeContext';

const Home = () => {
  const { data } = useContext(recipeContext);
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-16 mt-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            Cook. Share. Enjoy.
          </span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Discover delicious recipes, share your culinary masterpieces, and elevate your cooking with our community of food enthusiasts.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link 
            to="/recipes" 
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full text-gray-900 font-bold hover:scale-105 transition-transform duration-200"
          >
            Browse Recipes
          </Link>
          <Link 
            to="/create-recipe" 
            className="px-8 py-3 border border-gray-600 rounded-full hover:border-yellow-500 hover:text-yellow-500 transition-colors duration-200"
          >
            Share Your Recipe
          </Link>
        </div>
      </div>
      
      {data.length > 0 && (
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Featured Recipe
          </h2>
          <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-xl border border-gray-700/50">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={data[0].image} 
                  alt={data[0].title} 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">{data[0].title}</h3>
                <div className="mb-4 flex items-center">
                  <span className="bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full">
                    {data[0].category}
                  </span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{data[0].chef}</span>
                </div>
                <p className="text-gray-400 mb-6">
                  {data[0].desc?.slice(0, 200)}...
                </p>
                <Link 
                  to={`/recipes/details/${data[0].id}`}
                  className="self-start px-6 py-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full text-gray-900 font-bold hover:scale-105 transition-transform duration-200"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
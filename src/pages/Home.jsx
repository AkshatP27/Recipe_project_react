import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";

const Home = () => {
  const { data } = useContext(recipeContext);
  
  return (
    <div className="py-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Discover & Share <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">Delicious Recipes</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Your go-to platform for culinary inspiration. Browse our collection or share your own creations with the world.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/recipes" 
            className="px-6 py-3 bg-teal-500 text-gray-900 rounded-md font-medium hover:bg-teal-400 transition-colors"
          >
            Explore Recipes
          </Link>
          <Link 
            to="/create-recipe" 
            className="px-6 py-3 border border-teal-500 text-teal-400 rounded-md font-medium hover:bg-teal-900/30 transition-colors"
          >
            Share Recipe
          </Link>
        </div>
      </div>

      {data.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="w-1.5 h-6 bg-teal-400 rounded-full mr-3 inline-block"></span> 
            Recently Added
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.slice(0, 3).map(recipe => (
              <Link 
                key={recipe.id} 
                to={`/recipes/details/${recipe.id}`}
                className="group block rounded-lg overflow-hidden bg-gray-800/50 border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-teal-900/30"
              >
                <div className="relative h-40">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-lg font-semibold group-hover:text-teal-300 transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-sm text-gray-300">by {recipe.chef}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link 
              to="/recipes"
              className="inline-flex items-center text-teal-400 hover:text-teal-300"
            >
              View all recipes
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

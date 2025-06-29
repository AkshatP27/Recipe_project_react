import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("fav")) || [];
    setFavorite(storedFavorites);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Favorite Recipes</h1>

      {favorite.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorite.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-800/20 rounded-lg border border-gray-700/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto text-gray-600 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h3 className="text-xl font-medium text-gray-400">No favorites yet</h3>
          <p className="text-gray-500 mt-2">
            Browse recipes and add some to your favorites
          </p>
        </div>
      )}
    </div>
  );
};

export default Fav;

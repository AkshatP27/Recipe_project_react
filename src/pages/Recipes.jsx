import React, { useContext, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipeContext);
  const [filter, setFilter] = useState("all");

  // Get unique categories
  const categories = ["all", ...new Set(data.map((recipe) => recipe.category))];

  // Filter recipes based on selected category
  const filteredRecipes =
    filter === "all"
      ? data
      : data.filter((recipe) => recipe.category === filter);

  const renderRecipes = filteredRecipes.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div>
      <div className="flex flex-col items-start mb-8">
        <h1 className="text-3xl font-bold mb-6">All Recipes</h1>

        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm capitalize transition-all ${
                filter === category
                  ? "bg-gradient-to-r from-yellow-400 to-red-500 text-gray-900 font-bold"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="flex flex-wrap gap-4">{renderRecipes}</div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-700 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <h3 className="text-xl font-medium text-gray-400">
            No recipes found!
          </h3>
          <p className="mt-2 text-gray-500">
            Try a different category or create a new recipe.
          </p>
        </div>
      )}
    </div>
  );
};

export default Recipes;

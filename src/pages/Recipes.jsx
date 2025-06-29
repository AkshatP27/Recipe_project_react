import React, { useContext, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipeContext);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories
  const categories = [
    "all",
    ...new Set(data.map((recipe) => recipe.category).filter(Boolean)),
  ];

  // Filter recipes based on selected category
  const filteredRecipes =
    selectedCategory === "all"
      ? data
      : data.filter((recipe) => recipe.category === selectedCategory);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">All Recipes</h1>

        {/* Category filters */}
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-teal-500 text-gray-900"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
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
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h3 className="text-xl font-medium text-gray-400">No recipes found</h3>
          <p className="text-gray-500 mt-2">
            Try a different category or create a new recipe
          </p>
        </div>
      )}
    </div>
  );
};

export default Recipes;

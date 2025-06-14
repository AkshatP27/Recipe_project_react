import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef, category } = props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-0.75rem)] block rounded-xl overflow-hidden shadow-xl bg-gray-800/50 backdrop-blur-sm hover:shadow-red-500/10 hover:scale-[1.02] transition-all duration-300 mb-5 border border-gray-700/50"
    >
      <div className="relative">
        <img
          className="object-cover w-full h-52 brightness-90"
          src={image}
          alt={title}
        />
        {category && (
          <span className="absolute top-3 right-3 bg-gray-900/80 text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            {category}
          </span>
        )}
      </div>

      <div className="p-5">
        <h1 className="font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
          {title}
        </h1>
        <div className="flex items-center mt-2 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <small className="ml-1 text-red-400">{chef}</small>
        </div>
        <p className="text-gray-400 text-sm">
          {desc && desc.slice(0, 80)}...{" "}
          <span className="text-blue-400 font-medium">read more</span>
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;

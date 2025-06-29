import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef, category } = props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="group block rounded-lg overflow-hidden bg-gray-800/50 border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-teal-900/30 hover:transform hover:scale-[1.01]"
    >
      <div className="relative">
        <img
          className="h-48 w-full object-cover"
          src={image}
          alt={title}
        />
        {category && (
          <span className="absolute top-3 right-3 bg-gray-900/70 text-teal-300 text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-1 group-hover:text-teal-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mt-1">by {chef}</p>
        <p className="text-sm text-gray-300 mt-3 line-clamp-2">
          {desc?.slice(0, 100)}...
        </p>
        <div className="mt-4 text-xs font-medium text-teal-400">Read more →</div>
      </div>
    </Link>
  );
};

export default RecipeCard;

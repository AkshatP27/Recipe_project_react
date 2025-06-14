import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="hover:scale-102 duration-150 w-[21vw] block rounded-lg overflow-hidden shadow-2xl bg-gray-800 p-3 mr-3 mb-5"
    >
      <img
        className="object-cover w-full h-[25vh] mb-3 rounded-lg"
        src={image}
        alt=""
      />
      <h1 className="px-2 font-black text-xl">{title}</h1>
      <small className="px-2 text-red-400">-{chef}</small>
      <p className="px-2 mt-2">
        {desc.slice(0, 50)}...{""}
        <small className="text-blue-400">more</small>
      </p>

      {/* Copied this "div" from "Recipes.jsx" file... */}
      {/* <div key={recipe.id}>
        <h1>{recipe.title}</h1>
      </div> */}
    </Link>
  );
};

export default RecipeCard;

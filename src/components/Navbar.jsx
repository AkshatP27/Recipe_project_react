import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between mb-12">
      <div className="mb-6 sm:mb-0">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
          RecipeRender
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium">
        <NavLink 
          to="/" 
          className={({isActive}) => 
            `px-3 py-2 rounded-full transition-all duration-200 ${isActive 
              ? "bg-red-500/20 text-red-300" 
              : "hover:bg-gray-700/50"}`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/recipes" 
          className={({isActive}) => 
            `px-3 py-2 rounded-full transition-all duration-200 ${isActive 
              ? "bg-red-500/20 text-red-300" 
              : "hover:bg-gray-700/50"}`
          }
        >
          Recipes
        </NavLink>
        <NavLink 
          to="/about" 
          className={({isActive}) => 
            `px-3 py-2 rounded-full transition-all duration-200 ${isActive 
              ? "bg-red-500/20 text-red-300" 
              : "hover:bg-gray-700/50"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/create-recipe"
          className={({isActive}) => 
            `px-4 py-2 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full text-gray-900 font-bold transition-transform duration-200 hover:scale-105 ${
              isActive ? "ring-2 ring-white/30 shadow-lg" : ""
            }`
          }
        >
          Create Recipe
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

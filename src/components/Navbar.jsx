import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 text-sm mb-10 font-semibold">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-red-300" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/recipes"
        className={({ isActive }) => (isActive ? "text-red-300" : "")}
      >
        Recipes
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "text-red-300" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/create-recipe"
        className={({ isActive }) =>
          `px-4 py-2 bg-gray-100 rounded text-gray-950 font-bold text-lg text-shadow-lg ${
            isActive ? "text-green-900" : ""
          }`
        }
      >
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;

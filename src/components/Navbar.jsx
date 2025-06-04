import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 text-sm mb-10">
      <NavLink to="/" className={(e) => e.isActive && "text-red-300"}>
        Home
      </NavLink>
      <NavLink to="/recipes" className={(e) => e.isActive && "text-red-300"}>
        Recipes
      </NavLink>
      <NavLink to="/about" className={(e) => e.isActive && "text-red-300"}>
        About
      </NavLink>
      <NavLink
        to="/create-recipe"
        className={`px-4 py-2 bg-gray-100 rounded text-gray-950 font-bold text-lg text-shadow-lg ${(e) => e.isActive && "text-red-300"}`}
      >
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;

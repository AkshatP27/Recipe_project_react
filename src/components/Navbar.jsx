import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
          RecipeRender
        </NavLink>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `transition-colors ${isActive ? "text-teal-300" : "hover:text-teal-300"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) => 
              `transition-colors ${isActive ? "text-teal-300" : "hover:text-teal-300"}`
            }
          >
            Recipes
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) => 
              `transition-colors ${isActive ? "text-teal-300" : "hover:text-teal-300"}`
            }
          >
            Favorites
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `transition-colors ${isActive ? "text-teal-300" : "hover:text-teal-300"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/create-recipe"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full border border-teal-500 font-medium transition-colors ${
                isActive 
                  ? "bg-teal-500 text-gray-900" 
                  : "text-teal-400 hover:bg-teal-500 hover:text-gray-900"
              }`
            }
          >
            Create Recipe
          </NavLink>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute z-10 w-full bg-gray-800 rounded-md mt-2 py-2 shadow-xl">
          <div className="flex flex-col space-y-2 px-4">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `py-2 ${isActive ? "text-teal-300" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/recipes"
              className={({ isActive }) => 
                `py-2 ${isActive ? "text-teal-300" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) => 
                `py-2 ${isActive ? "text-teal-300" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Favorites
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `py-2 ${isActive ? "text-teal-300" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/create-recipe"
              className="py-2 px-3 mt-2 bg-teal-500 text-gray-900 rounded-md font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Create Recipe
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

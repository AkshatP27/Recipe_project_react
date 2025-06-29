import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";

const RecipeDetails = () => {
  const { data, setdata } = useContext(recipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => recipe.id == params.id);
  const navigate = useNavigate();
  const [favorite, setfavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  
  const { register, handleSubmit } = useForm({
    defaultValues: recipe ? {
      title: recipe.title,
      image: recipe.image,
      desc: recipe.desc,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      chef: recipe.chef,
      category: recipe.category,
    } : {}
  });

  const UpdateHandler = (updatedRecipe) => {
    const recipeIndex = data.findIndex((recipe) => recipe.id == params.id);
    const copyRecipe = [...data];
    copyRecipe[recipeIndex] = { ...copyRecipe[recipeIndex], ...updatedRecipe };
    setdata(copyRecipe);
    localStorage.setItem("recipes", JSON.stringify(copyRecipe));

    toast.success("Recipe updated successfully!", {
      position: "top-right",
      autoClose: 1600,
    });
  };

  const Deletehandler = () => {
    const filterData = data.filter((recipe) => recipe.id != params.id);
    setdata(filterData);
    
    // Also remove from favorites if present
    const filterFav = favorite.filter((f) => f.id != params.id);
    setfavorite(filterFav);
    
    localStorage.setItem("recipes", JSON.stringify(filterData));
    localStorage.setItem("fav", JSON.stringify(filterFav));

    toast.error("Recipe deleted successfully!", {
      position: "top-right",
      autoClose: 1600,
    });
    
    navigate("/recipes");
  };

  const Favhandler = () => {
    const copyfav = [...favorite, recipe];
    setfavorite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
    toast.success("Added to favorites!", { position: "top-right", autoClose: 1600 });
  };

  const UnFavhandler = () => {
    const filterFav = favorite.filter((f) => f.id != recipe?.id);
    setfavorite(filterFav);
    localStorage.setItem("fav", JSON.stringify(filterFav));
    toast.info("Removed from favorites", { position: "top-right", autoClose: 1600 });
  };

  const formatList = (text) => {
    if (!text) return [];
    return text.split(',').map(item => item.trim()).filter(Boolean);
  };

  const formatSteps = (text) => {
    if (!text) return [];
    return text.split(/\r?\n|\.(?=\s|$)/).map(item => item.trim()).filter(Boolean);
  };

  if (!recipe) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-400"></div>
    </div>
  );

  const ingredientsList = formatList(recipe.ingredients);
  const instructionsList = formatSteps(recipe.instructions);
  const inputClasses = "w-full bg-transparent border-b border-gray-700 px-3 py-2 focus:border-teal-400 focus:outline-none transition-colors";
  const labelClasses = "block text-sm text-gray-400 mb-1";
  
  const isFavorite = favorite.some(f => f.id === recipe.id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Recipe Display */}
      <div>
        <div className="bg-gray-800/30 rounded-lg border border-gray-700/50 overflow-hidden shadow-lg">
          <div className="relative">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-64 object-cover"
            />
            <button 
              onClick={isFavorite ? UnFavhandler : Favhandler}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/70 hover:bg-gray-900 transition-colors"
            >
              <svg 
                className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-white'}`} 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
            </button>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent py-6 px-6">
              <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full mb-2">
                {recipe.category}
              </span>
              <h1 className="text-3xl font-bold">{recipe.title}</h1>
              <p className="text-gray-400">by {recipe.chef}</p>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Description
              </h2>
              <p className="text-gray-300 leading-relaxed">{recipe.desc}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Ingredients
              </h2>
              <div className="bg-gray-800/50 rounded p-4">
                {ingredientsList.length > 0 ? (
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {ingredientsList.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300">{recipe.ingredients}</p>
                )}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                Instructions
              </h2>
              <div className="bg-gray-800/50 rounded p-4">
                {instructionsList.length > 0 ? (
                  <ol className="list-decimal list-inside space-y-2 text-gray-300">
                    {instructionsList.map((instruction, index) => (
                      <li key={index} className="pl-1">{instruction}</li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-300 whitespace-pre-line">{recipe.instructions}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Form */}
      <div>
        <div className="bg-gray-800/30 rounded-lg border border-gray-700/50 p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Edit Recipe</h2>
          
          <form onSubmit={handleSubmit(UpdateHandler)} className="space-y-4">
            <div>
              <label className={labelClasses}>Recipe Title</label>
              <input
                className={inputClasses}
                {...register("title")}
                type="text"
              />
            </div>

            <div>
              <label className={labelClasses}>Chef Name</label>
              <input
                className={inputClasses}
                {...register("chef")}
                type="text"
              />
            </div>

            <div>
              <label className={labelClasses}>Image URL</label>
              <input
                className={inputClasses}
                {...register("image")}
                type="url"
              />
            </div>

            <div>
              <label className={labelClasses}>Description</label>
              <textarea
                className={`${inputClasses} resize-none h-24`}
                {...register("desc")}
              ></textarea>
            </div>

            <div>
              <label className={labelClasses}>Ingredients</label>
              <textarea
                className={`${inputClasses} resize-none h-24`}
                {...register("ingredients")}
                placeholder="Separate ingredients with commas"
              ></textarea>
            </div>

            <div>
              <label className={labelClasses}>Instructions</label>
              <textarea
                className={`${inputClasses} resize-none h-36`}
                {...register("instructions")}
                placeholder="Separate steps with line breaks or periods"
              ></textarea>
            </div>

            <div>
              <label className={labelClasses}>Category</label>
              <select
                className="w-full bg-gray-800 border-b border-gray-700 px-3 py-2 rounded focus:border-teal-400 focus:outline-none transition-colors text-white"
                {...register("category")}
              >
                <option value="breakfast" className="bg-gray-800 text-white">Breakfast</option>
                <option value="lunch" className="bg-gray-800 text-white">Lunch</option>
                <option value="dinner" className="bg-gray-800 text-white">Dinner</option>
                <option value="dessert" className="bg-gray-800 text-white">Dessert</option>
                <option value="snack" className="bg-gray-800 text-white">Snack</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <button 
                type="submit"
                className="sm:flex-1 bg-teal-500 text-gray-900 py-2 px-4 rounded font-medium hover:bg-teal-400 transition-colors"
              >
                Update Recipe
              </button>
              
              <button
                onClick={Deletehandler}
                type="button"
                className="sm:flex-1 bg-transparent border border-red-500 text-red-500 py-2 px-4 rounded font-medium hover:bg-red-500/10 transition-colors"
              >
                Delete Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

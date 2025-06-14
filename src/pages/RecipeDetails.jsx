import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";

const RecipeDetails = () => {
  const { data, setdata } = useContext(recipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => recipe.id == params.id);
  const navigate = useNavigate();
  
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

  const SubmitHandler = (updatedRecipe) => {
    const recipeIndex = data.findIndex((recipe) => recipe.id == params.id);
    const copyRecipe = [...data];
    copyRecipe[recipeIndex] = { ...copyRecipe[recipeIndex], ...updatedRecipe };
    setdata(copyRecipe);

    toast.success("Recipe updated successfully!", {
      position: "top-right",
      autoClose: 1600,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });
  };

  const Deletehandler = () => {
    const filterData = data.filter((recipe) => recipe.id != params.id);
    setdata(filterData);
    toast.error("Recipe deleted successfully!", {
      position: "top-right",
      autoClose: 1600,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });
    navigate("/recipes");
  };

  if (!recipe) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
    </div>
  );

  const inputClasses = "block w-full border-b border-gray-700 bg-transparent outline-0 p-3 mb-6 focus:border-yellow-500 transition-colors duration-200";
  const labelClasses = "text-xs uppercase tracking-wider text-gray-500 mb-1 block";

  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-5">
      <div className="lg:w-1/2 order-2 lg:order-1">
        <div className="sticky top-8 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-xl">
          <div className="mb-6">
            <span className="bg-yellow-500/20 text-yellow-400 text-xs px-3 py-1 rounded-full">
              {recipe.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            {recipe.title}
          </h1>
          
          <div className="flex items-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="ml-1 text-red-400">{recipe.chef}</span>
          </div>
          
          <img 
            className="w-full h-64 object-cover rounded-lg mb-8 shadow-lg" 
            src={recipe.image} 
            alt={recipe.title} 
          />
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Description
            </h3>
            <p className="text-gray-300">{recipe.desc}</p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Ingredients
            </h3>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <p className="text-gray-300">{recipe.ingredients}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Instructions
            </h3>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <p className="text-gray-300 whitespace-pre-line">{recipe.instructions}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 order-1 lg:order-2">
        <div className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-xl">
          <h2 className="text-2xl font-bold mb-8">Edit Recipe</h2>
          
          <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-4">
            {/* Recipe Title */}
            <div>
              <label className={labelClasses}>Recipe Title</label>
              <input
                className={inputClasses}
                {...register("title")}
                type="text"
                placeholder="Recipe Title"
              />
            </div>

            {/* Chef Name */}
            <div>
              <label className={labelClasses}>Chef Name</label>
              <input
                className={inputClasses}
                {...register("chef")}
                type="text"
                placeholder="Chef name"
              />
            </div>

            {/* Recipe Image */}
            <div>
              <label className={labelClasses}>Recipe Image URL</label>
              <input
                className={inputClasses}
                {...register("image")}
                type="url"
                placeholder="Enter image URL"
              />
            </div>

            {/* Recipe Description */}
            <div>
              <label className={labelClasses}>Recipe Description</label>
              <textarea
                className={`${inputClasses} resize-none min-h-24`}
                {...register("desc")}
                placeholder="Start recipe description here..."
              ></textarea>
            </div>

            {/* Recipe Ingredients */}
            <div>
              <label className={labelClasses}>Ingredients</label>
              <textarea
                className={`${inputClasses} resize-none min-h-24`}
                {...register("ingredients")}
                placeholder="Write ingredients separated by comma(,)"
              ></textarea>
            </div>

            {/* Recipe Instructions */}
            <div>
              <label className={labelClasses}>Instructions</label>
              <textarea
                className={`${inputClasses} resize-none min-h-36`}
                {...register("instructions")}
                placeholder="Write instructions here"
              ></textarea>
            </div>

            {/* Recipe Category */}
            <div>
              <label className={labelClasses}>Category</label>
              <select
                className={`${inputClasses} cursor-pointer`}
                {...register("category")}
              >
                <option className="bg-gray-800 text-white" value="breakfast">Breakfast</option>
                <option className="bg-gray-800 text-white" value="lunch">Lunch</option>
                <option className="bg-gray-800 text-white" value="supper">Supper</option>
                <option className="bg-gray-800 text-white" value="dinner">Dinner</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <button className="sm:w-1/2 px-4 py-3 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg text-gray-900 font-bold hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow">
                Update Recipe
              </button>
              <button
                onClick={Deletehandler}
                type="button"
                className="sm:w-1/2 px-4 py-3 bg-gray-900 border border-red-500 text-red-500 rounded-lg font-bold hover:bg-red-500 hover:text-white transition-colors"
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

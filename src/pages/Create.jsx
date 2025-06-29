import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { data, setdata } = useContext(recipeContext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    
    const copyData = [...data];
    copyData.push(recipe);
    setdata(copyData);

    localStorage.setItem('recipes', JSON.stringify(copyData))
    reset();

    toast.success("Recipe added successfully!", {
      position: "top-right",
      autoClose: 1600,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });

    navigate("/recipes");
  };

  const inputClasses = "w-full bg-transparent border-b border-gray-700 px-3 py-2 focus:border-teal-400 focus:outline-none transition-colors";
  const labelClasses = "block text-sm text-gray-400 mb-1";

  return (
    <div className="max-w-2xl mx-auto bg-gray-800/30 p-8 rounded-lg border border-gray-700/50 shadow-lg">
      <h1 className="text-2xl font-bold mb-8">Create New Recipe</h1>
      
      <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-6">
        <div>
          <label className={labelClasses}>Recipe Title</label>
          <input
            className={inputClasses}
            {...register("title")}
            type="text"
            placeholder="Enter a descriptive title"
            required
          />
        </div>

        <div>
          <label className={labelClasses}>Chef Name</label>
          <input
            className={inputClasses}
            {...register("chef")}
            type="text"
            placeholder="Your name or nickname"
            required
          />
        </div>

        <div>
          <label className={labelClasses}>Image URL</label>
          <input
            className={inputClasses}
            {...register("image")}
            type="url"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        <div>
          <label className={labelClasses}>Description</label>
          <textarea
            className={`${inputClasses} resize-none h-24`}
            {...register("desc")}
            placeholder="Describe your recipe in a few sentences"
            required
          ></textarea>
        </div>

        <div>
          <label className={labelClasses}>Ingredients</label>
          <textarea
            className={`${inputClasses} resize-none h-24`}
            {...register("ingredients")}
            placeholder="List ingredients separated by commas"
            required
          ></textarea>
        </div>

        <div>
          <label className={labelClasses}>Instructions</label>
          <textarea
            className={`${inputClasses} resize-none h-36`}
            {...register("instructions")}
            placeholder="Provide step-by-step cooking instructions"
            required
          ></textarea>
        </div>

        <div>
          <label className={labelClasses}>Category</label>
          <select
            className="w-full bg-gray-800 border-b border-gray-700 px-3 py-2 rounded focus:border-teal-400 focus:outline-none transition-colors text-white"
            {...register("category")}
            required
          >
            <option value="breakfast" className="bg-gray-800 text-white">Breakfast</option>
            <option value="lunch" className="bg-gray-800 text-white">Lunch</option>
            <option value="dinner" className="bg-gray-800 text-white">Dinner</option>
            <option value="dessert" className="bg-gray-800 text-white">Dessert</option>
            <option value="snack" className="bg-gray-800 text-white">Snack</option>
          </select>
        </div>

        <button className="w-full bg-teal-500 text-gray-900 py-3 rounded-md font-medium hover:bg-teal-400 transition-colors">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;

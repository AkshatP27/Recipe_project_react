import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { data, setdata } = useContext(recipeContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    // console.log(recipe);

    // const copyData = [...data];
    // copyData.push(recipe);
    // setdata(copyData);
    setdata([...data, recipe]);
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

  const inputClasses = "block w-full border-b border-gray-700 bg-transparent outline-0 p-3 mb-6 focus:border-yellow-500 transition-colors duration-200";
  const labelClasses = "text-xs uppercase tracking-wider text-gray-500 mb-1 block";

  return (
    <div className="max-w-2xl mx-auto bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-xl">
      <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
        Create New Recipe
      </h1>
      
      <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className={labelClasses}>Recipe Title</label>
          <input
            className={inputClasses}
            {...register("title", { required: true })}
            type="text"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Chef Name */}
        <div>
          <label className={labelClasses}>Chef Name</label>
          <input
            className={inputClasses}
            {...register("chef", { required: true })}
            type="text"
            placeholder="Enter chef name"
          />
        </div>

        {/* Recipe Image */}
        <div>
          <label className={labelClasses}>Recipe Image URL</label>
          <input
            className={inputClasses}
            {...register("image", { required: true })}
            type="url"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Recipe Description */}
        <div>
          <label className={labelClasses}>Recipe Description</label>
          <textarea
            className={`${inputClasses} resize-none min-h-24`}
            {...register("desc", { required: true })}
            placeholder="Describe your recipe..."
          ></textarea>
        </div>

        {/* Recipe Ingredients */}
        <div>
          <label className={labelClasses}>Ingredients</label>
          <textarea
            className={`${inputClasses} resize-none min-h-24`}
            {...register("ingredients", { required: true })}
            placeholder="List ingredients separated by comma..."
          ></textarea>
        </div>

        {/* Recipe Instructions */}
        <div>
          <label className={labelClasses}>Instructions</label>
          <textarea
            className={`${inputClasses} resize-none min-h-36`}
            {...register("instructions", { required: true })}
            placeholder="Write cooking instructions here..."
          ></textarea>
        </div>

        {/* Recipe Category */}
        <div>
          <label className={labelClasses}>Category</label>
          <select
            className={`${inputClasses} cursor-pointer`}
            {...register("category", { required: true })}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>

        <button className="w-full px-4 py-3 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg text-gray-900 font-bold hover:shadow-lg hover:shadow-red-500/20 transition-shadow">
          Save Your Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;

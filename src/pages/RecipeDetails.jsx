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
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      desc: recipe.desc,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      chef: recipe.chef,
      category: recipe.category,
    },
  });

  const SubmitHandler = (recipe) => {
    const recipeIndex = data.findIndex((recipe) => recipe.id == params.id);
    const copyRecipe = [...data];
    copyRecipe[recipeIndex] = { ...copyRecipe[recipeIndex], ...recipe };
    setdata(copyRecipe);

    toast.success("Recipe updated successfully!", {
      position: "top-right",
      autoClose: 1600,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });

    // console.log(recipeIndex);
    // console.log(copyRecipe[recipeIndex]);
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

  // console.log(recipe);

  return recipe ? (
    <div className="w-full flex gap-20">
      <div className="left w-1/2 p-2">
        <div className="title-chef-name">
          <h1 className="text-5xl font-black mb-2">{recipe.title}</h1>
          <small className="pl-2 text-lg">-{recipe.chef}</small>
        </div>
        <div className="image">
          <img className="h-[25vh] rounded-xl mt-7" src={recipe.image} alt="" />
        </div>
        <div className="description">
          <h3 className="text-2xl font-black mb-2 mt-9">Description:</h3>
          <p className="">{recipe.desc}</p>
        </div>
        <div className="ingredients">
          <h3 className="text-2xl font-black mb-2 mt-9">Ingredients:</h3>
          <p className="">{recipe.ingredients}</p>
        </div>
        <div className="instructions">
          <h3 className="text-2xl font-black mb-2 mt-9">Instructions:</h3>
          <p className="">{recipe.instructions}</p>
        </div>
      </div>

      <div className="right w-1/2 p-2">
        <form onSubmit={handleSubmit(SubmitHandler)}>
          {/* Recipe Title */}
          <input
            className="block border-b outline-0 p-2 mb-7"
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
          />

          {/* Recipe TitlChef */}
          <input
            className="block border-b outline-0 p-2 mb-7"
            {...register("chef")}
            type="text"
            placeholder="Chef name"
          />

          {/* Recipe Image */}
          <input
            className="block border-b outline-0 p-2"
            {...register("image")}
            type="url"
            placeholder="Enter image URL"
          />
          <small className="text-red-400 mb-7">
            for showing/displaying error
          </small>

          {/* Recipe Description */}
          <textarea
            className="block border-b outline-0 p-2 mb-9"
            {...register("desc")}
            type="text"
            placeholder="Start recipe description here..."
          ></textarea>

          {/* Recipe Ingredients */}
          <textarea
            className="block border-b outline-0 p-2 mb-9"
            {...register("ingredients")}
            type="text"
            placeholder="Write ingredients separated by comma(,)"
          ></textarea>

          {/* Recipe Instructions */}
          <textarea
            className="block border-b outline-0 p-2 mb-9"
            {...register("instructions")}
            type="text"
            placeholder="Write instructions here"
          ></textarea>

          {/* Recipe Category */}
          <select
            className="block border-b outline-0 p-2 mb-9 bg-gray-900"
            {...register("category")}
            type="text"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>

          <div className="buttons flex gap-2">
            <button className="update-btn block px-4 py-2 bg-yellow-500 rounded text-gray-900 font-bold">
              Update Your Recipe
            </button>
            <button
              onClick={Deletehandler}
              className="delete-btn block px-4 py-2 bg-red-700 rounded text-gray-100 font-bold"
            >
              Delete Your Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default RecipeDetails;

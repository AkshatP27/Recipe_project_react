import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipeContext } from "../context/RecipeContext";

const Create = () => {
  const { data, setdata } = useContext(recipeContext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    // console.log(recipe);

    // const copyData = [...data];
    // copyData.push(recipe);
    // setdata(copyData);

    setdata([...data, recipe]);

    reset(); // Reset the form after submission
  };

  return (
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
      <small className="text-red-400 mb-7">for showing/displaying error</small>

      {/* Recipe Description */}
      <textarea
        className="block border-b outline-0 p-2 mb-9"
        {...register("description")}
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

      {/* Recipe Instructions */}
      <select
        className="block border-b outline-0 p-2 mb-9"
        {...register("category")}
        type="text"
      >
        <option value="cat-1">Category 1</option>
        <option value="cat-2">Category 2</option>
        <option value="cat-3">Category 3</option>
      </select>

      <button className="block px-4 py-2 bg-gray-700 rounded text-gray-100 font-bold">
        Save Your Recipe
      </button>
    </form>
  );
};

export default Create;

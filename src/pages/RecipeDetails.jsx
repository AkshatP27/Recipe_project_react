import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";

const RecipeDetails = () => {
  const { data } = useContext(recipeContext);
  const params = useParams();
  const recipe = data.find(recipe => recipe.id == params.id);

  console.log(recipe);
  

  return recipe ? <div>RecipeDetails</div> : "Loading...";
};

export default RecipeDetails;

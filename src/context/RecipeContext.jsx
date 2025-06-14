import React, { createContext } from "react";
import { useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([
    {
      id: 1,
      title: "Classic Margherita Pizza",
      image: "https://theawesomedaily.com/wp-content/uploads/2016/09/pictures-of-pizza-23-1.jpg",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      desc: "A traditional Neapolitan pizza with fresh mozzarella, tomatoes, and basil. The simple yet perfect combination of ingredients creates a light, fresh flavor that highlights the quality of each component. Best baked in a very hot oven for that authentic crispy-yet-chewy crust.",
      chef: "Chef Mario",
      category: "dinner",
    },
  ]);
  // console.log(data);

  return (
    <recipeContext.Provider value={{ data, setdata }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;

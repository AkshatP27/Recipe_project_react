import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

export const recipeContext = createContext(null);

const RecipeContext = (props) => {
  // Sample recipes with diverse categories and content
  const sampleRecipes = [
    {
      id: nanoid(),
      title: "Classic Margherita Pizza",
      chef: "Chef Mario",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1000&auto=format&fit=crop",
      desc: "A traditional Italian pizza with simple but flavorful ingredients. The combination of fresh mozzarella, tomatoes, and basil creates a delicious classic that's been loved for generations.",
      ingredients: "1 pizza dough, 3/4 cup tomato sauce, 8 oz fresh mozzarella (sliced), 2 tomatoes (sliced), Fresh basil leaves, 2 tbsp olive oil, 1 tsp salt, 1/2 tsp black pepper",
      instructions: "Preheat oven to 475°F with pizza stone inside. Roll out dough on floured surface to 12-inch circle. Transfer to parchment paper. Spread tomato sauce evenly, leaving 1/2 inch border. Arrange mozzarella and tomato slices. Drizzle with olive oil and season with salt and pepper. Slide pizza with parchment onto hot stone. Bake 10-12 minutes until crust is golden. Remove from oven and top with fresh basil leaves. Let cool slightly before slicing.",
      category: "dinner"
    },
    {
      id: nanoid(),
      title: "Avocado Toast with Poached Eggs",
      chef: "Emma Green",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1000&auto=format&fit=crop",
      desc: "Start your day with this nutritious and Instagram-worthy breakfast. Creamy avocado on toasted artisan bread topped with perfectly poached eggs.",
      ingredients: "2 slices artisan bread, 1 ripe avocado, 2 eggs, 1 tbsp white vinegar, Red pepper flakes, Salt and pepper to taste, 1/2 lemon (juiced), Microgreens for garnish",
      instructions: "Toast bread until golden and crisp. Mash avocado in a bowl with lemon juice, salt, and pepper. Bring water to simmer in a pan, add vinegar. Create a gentle whirlpool and crack egg into center. Poach for 3 minutes. Remove with slotted spoon. Spread avocado mixture on toast. Top with poached eggs. Season with red pepper flakes, salt, and pepper. Garnish with microgreens.",
      category: "breakfast"
    },
    {
      id: nanoid(),
      title: "Thai Green Curry with Vegetables",
      chef: "Suki Lee",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1000&auto=format&fit=crop",
      desc: "A vibrant, aromatic Thai curry packed with vegetables and bold flavors. This vegetarian dish balances spicy, sweet, and savory elements perfectly.",
      ingredients: "2 tbsp green curry paste, 1 can (14 oz) coconut milk, 1 cup vegetable broth, 1 bell pepper (sliced), 1 zucchini (sliced), 1 cup broccoli florets, 1 cup snap peas, 1 tbsp soy sauce, 1 tbsp brown sugar, 1 tbsp lime juice, Fresh Thai basil leaves, 2 cups cooked jasmine rice",
      instructions: "Heat a large pan over medium heat. Add 2 tablespoons of coconut milk and curry paste, stir until fragrant (about 1 minute). Add remaining coconut milk and vegetable broth, bring to simmer. Add vegetables and cook for 7-8 minutes until tender-crisp. Stir in soy sauce, brown sugar, and lime juice. Taste and adjust seasonings. Remove from heat and stir in Thai basil leaves. Serve hot over jasmine rice.",
      category: "dinner"
    },
    {
      id: nanoid(),
      title: "Homemade Chocolate Chip Cookies",
      chef: "Pastry Passion",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1000&auto=format&fit=crop",
      desc: "The perfect chocolate chip cookies with a soft, chewy center and crispy edges. These classic treats are simple to make but impossible to resist!",
      ingredients: "1 cup unsalted butter (softened), 3/4 cup granulated sugar, 3/4 cup brown sugar, 2 large eggs, 1 tsp vanilla extract, 2 1/4 cups all-purpose flour, 1 tsp baking soda, 1/2 tsp salt, 2 cups chocolate chips",
      instructions: "Preheat oven to 375°F. Line baking sheets with parchment paper. In a large bowl, cream together butter and both sugars until light and fluffy. Beat in eggs one at a time, then stir in vanilla. In separate bowl, combine flour, baking soda, and salt. Gradually add to butter mixture and mix well. Fold in chocolate chips. Drop by rounded tablespoons onto prepared baking sheets. Bake for 9-11 minutes until edges are golden. Allow cookies to cool on baking sheet for 2 minutes before moving to wire rack.",
      category: "dessert"
    },
    {
      id: nanoid(),
      title: "Mediterranean Quinoa Salad",
      chef: "Health Guru",
      image: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?q=80&w=1000&auto=format&fit=crop",
      desc: "A refreshing and nutritious salad combining protein-rich quinoa with Mediterranean flavors. Perfect for meal prep and healthy lunches.",
      ingredients: "1 cup quinoa, 2 cups water, 1 cucumber (diced), 1 cup cherry tomatoes (halved), 1/2 red onion (finely diced), 1/2 cup kalamata olives, 1/2 cup feta cheese, 1/4 cup fresh parsley (chopped), 3 tbsp olive oil, 2 tbsp lemon juice, 1 tsp dried oregano, Salt and pepper to taste",
      instructions: "Rinse quinoa thoroughly. Combine quinoa and water in a saucepan. Bring to boil, reduce heat, cover and simmer for 15 minutes. Remove from heat and let stand covered for 5 minutes. Fluff with fork and let cool. In a large bowl, combine cooled quinoa, cucumber, tomatoes, red onion, olives, feta cheese, and parsley. In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper. Pour dressing over salad and toss to combine. Serve chilled or at room temperature.",
      category: "lunch"
    },
    {
      id: nanoid(),
      title: "Spicy Veggie Tacos",
      chef: "Taco Tuesday",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1000&auto=format&fit=crop",
      desc: "Flavorful vegetarian tacos packed with roasted vegetables and topped with a zesty avocado crema. These crowd-pleasers are perfect for weeknight dinners.",
      ingredients: "1 sweet potato (cubed), 1 bell pepper (sliced), 1 red onion (sliced), 1 zucchini (sliced), 2 tbsp olive oil, 2 tsp chili powder, 1 tsp cumin, 1/2 tsp paprika, Salt and pepper to taste, 8 small corn tortillas, For avocado crema: 1 ripe avocado, 1/4 cup sour cream, 1 lime (juiced), 2 tbsp cilantro (chopped), 1 jalapeño (optional)",
      instructions: "Preheat oven to 425°F. Toss vegetables with olive oil and spices. Spread on baking sheet in single layer. Roast for 25-30 minutes until tender, stirring halfway. Meanwhile, make avocado crema by blending all ingredients until smooth. Warm tortillas in a dry skillet or directly over gas flame. Assemble tacos with roasted vegetables and drizzle with avocado crema. Top with extra cilantro, lime wedges, and hot sauce if desired.",
      category: "dinner"
    }
  ];

  const [data, setdata] = useState([]);

  useEffect(() => {
    // Get recipes from localStorage or use sample recipes if none exist
    const storedRecipes = JSON.parse(localStorage.getItem("recipes"));
    
    if (storedRecipes && storedRecipes.length > 0) {
      // Use existing recipes from localStorage
      setdata(storedRecipes);
    } else {
      // No recipes in localStorage, use sample recipes
      setdata(sampleRecipes);
      // Save sample recipes to localStorage
      localStorage.setItem("recipes", JSON.stringify(sampleRecipes));
    }
  }, [])

  // useEffect(() => {
  //   setdata(JSON.parse(localStorage.getItem("recipes")) || [] )
  // }, [])
  

  return (
    <recipeContext.Provider value={{ data, setdata }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;

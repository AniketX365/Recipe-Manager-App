// storage.js
const STORAGE_KEY = "recipes";

/**
 * Load recipes from localStorage
 * @returns {Array} Array of recipe objects
 */
function loadRecipes() {
  let recipes = [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      recipes = JSON.parse(stored);
    }
  } catch (e) {
    console.error("Error loading recipes from localStorage:", e);
    recipes = [];
  }

  // Add default recipe if none exist
  if (!recipes || recipes.length === 0) {
    const defaultRecipe = {
      id: Date.now(),
      title: "Aniket's Special Potato Sabji",
      description: "Delicious potato curry for two people",
      ingredients: ["Potato", "Onion", "Tomato", "Spices"],
      steps: ["Chop vegetables", "Cook onions", "Add spices and potato", "Simmer until done"],
      prepTime: 30,
      difficulty: "Easy",
      imageUrl: "" // Optional: add default image URL
    };
    recipes = [defaultRecipe];
    saveRecipes(recipes);
  }

  return recipes;
}

/**
 * Save recipes array to localStorage
 * @param {Array} recipes 
 */
function saveRecipes(recipes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
  } catch (e) {
    console.error("Error saving recipes to localStorage:", e);
  }
}

/**
 * Add a new recipe
 * @param {Object} recipe 
 */
function addRecipe(recipe) {
  const recipes = loadRecipes();
  recipe.id = Date.now(); // ensure unique id
  recipes.push(recipe);
  saveRecipes(recipes);
}

/**
 * Update an existing recipe by id
 * @param {Number} id 
 * @param {Object} updatedData 
 */
function updateRecipe(id, updatedData) {
  const recipes = loadRecipes();
  const index = recipes.findIndex(r => r.id === id);
  if (index !== -1) {
    recipes[index] = { ...recipes[index], ...updatedData };
    saveRecipes(recipes);
  } else {
    console.warn(`Recipe with id ${id} not found.`);
  }
}

/**
 * Delete a recipe by id
 * @param {Number} id 
 */
function deleteRecipe(id) {
  let recipes = loadRecipes();
  recipes = recipes.filter(r => r.id !== id);
  saveRecipes(recipes);
}

// Export functions (if using modules)
// export { loadRecipes, saveRecipes, addRecipe, updateRecipe, deleteRecipe };

// Example usage:
// let recipes = loadRecipes();
// addRecipe({ title: "New Recipe", description: "Test", ingredients: [], steps: [], prepTime: 10, difficulty: "Easy", imageUrl: "" });
// updateRecipe(recipes[0].id, { prepTime: 35 });
// deleteRecipe(recipes[0].id);

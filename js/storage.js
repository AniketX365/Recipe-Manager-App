const STORAGE_KEY = "recipes";

function loadRecipes() {
  let recipes = [];
  try {
    recipes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch(e) {
    console.error("Error loading recipes from localStorage", e);
    recipes = [];
  }

  if(recipes.length === 0){
    const candidateRecipe = {
      id: Date.now(),
      title: "Aniket's Special Potato Sabji",
      description: "Delicious potato curry for two people",
      ingredients: ["Potato","Onion","Tomato","Spices"],
      steps: ["Chop vegetables","Cook onions","Add spices and potato","Simmer until done"],
      prepTime: 30,
      difficulty: "Easy",
      imageUrl: ""
    };
    recipes.push(candidateRecipe);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
  }
  return recipes;
}

function saveRecipes(recipes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

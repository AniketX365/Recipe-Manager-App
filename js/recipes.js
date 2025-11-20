function addRecipe(recipe) {
  const recipes = loadRecipes();
  recipes.push(recipe);
  saveRecipes(recipes);
}

function updateRecipe(updatedRecipe) {
  const recipes = loadRecipes();
  const index = recipes.findIndex(r => r.id === updatedRecipe.id);
  if(index > -1){
    recipes[index] = updatedRecipe;
    saveRecipes(recipes);
  }
}

function deleteRecipeById(id) {
  let recipes = loadRecipes();
  recipes = recipes.filter(r => r.id !== id);
  saveRecipes(recipes);
}

function getRecipeById(id) {
  const recipes = loadRecipes();
  return recipes.find(r => r.id === id);
}

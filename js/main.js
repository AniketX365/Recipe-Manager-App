/* -------------------------------
   MAIN.JS - Recipe Manager App
---------------------------------*/

// ====== INITIAL SETUP ====== //
let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

// Add sample recipe if none exists
if (recipes.length === 0) {
  const sampleRecipe = {
    id: Date.now(),
    title: "Potato Sabji",
    description: "A simple, delicious potato dish",
    ingredients: ["Potato","Onion","Spices","Oil"],
    steps: ["Chop potatoes","Fry onions","Add spices","Cook potatoes"],
    prepTime: 30,
    difficulty: "Easy",
    imageUrl: "images/default.jpg"
  };
  recipes.push(sampleRecipe);
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

/* ====== HOME PAGE: DISPLAY RECIPE CARDS ====== */
function displayRecipes(list) {
  const container = document.querySelector('.recipes-container');
  if(!container) return;

  container.innerHTML = '';
  list.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <img src="${recipe.imageUrl}" alt="${recipe.title}">
      <div class="overlay">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        <a href="recipe.html?id=${recipe.id}" class="btn">View Recipe</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Search & Filter
function filterRecipes() {
  const searchInput = document.getElementById('search');
  const filterSelect = document.getElementById('difficultyFilter');
  let filtered = recipes;

  if(searchInput) {
    const term = searchInput.value.toLowerCase();
    filtered = filtered.filter(r => r.title.toLowerCase().includes(term));
  }

  if(filterSelect && filterSelect.value !== "All") {
    filtered = filtered.filter(r => r.difficulty === filterSelect.value);
  }

  displayRecipes(filtered);
}

// Attach search & filter listeners
const searchInput = document.getElementById('search');
if(searchInput) searchInput.addEventListener('input', filterRecipes);
const filterSelect = document.getElementById('difficultyFilter');
if(filterSelect) filterSelect.addEventListener('change', filterRecipes);

// Initial display
displayRecipes(recipes);


/* ====== RECIPE DETAIL PAGE ====== */
function loadRecipeDetail() {
  const recipeId = new URLSearchParams(window.location.search).get('id');
  if(!recipeId) return;

  const recipe = recipes.find(r => r.id == recipeId);
  if(!recipe) return;

  const img = document.querySelector('.recipe-detail img');
  const titleH2 = document.querySelector('.recipe-detail h2');
  const prepTimeElem = document.getElementById('prepTime');
  const difficultyElem = document.getElementById('difficulty');
  const descElem = document.getElementById('description');
  const ingredientsElem = document.getElementById('ingredientsList');
  const stepsElem = document.getElementById('stepsList');
  const deleteBtn = document.getElementById('deleteBtn');
  const editBtn = document.getElementById('editBtn');

  if(img) img.src = recipe.imageUrl;
  if(titleH2) titleH2.textContent = recipe.title;
  if(prepTimeElem) prepTimeElem.textContent = recipe.prepTime + " min";
  if(difficultyElem) difficultyElem.textContent = recipe.difficulty;
  if(descElem) descElem.textContent = recipe.description;

  if(ingredientsElem) {
    ingredientsElem.innerHTML = '';
    recipe.ingredients.forEach(i => {
      const li = document.createElement('li');
      li.textContent = i;
      ingredientsElem.appendChild(li);
    });
  }

  if(stepsElem) {
    stepsElem.innerHTML = '';
    recipe.steps.forEach((s, idx) => {
      const li = document.createElement('li');
      li.textContent = s;
      stepsElem.appendChild(li);
    });
  }

  if(deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      const updatedRecipes = recipes.filter(r => r.id != recipeId);
      localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
      window.location.href = 'index.html';
    });
  }

  if(editBtn) {
    editBtn.href = `add-edit.html?id=${recipeId}`;
  }
}

if(document.querySelector('.recipe-detail')) loadRecipeDetail();

/* ====== ADD / EDIT RECIPE PAGE ====== */
const recipeForm = document.getElementById('recipeForm');
if(recipeForm) {
  const urlParams = new URLSearchParams(window.location.search);
  const editId = urlParams.get('id');

  if(editId) {
    const recipeToEdit = recipes.find(r => r.id == editId);
    if(recipeToEdit) {
      document.getElementById('title').value = recipeToEdit.title;
      document.getElementById('description').value = recipeToEdit.description;
      document.getElementById('ingredients').value = recipeToEdit.ingredients.join(', ');
      document.getElementById('steps').value = recipeToEdit.steps.join(', ');
      document.getElementById('prepTime').value = recipeToEdit.prepTime;
      document.getElementById('difficulty').value = recipeToEdit.difficulty;
    }
  }

  recipeForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const ingredients = document.getElementById('ingredients').value.split(',').map(i => i.trim());
    const steps = document.getElementById('steps').value.split(',').map(s => s.trim());
    const prepTime = parseInt(document.getElementById('prepTime').value);
    const difficulty = document.getElementById('difficulty').value;
    const imageInput = document.getElementById('image');

    const saveRecipe = (imageUrl) => {
      if(editId) {
        const index = recipes.findIndex(r => r.id == editId);
        recipes[index] = { id: parseInt(editId), title, description, ingredients, steps, prepTime, difficulty, imageUrl };
      } else {
        recipes.push({ id: Date.now(), title, description, ingredients, steps, prepTime, difficulty, imageUrl });
      }
      localStorage.setItem('recipes', JSON.stringify(recipes));
      const targetId = editId ? editId : recipes[recipes.length-1].id;
      window.location.href = `recipe.html?id=${targetId}`;
    };

    if(imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(event) {
        saveRecipe(event.target.result);
      };
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      const existingImage = editId ? recipes.find(r => r.id == editId).imageUrl : 'images/default.jpg';
      saveRecipe(existingImage);
    }
  });
}

/* ====== GALLERY PAGE ====== */
function displayGallery() {
  const galleryContainer = document.querySelector('.gallery-container');
  if(!galleryContainer) return;

  galleryContainer.innerHTML = '';
  recipes.forEach(recipe => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
      <img src="${recipe.imageUrl}" alt="${recipe.title}">
      <div class="overlay">${recipe.title}</div>
    `;
    div.addEventListener('click', () => {
      window.location.href = `recipe.html?id=${recipe.id}`;
    });
    galleryContainer.appendChild(div);
  });
}

if(document.querySelector('.gallery-container')) displayGallery();

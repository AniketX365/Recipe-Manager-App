document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("galleryContainer");
  if(!galleryContainer) return;

  const recipes = loadRecipes();
  galleryContainer.innerHTML = "";
  recipes.forEach(r => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `<img src="${r.imageUrl || 'https://via.placeholder.com/250x150'}" alt="${r.title}">
      <div class="overlay">
        <h3>${r.title}</h3>
        <p>⏱️ ${r.prepTime} min | 🔥 ${r.difficulty}</p>
      </div>`;
    galleryContainer.appendChild(card);
  });
});

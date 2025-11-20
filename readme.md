# 🍴 Recipe Manager App

A **modern, interactive Recipe Manager web app** built with **HTML, CSS, and JavaScript**, fully powered by **localStorage**. Add, edit, delete, and view recipes with images and detailed steps — all in a responsive card-based UI with a foodie/restaurant menu vibe.

---

## 🌟 Features

### General
- Fully **responsive** and works on desktop & mobile.
- Modern **foodie/restaurant menu theme** with gradients, hover effects, and interactive UI.
- Works entirely on the client side — **no backend needed**.
- Persistent data stored in **browser localStorage**.

### Views / Pages
1. **Home Page (`index.html`)**
   - Grid layout with **recipe cards**.
   - Hover over recipe cards to reveal details.
   - **Search bar** to find recipes by title.
   - **Filter** by difficulty: All / Easy / Medium / Hard.
   - Click a card to navigate to **recipe detail page**.

2. **Recipe Detail Page (`recipe.html`)**
   - Shows a **large recipe image**.
   - Gradient-styled recipe title with **Edit button** in front.
   - Displays **prep time, difficulty, description, ingredients, and steps**.
   - **Edit button** → navigates to Add/Edit page.
   - **Delete button** → removes recipe and redirects home.

3. **Add/Edit Recipe Page (`add-edit.html`)**
   - Add new recipes or edit existing ones.
   - Fields: Title, Description, Ingredients, Steps, Prep Time, Difficulty, Optional Image URL.
   - **Client-side validation** to prevent invalid submissions.
   - Redirects to recipe detail page after saving.

4. **Gallery Page (`gallery.html`)**
   - Displays **all recipe images** in a clean **grid layout**.
   - Hover overlay shows the **recipe title**.
   - Clicking an image navigates to the **recipe detail page**.
   - Fully dynamic: reflects all recipes in **localStorage**.
   - Responsive design for mobile and desktop.

---

## 💾 Data & Local Storage

- All recipes stored under the **`recipes` key** in `localStorage`.
- Recipe JSON structure:

```json
{
  "id": 123456789,
  "title": "Potato Sabji",
  "description": "A simple, delicious potato dish",
  "ingredients": ["Potato", "Onion", "Spices", "Oil"],
  "steps": ["Chop potatoes", "Fry onions", "Add spices", "Cook potatoes"],
  "prepTime": 30,
  "difficulty": "Easy",
  "imageUrl": "images/potato-sabji.jpg"
}
```

- On **first load**, a sample recipe is automatically added.
- Any new recipe added via the form is appended to this localStorage array.

---

## 🛠️ Technologies Used

- **HTML5** – semantic markup, structured pages.
- **CSS3** – modern UI, gradients, card hover effects, responsive design.
- **JavaScript (ES6)** – CRUD operations, localStorage handling, dynamic rendering.
- **No external frameworks** — pure vanilla JS for learning and simplicity.

---

## 📂 Project Structure

```
recipe-manager/
│
├─ index.html              # Home page
├─ recipe.html             # Recipe detail page
├─ add-edit.html           # Add/Edit recipe form
├─ gallery.html            # Gallery of all recipe images
│
├─ css/
│  └─ style.css            # Main stylesheet
│
├─ js/
│  ├─ main.js              # Main JS logic (CRUD, search, filter)
│  └─ gallery.js           # Dynamic gallery rendering
│
├─ images/
│  └─ foodie-bg.jpg        # Background image
│  └─ sample-recipes/      # Optional recipe images
│
├─ .gitattributes          # Git attributes
└─ README.md
```

---

## 🚀 How to Run

1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/recipe-manager.git
```

2. **Open `index.html`** in any modern browser.  
   - No server required; runs entirely in browser.  
   - Ensure `images/` folder and `style.css` are in place.

3. **Add a recipe**:  
   - Click **Add Recipe** → fill the form → save.  

4. **View recipe**:  
   - Click on any recipe card to see details.  

5. **Edit / Delete recipe**:  
   - On recipe detail page, use **Edit** to modify or **Delete** to remove.  

6. **Search / Filter**:  
   - Use the search bar to find recipes by title.  
   - Filter recipes by difficulty using the dropdown.

7. **Gallery**:  
   - Navigate to `gallery.html` to see all recipe images.  
   - Click on any image to view its recipe details.

---

## ⚡ Assumptions & Limitations

- **Images:** Uses URL paths for images; local uploads are simulated via file path input.  
- **LocalStorage Only:** All data stored in browser; clearing storage removes all recipes.  
- **No Backend:** Pure frontend app; no server-side validation.  
- **Single Device:** Data is browser-specific; not synced across devices.  

---

## 🔧 Known Issues

- Very large images may overflow on mobile devices.  
- Ingredients and steps must be comma-separated in Add/Edit form.  
- No authentication — any user can edit/delete all recipes.

---

## 🎨 Visual Style

- **Foodie background** with dark overlay for readability.  
- **Gradient titles** and **hover animations** for interactivity.  
- **Buttons:** Edit → green gradient, Delete → orange gradient, Add/Submit → green.  
- **Responsive layout**: cards adjust for all screen sizes.  

---

## 👩‍🍳 Author

Aniket Ghaturle – Full-Stack Developer & Foodie  

🍴 “Code delicious apps, one recipe at a time.”  

---

## 📌 License

MIT License – feel free to use, modify, and distribute.  
<!-- /* How to run the app*/ -->

## 🚀 How to Run the App

1. **Clone or Download the Project**
```bash
git clone https://github.com/yourusername/recipe-manager.git
```
Or download the ZIP and extract the files.

2. **Open the App**
- Double-click `index.html` or right-click → Open with → Your browser (Chrome, Firefox, Edge, etc.).
- No server required — the app runs entirely in the browser using **localStorage**.

3. **Test Functionality**
- **Home Page:** Browse recipe cards, use search/filter.
- **Add Recipe:** Click **Add Recipe**, fill out the form, and submit.
- **View Recipe:** Click a card to see full details.
- **Edit/Delete:** On recipe detail page, use **Edit** or **Delete** buttons.
- **Gallery:** Navigate to `gallery.html` to see all recipe images in a grid. Click an image to view the recipe.

4. **LocalStorage**
- Recipes are stored automatically in the browser.  
- Clearing browser storage will remove all saved recipes.

> ✅ Works offline — all features are client-side.

<!-- Data stucture in localSturage -->

## 💾 Data Structure in LocalStorage

All recipes are stored in the browser under a single key:  

```text
Key: "recipes"
Value: JSON array of recipe objects
```

### **Recipe Object Structure**
Each recipe is represented as a JavaScript object:

```json
{
  "id": 123456789,             // Unique identifier (timestamp or random number)
  "title": "Potato Sabji",     // Recipe title
  "description": "A simple, delicious potato dish", // Short description
  "ingredients": [
    "Potato",
    "Onion",
    "Spices",
    "Oil"
  ],                           // List of ingredients
  "steps": [
    "Chop potatoes",
    "Fry onions",
    "Add spices",
    "Cook potatoes"
  ],                           // Step-by-step instructions
  "prepTime": 30,              // Preparation time in minutes
  "difficulty": "Easy",        // Difficulty level: Easy / Medium / Hard
  "imageUrl": "images/potato-sabji.jpg" // Optional image path
}
```

### **Example Stored in LocalStorage**
```json
[
  {
    "id": 1699999999999,
    "title": "Potato Sabji",
    "description": "A simple, delicious potato dish",
    "ingredients": ["Potato","Onion","Spices","Oil"],
    "steps": ["Chop potatoes","Fry onions","Add spices","Cook potatoes"],
    "prepTime": 30,
    "difficulty": "Easy",
    "imageUrl": "images/potato-sabji.jpg"
  },
  {
    "id": 1699999999998,
    "title": "Veggie Stir Fry",
    "description": "Quick and healthy vegetable stir fry",
    "ingredients": ["Broccoli","Carrot","Capsicum","Soy Sauce"],
    "steps": ["Chop veggies","Heat oil","Stir fry","Add sauce"],
    "prepTime": 20,
    "difficulty": "Medium",
    "imageUrl": "images/veggie-stirfry.jpg"
  }
]
```

### **Notes**
- `id` is used to uniquely identify each recipe for **editing, deleting, and viewing details**.  
- Any new recipe added via the form is appended to this array.  
- Clearing localStorage will remove all recipes.  
- This structure ensures **dynamic rendering** on all pages: Home, Recipe Detail, and Gallery.  

<!-- Assumptions and Limitations -->

## ⚡ Assumptions & Limitations

1. **Images**  
   - Recipes use either an **image URL** or a local image path.  
   - Local file uploads are simulated via the path; actual file upload to server is not supported.  

2. **LocalStorage Only**  
   - All recipe data is stored in the browser's **localStorage**.  
   - Clearing browser storage will remove all recipes permanently.  
   - Data is **not shared across devices**.  

3. **Client-Side Validation**  
   - Form inputs are validated on the client side only.  
   - No server-side validation exists, so data integrity depends on user input.  

4. **Ingredients & Steps Format**  
   - Ingredients and steps must be entered as **comma-separated lists** in the Add/Edit form.  
   - Multi-line text is not automatically parsed.  

5. **No Authentication**  
   - Any user can **add, edit, or delete** recipes.  
   - There is no login system; changes are globally applied in the browser.  

6. **Image & Layout Limitations**  
   - Very large images may overflow or appear cropped on mobile screens.  
   - The layout is responsive but may require minor adjustments for extreme screen sizes.  

7. **Browser Compatibility**  
   - Tested on modern browsers (Chrome, Firefox, Edge).  
   - Older browsers may not fully support ES6 or CSS Grid features.  

<!-- Known issues -->

## 🔧 Known Issues

1. **Large Images**  
   - Very large recipe images may overflow or appear cropped on mobile devices.  
   - Recommend resizing images before adding to maintain layout consistency.

2. **Ingredients & Steps Formatting**  
   - Ingredients and steps must be entered as **comma-separated lists**.  
   - Improper formatting may result in display issues on the recipe detail page.

3. **LocalStorage Limitations**  
   - Data is stored per browser; clearing browser storage or using incognito mode will remove recipes.  
   - No cross-device synchronization exists.

4. **No Authentication**  
   - All users can edit or delete any recipe.  
   - Changes are applied globally in the local browser instance.

5. **Browser Compatibility**  
   - Designed for modern browsers supporting **ES6**, **CSS Grid**, and **Flexbox**.  
   - Older browsers may not render layout or interactivity correctly.

6. **Form Validation**  
   - Only basic client-side validation exists; invalid entries may bypass some checks.  

7. **Gallery Images**  
   - If a recipe has no image URL, a default placeholder is used, which may not fit all layouts perfectly.

const API_KEY = "8e5d8530181c43ce9d5a06019795e0dd";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes) {
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        const recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        const recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        const recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `
            <strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}
        `;

        const recipeLinkEl = document.createElement("a")
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);
    });
}

async function getRecipes() {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
        const data = await response.json();

        return data.recipes || [];
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
}


async function init() {
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

init();

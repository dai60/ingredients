const recipes = document.querySelectorAll(".recipe");
const portionSlider = document.getElementById("portion-slider");

const menu = {
    chicken: [
        { name: "Vištienos krūtinėlės", count: 250, unit: "g" },
        { name: "Salotos", count: 100, unit: "g" },
        { name: "Alyvuogių aliejus", count: 1, unit: "šaukštų" },
    ],
    cake: [
        { name: "Miltai", count: 250, unit: "g" },
        { name: "Kiaušiniai", count: 1, unit: "vnt." },
        { name: "Mėlynės", count: 50, unit: "g" },
        { name: "Cukrus", count: 1, unit: "šaukštelių" },
    ],
    pasta: [
        { name: "Makaronai", count: 100, unit: "g" },
        { name: "Malta mėsa", count: 150, unit: "g" },
        { name: "Pomidorų pasta", count: 100, unit: "g" },
    ],
};

portionSlider.addEventListener("input", function (event) {
    updateIngredients();
});

function selectRecipe(recipe) {
    recipes.forEach(element => {
        element.classList.remove("recipe-selected");
        element.firstElementChild.classList.add("scale-0");
        element.firstElementChild.classList.remove("scale-100");
    });

    const element = document.getElementById(recipe);
    element.classList.add("recipe-selected");
    element.firstElementChild.classList.add("scale-100");
    element.firstElementChild.classList.remove("scale-0");

    updateIngredients();
}

function selectedRecipe() {
    return document.querySelector(".recipe-selected").id;
}

function updateIngredients() {
    const ingredients = document.getElementById("ingredients");
    const portions = Number(portionSlider.value);
    ingredients.innerHTML = writeIngredients(selectedRecipe(), portions);
}

function writeIngredients(recipe, portions) {
    let ingredients = [];
    for (const ingredient of menu[recipe]) {
        const count = ingredient.count * portions;
        const p = `<p class="text-xs pb-1">${ingredient.name}: <span class="font-bold">${count} ${ingredient.unit}</span></p>`;
        ingredients.push(p);
    }
    return ingredients.join("\n");
}

selectRecipe("cake");

"use strict";
let searchInput = document.querySelector(`#searchInput`);
let RecipeSelect = document.querySelector(`#RecipeSelect`);
let cardData = document.querySelector(`#cardData`);

(function () {
 const recipesList = [ "carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber",
        "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin",
        "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini",
        "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili",
        "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano",
        "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple",
        "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry",
        "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit",
        "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange",
        "papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate",
        "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta",
        "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake",
        "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala",
        "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup",
        "hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna",
        "poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts",
        "rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb",
        "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs" ];

  let selectOptions = ``;
  for (let option of recipesList) {
    selectOptions += `
            <option value="${option}">${option}</option>
        `;
  }
  RecipeSelect.innerHTML = selectOptions;
})();

async function getRecipes(searchTerm = `pizza`) {
  try {
    let response = await fetch(
      `https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`,
    );
    response = await response.json();
    ShowRecipes(response.data.recipes);
  } catch {
    console.log(`error`);
  }
}
getRecipes();

function ShowRecipes(RecipesArray) {
  let cardContent = ``;
  for (let recipe of RecipesArray) {
    cardContent += `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card h-100 shadow-sm border-0 text-center">
                <img
                    src="${recipe.image_url}"
                    alt="${recipe.title}"
                    class="img-fluid"
                    style="height:180px; object-fit:contain;"
                >
                <div class="card-body text-center text-muted">
                    <h5 class="card-title fw-bold fs-5 pt-3">
                        ${recipe.title}
                    </h5>
                    <p class="text-muted mb-3">
                        ${recipe.publisher}
                    </p>
                    <button class="btn btn-warning w-75 text-white m-auto mb-4">
                        See More
                    </button>
                </div>
            </div>
        </div>`;
  }
  cardData.innerHTML = cardContent;
}

searchInput.addEventListener(`input`, function (e) {
  getRecipes(e.target.value.toLowerCase());
});

RecipeSelect.addEventListener(`change`, function (e) {
  getRecipes(e.target.value.toLowerCase());
});

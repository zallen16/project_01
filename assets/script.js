// variables for api url, api key if needed, and certain parameters
var spoonAPIKey = "5d4a78a65dbf4c8cb0b08b069647c103"
// variables for search button
searchInput = document.querySelector("#ingredient-input")
searchBtn = document.querySelector("#search-button")
// any other variables needed

// add event listener to search button to fetch data
searchBtn.addEventListener("click", getRecipe);


// fetch api data
function getRecipe() {

    var lookUp = searchInput.value;

    var spoonURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${lookUp}&apiKey=${spoonAPIKey}`
    fetch(spoonURL)
    .then(function(response) {
        return response.json();
        //console.log(response);
    })
    .then(function(data) {
        console.log(data);
    })
}

// console log the results

// put results on page in html cards

// make sort by function

// make function to save shopping list items to local storage
// then displaying those items on the page in a html card


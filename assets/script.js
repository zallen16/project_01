// variables for api url, api key if needed, and certain parameters
var spoonAPIKey = "5d4a78a65dbf4c8cb0b08b069647c103"
var musicAPI =  `http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases`
// variables for search button
searchInput = document.querySelector("#ingredient-input")
searchBtn = document.querySelector("#search-button")
// any other variables needed
var recipeName1 = document.querySelector(".recipeName1")
var recipeName2 = document.querySelector(".recipeName2")
var recipeName3 = document.querySelector(".recipeName3")
var recipeName4 = document.querySelector(".recipeName4")
var recipeName5 = document.querySelector(".recipeName5")
var recipeImg = document.querySelector(".recipeImg")
var recipeIdCard = document.querySelector(".recipeID1")
var picture1 = document.getElementById("picture1")
var picture2 = document.getElementById("picture2")
var picture3 = document.getElementById("picture3")
var picture4 = document.getElementById("picture4")
var picture5 = document.getElementById("picture5")
// add event listener to search button to fetch data
searchBtn.addEventListener("click", getRecipe);


// fetch api data
function getRecipe() {

    var lookUp = searchInput.value;
    
    var spoonURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${lookUp}&number=5&apiKey=${spoonAPIKey}`
    //var spoonURL2 = `https://api.spoonacular.com/recipes/633338/card?&apiKey=${spoonAPIKey}`
    fetch(spoonURL)
    .then(function(response) {
        return response.json();
        //console.log(response);
    })
    .then(function(data) {
        console.log(data);

        recipeName1.textContent = data[0].title;
        recipeName2.textContent = data[1].title;
        recipeName3.textContent = data[2].title;
        recipeName4.textContent = data[3].title;
        recipeName5.textContent = data[4].title;
        recipeIdCard.textContent = data[0].id
        picture1.src = data[0].image;
        picture2.src = data[1].image;
        picture3.src = data[2].image;
        picture4.src = data[3].image;   
        picture5.src = data[4].image;

    })
}

// function getRecipeCard( {

//     var recipeID = data[i].id;
//     for (var i = 0; i < data.length; i++) {

//     }
// })
// fetch music api data
// function getMusic() {

// fetch(musicAPI)
// .then(function(response) {
// console.log(response)
//     //return response.json();
// })
// .then(function(data) {
//     console.log(data);
// })
// }

// console log the results

// put results on page in html cards


// make sort by function

// make function to save shopping list items to local storage
// then displaying those items on the page in a html card

document.addEventListener('DOMContentLoaded', function () {
    var savedValue = localStorage.getItem('inputValue');

    var inputElement = document.getElementById('inputElement');
    if (inputElement) {
        inputElement.value = savedValue || '';
    }

    var saveButton = document.getElementById('saveButton');

    saveButton.addEventListener('click', function () {
        var inputElement = document.getElementById('inputElement');

        if (inputElement) {
            var inputValue = inputElement.value;

            localStorage.setItem('inputValue', inputValue);

            console.log('Input value:', inputValue);
        }
    });
});


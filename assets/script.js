// variables for api url, api key if needed, and certain parameters
var spoonAPIKey = "5d4a78a65dbf4c8cb0b08b069647c103"
var tubeAPIKey = "AIzaSyAbk0ppUBV5Bv5aBCFVUP2Bz5i6_TUzQCE"
var musicAPI =  `http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases`
// variables for search button
searchInput = document.querySelector("#ingredient-input")
searchBtn = document.querySelector("#search-button")
// any other variables needed
var cardWrapper = document.querySelector("#cards")
var video = document.querySelector("#video");


// add event listener to search button to fetch data
searchBtn.addEventListener("click", function(){
    getRecipe();
    getMusic();
});


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

        Promise.all(data.map(function(recipe) {
            return fetch(`https://api.spoonacular.com/recipes/${recipe.id}/card?&apiKey=${spoonAPIKey}`)
            .then(function(response) {
                return response.json();
            })
        }))
        .then(function(recipeImages) {
            console.log(recipeImages);
            cardWrapper.innerHTML = "";
            for (var i = 0; i < data.length; i++) {
    
                var cardHtml = `
                <div class="card">
                    <div class="card-container">
                        <h3><b>${data[i].title}</b></h3>
                        <img src =${data[i].image}>
                        <button class="recipeCardBtn">Show Recipe</button>
                        <div class="hidden"><img class="recipeImg" src=${recipeImages[i].url}></div>
                    </div>
                </div>
                `
                cardWrapper.innerHTML += cardHtml;
                // var recipeID = data[i].id;
                // var recipeURL = `https://api.spoonacular.com/recipes/${recipeID}/information?&apiKey=${spoonAPIKey}`
               
            }
        })

    })
}

// fetch music api data

function getMusic() {
    
    var lookUp = searchInput.value + " music";
    
    var tubeURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&q=${lookUp}&key=${tubeAPIKey}`
    fetch(tubeURL)
    .then(function(response) {
        return response.json();
        //console.log(response);
    })
    .then(function(data) {
            var videoUrl;
            if (data.items.length) {

                var randomIndex = Math.floor(Math.random() * data.items.length);
                var videoId = data.items[randomIndex].id.videoId;
                var videoUrl = `https://www.youtube.com/embed/${videoId}`;
            } else {
                videoUrl = "https://www.youtube.com/embed/7dTFfuDpmsY"
            }
            var videoHtml = `
            <iframe width="560" height="315" src=${videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            console.log(data);
            video.innerHTML = videoHtml;
          
})
}

//hide recipe cards until recipe is clicked
cardWrapper.addEventListener("click", function(event) {
console.log(event.target);
   if (event.target.matches(".recipeCardBtn")) {
       var recipeWrapper = event.target.nextElementSibling;
       recipeWrapper.classList.toggle("hidden");
   }
   if (event.target.textContent === "Show Recipe") {
       event.target.textContent = "Hide Recipe";
   }    else {
         event.target.textContent = "Show Recipe";
   }
})



// console log the results

// put results on page in html cards


// make sort by function

// variables for music api

// add event listener to search button for 2nd function
searchBtn.addEventListener("click", getSong);

// fetch music api data
function getSong() {
    
    var musicLookUp = searchInput.value;

    var musicURL = 'http://musicbrainz.org/ws/2/url/?query=${musicLookUp}'
    fetch(musicURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
}

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


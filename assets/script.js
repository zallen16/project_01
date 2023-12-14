// variables for api url, api key if needed, and certain parameters
// variables for search button
// any other variables needed

// add event listener to search button to fetch data

// fetch api data

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


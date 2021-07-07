// TODO: Create a variable to hold the count
var count= 0;

// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.

var c1el = document.querySelector ('#count')
var i1el = document.querySelector ('#increment')
var d1el = document.querySelector ('#decrement')

// TODO: Create a function that displays the current count on the page
let setCounter = function() {
    c1el.textContent = count;
}

// TODO: Create an addEventListener that will increment the count on click
// and calls the function to display the current count
increment.addEventListener("click",function() {
    count ++;
    setCounterText();
};
decrement.addEventListener("click",function)



// TODO: Create an addEventListener that will decrement the count on click
// and calls the function to display the current count

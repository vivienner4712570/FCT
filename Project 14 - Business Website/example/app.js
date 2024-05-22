// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    alert("Only real drip connesours use this shop!")
}
function displayDog() {
    document.getElementById("dogContent").style.display = "block";
    document.getElementById("catContent").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function displayCat() {
    document.getElementById("dogContent").style.display = "none";
    document.getElementById("catContent").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
}
function redBackground() {
    document.body.style.backgroundColor = "pink";
    console.log(document)
}
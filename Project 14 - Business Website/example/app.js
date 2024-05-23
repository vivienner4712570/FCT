// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    alert("You have unlocked the 10% discount!")
}
function displayShirt() {
    document.getElementById("shirtContent").style.display = "block";
    document.getElementById("sweatshirtContent").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function displaySweatshirt() {
    document.getElementById("shirtContent").style.display = "none";
    document.getElementById("sweatshirtContent").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
}
function blueBackground() {
    document.body.style.backgroundColor = "blue";
    console.log(document)
}
// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    alert("Skibidi toilet!")
}
function displayDog() {
    document.getElementById("MCContent").style.display = "block";
    document.getElementById("FNContent").style.display = "none";
    document.getElementById("SUSContent").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function displayCat() {
    document.getElementById("MCContent").style.display = "none";
    document.getElementById("FNContent").style.display = "block";
    document.getElementById("SUSContent").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function greenBackground() {
    document.body.style.backgroundColor = "green";
    console.log(document)
}
function displaySUS() {
    document.getElementById("MCContent").style.display = "none";
    document.getElementById("FNContent").style.display = "none";
    document.getElementById("SUSContent").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
}
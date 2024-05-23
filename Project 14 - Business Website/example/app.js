// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function yellowCar() {
    document.getElementById("yellowCar").style.display = "block";
    document.getElementById("blueCar").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function blueCar() {
    document.getElementById("blueCar").style.display = "block";
    document.getElementById("yellowCar").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.textDecorationColor = "white";
    console.log(document)
}
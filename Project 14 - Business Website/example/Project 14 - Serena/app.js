// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    alert("Click Something!!")
}
function vanillaIcecream() {
    document.getElementById("vanillaIcecream").style.display = "block";
    document.getElementById("chocolateIcecream").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function chocolateIcecream() {
    document.getElementById("vanillaIcecream").style.display = "none";
    document.getElementById("chocolateIcecream").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
}
function grayBackground() {
    document.body.style.backgroundColor = "gray";
    console.log(document)
}
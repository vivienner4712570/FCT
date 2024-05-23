// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    alert("Buy our chairs!")
}
function MetalChair() {
    document.getElementById("metalChair").style.display = "block";
    document.getElementById("woodenChair").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
    document.getElementById("table").style.display = "none";
}
function WoodenChair() {
    document.getElementById("metalChair").style.display = "none";
    document.getElementById("woodenChair").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
    document.getElementById("table").style.display = "none";
}
function table() {
    document.body.style.backgroundColor = "brown";
    document.getElementById("metalChair").style.display = "none";
    document.getElementById("woodenChair").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
    document.getElementById("table").style.display = "block";
}
// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function secretMessage() {
    alert("WHY!")
}
function Yes() {
    document.getElementById("YesContent").style.display = "block";
    document.getElementById("NoContent").style.display = "none";
    document.getElementById("defaultContent").style.display = "none";
}
function No() {
    document.getElementById("YesContent").style.display = "none";
    document.getElementById("NoContent").style.display = "block";
    document.getElementById("defaultContent").style.display = "none";
}
function GreenBackground() {
    document.body.style.backgroundColor = "green";
    console.log(document)
}
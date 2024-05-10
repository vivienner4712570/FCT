// Switch to strict mode to get more useful errors when you make mistakes.
'use strict';

function resetResult() {
    document.getElementById("LAResult").style.display = "none";
    document.getElementById("SeattleResult").style.display = "none";
    document.getElementById("MiamiResult").style.display = "none";
    document.getElementById("ChicagoResult").style.display = "none";
}

function seeResult() {
    var LA = 0;
    var Seattle = 0;
    var Miami = 0;
    var Chicago = 0;

    if (document.getElementById("hot").checked) {
        LA += 1;
        Miami += 1;
    } else if (document.getElementById("cold").checked) {
        Chicago += 1;
    } else {
        Seattle += 1;
    }

    if (document.getElementById("bus").checked) {
        Miami += 1;
    } else if (document.getElementById("car").checked) {
        LA += 1;
    } else {
        Seattle += 1;
        Chicago += 1;
    }

    if (document.getElementById("walk").checked) {
        Seattle += 1;
        Miami += 1;
    } else if (document.getElementById("drive").checked) {
        LA += 1;
    } else {
        Chicago += 1;
    }

    resetResult();

    if (LA > Seattle && LA > Miami && LA > Chicago) {
        document.getElementById("LAResult").style.display = "block";
    } else if (Seattle > LA && Seattle > Miami && Seattle > Chicago) {
        document.getElementById("SeattleResult").style.display = "block";
    } else if (Miami > LA && Miami > Seattle && Miami > Chicago) {
        document.getElementById("MiamiResult").style.display = "block";
    } else {
        document.getElementById("ChicagoResult").style.display = "block";
    }
}


winTotal = 0
lossTotal = 0

var userNum
$("#score").html(userNum);

var redNum
var blueNum
var yellowNum
var greenNum
var targetNum = target();

$("#goal").html(targetNum);
$("#red").on("click", addRed);
$("#blue").on("click", addBlue);
$("#yellow").on("click", addYellow);
$("#green").on("click", addGreen);


//function starting new game
function gameStart() {
    //sets user number to 0 and updates html to reflect that
    userNum = 0;
    $("#score").html(userNum);

    redNum = crystalNum();
    blueNum = crystalNum();
    yellowNum = crystalNum();
    greenNum = crystalNum();
    targetNum = target();

    $("#goal").html(targetNum);

    console.log(redNum);
    console.log(blueNum);
    console.log(yellowNum);
    console.log(greenNum);
    console.log(targetNum);


    //function for determining the goal number

}




function target() {
    return Math.floor(Math.random() * 102 + 19)
}


//function for determining random values of each crystal
function crystalNum() {
    return Math.floor(Math.random() * 12 + 1);
}

function addRed() {
    userNum = (userNum + redNum);
    $("#score").html(userNum);
    testWin();
    console.log(userNum);
    console.log(targetNum);
}

function addBlue() {
    userNum = (userNum + blueNum);
    $("#score").html(userNum);
    testWin();
    console.log(userNum);
    console.log(targetNum);
}

function addYellow() {
    userNum = (userNum + yellowNum);
    $("#score").html(userNum);
    testWin();
    console.log(userNum);
    console.log(targetNum);
}

function addGreen() {
    userNum = (userNum + greenNum);
    $("#score").html(userNum);
    testWin();
    console.log("usernum" + userNum);
    console.log("targetnum" + targetNum);

}



//function to add to win column and restart game

function testWin() {
    if (userNum === targetNum) {
        winGame()
    }

    else if (userNum > targetNum) {
        loseGame()
    }
}

function winGame() {
    winTotal++;
    $("#wins").html("Wins: " + winTotal);
    gameStart();

}
// function to add to loss column and restart game
function loseGame() {
    lossTotal++;
    $("#losses").html("Losses: " + lossTotal);
    gameStart();
}

gameStart();
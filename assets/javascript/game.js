//variables for win and loss
var winTotal = 0
var lossTotal = 0

// variable for the players total and displaying it to page
var userNum
$("#score").html(userNum);

//variable for each crystal value and the goal number
var redNum
var blueNum
var yellowNum
var greenNum
var targetNum

//makes each button clickable and calls the functions that tell them to add value
$("#red").on("click", addRed);
$("#blue").on("click", addBlue);
$("#yellow").on("click", addYellow);
$("#green").on("click", addGreen);

//function starting new game
function gameStart() {
    //sets user number to 0 and updates html to reflect that
    userNum = 0;
    $("#score").html(userNum);

    //giving value to the crystals and goal #
    redNum = crystalNum();
    blueNum = crystalNum();
    yellowNum = crystalNum();
    greenNum = crystalNum();
    targetNum = target();
    //changes goal number on screen
    $("#goal").html("Goal Number: " + targetNum);

    console.log(redNum);
    console.log(blueNum);
    console.log(yellowNum);
    console.log(greenNum);
    console.log(targetNum);

};

//function for giving goal # a value between 19-120
function target() {
    return Math.floor(Math.random() * 102 + 19);
};

//function for determining random values of each crystal between 1-12
function crystalNum() {
    return Math.floor(Math.random() * 12 + 1);
};

//adds red value when clicked
function addRed() {
    userNum = (userNum + redNum);
    $("#score").html(userNum);
    testWin();
    console.log(userNum);
    console.log(targetNum);
};

//adds blue value when clicked
function addBlue() {
    userNum = (userNum + blueNum);
    $("#score").html(userNum);
    testWin();
    console.log(userNum);
    console.log(targetNum);
};

//adds yellow value when clicked
function addYellow() {
    userNum = (userNum + yellowNum);
    $("#score").html(userNum);
    testWin();
    console.log(userNum);
    console.log(targetNum);
};

//adds green value when clicked
function addGreen() {
    userNum = (userNum + greenNum);
    $("#score").html(userNum);
    testWin();
    console.log("usernum" + userNum);
    console.log("targetnum" + targetNum);

};

//tests for win or loss and calls respective function
function testWin() {
    if (userNum === targetNum) {
        winGame()
    }

    else if (userNum > targetNum) {
        loseGame()
    }
};
//function to add to win column and restart game
function winGame() {
    winTotal++;
    $("#wins").html("Wins: " + winTotal);
    gameStart();

};
// function to add to loss column and restart game
function loseGame() {
    lossTotal++;
    $("#losses").html("Losses: " + lossTotal);
    gameStart();
};
//begins game
gameStart();
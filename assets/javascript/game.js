
//function for determining new game
function gameStart () {
    var userNum = 0
    var redNum = crystalNum();
    var blueNum = crystalNum();
    var yellowNum = crystalNum();
    var greenNum = crystalNum();
    var targetNum = target();

    console.log(redNum);
    console.log(blueNum);
    console.log(yellowNum);
    console.log(greenNum);
    console.log(targetNum);
}

//function for determining the goal number
function target () {
    return Math.floor(Math.random() * 102 + 19)
}


//function for determining random values of each crystal
function crystalNum() {
    return Math.floor(Math.random() * 12 + 1);
}

gameStart();

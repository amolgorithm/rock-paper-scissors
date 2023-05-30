var choices = ['rock', 'paper', 'scissors'];
var you = "";
var robot = "";
var winner = "";
var winnerFill = 255;
var title = "start";
var room = 0;
var randomStarX = [];
var randomStarY = [];

for (var i = 0; i <= 400; i++) {
    randomStarX.push(random(i));
    randomStarY.push(i);
}

var game = function() {
    if (room === 2) {
        fill();
        textSize(30);
        text("Rock, Paper, Scissors", 50, 30 + sin(Date.now() / 100));
        strokeWeight(3);
        line(0, 40, 400, 40);
        line(200, 41, 200, 400);
        textSize(25);
        fill(0, 190, 90);
        rect(0, 40, 200, 50 + sin(Date.now() / 100));
        fill(200, 200, 0);
        rect(200, 40, 200, 50 + sin(Date.now() / 100));
        fill();
        text("You", 70, 70);
        text("Robot", 270, 70);
        line(0, 80, 400, 80);
        fill(0);
        rect(20, 240, 150, 40);
        rect(20, 290, 150, 40);
        rect(20, 340, 150, 40);
        fill();
        stroke();
        text("Rock", 65, 270);
        text("Paper", 60, 320);
        text("Scissors", 50, 370);
        fill(0);
        rect(225, 240, 150, 40);
        rect(225, 290, 150, 40);
        rect(225, 340, 150, 40);
        fill();
        text("Rock", 270, 270);
        text("Paper", 265, 320);
        text("Scissors", 255, 370);
        fill(winnerFill);
        textSize(50);
        text(you, 20, 190);
        text(robot, 220, 190);
        text(winner, 67, 120);
    }
};

var chooseWinner = function() {
    if (you === choices[0] && robot === choices[1]) {
        winner = "Robot Wins";
        winnerFill = 255;
    }
    else if (you === choices[1] && robot === choices[0]) {
        winner = "You Win";
        winnerFill = 255;
    }
    else if (you === choices[2] && robot === choices[1]) {
        winner = "You Win";
        winnerFill = 255;
    }
    else if (you === choices[1] && robot === choices[2]) {
        winner = "Robot Wins";
        winnerFill = 255;
    }
    else if (you === choices[0] && robot === choices[2]) {
        winner = "You Win";
        winnerFill = 255;
    }
    else if (you === choices[2] && robot === choices[0]) {
        winner = "Robot Wins";
        winnerFill = 255;
    }
    else if (winner === "") {
        winner = "";
        winnerFill = 0;
    }
    else {
        winner = "Tie";
        winnerFill = 255;
    }
    
    if (winner === "") {
        winnerFill = 0;
    }
};

var displayStars = function() {
    for (var i = 0; i < randomStarX.length; i++) {
        fill(0);
        point(randomStarX[i], randomStarY[i]);
    }
};

var startPage = function() {
    if (room === 0) {
        background(0);
        displayStars();
        fill();
        textSize(25);
        text("Rock, Paper, Scissors", 80, 100);
        fill();
        rect(150, 250, 80, 30, 30);
        fill(0);
        text("Start", 162, 275);
    }
};

var storyPage = function() {
    if (room === 1) {
        background(0);
        fill();
        textSize(20);
        text("The Mega Robot is taking over the world! \n Play in a Rock, Paper, Scissor battle \n to beat him! \n Click the button of the move you want \n to use.", 20, 100);
        fill();
        rect(160, 270, 80, 30, 30);
        fill(0);
        text("Play!", 180, 292);
    }
};

var draw = function() {
    background(0);
    game();
    chooseWinner();
    startPage();
    storyPage();
};


var keyPressed = function() {
    if (keyCode === 82) {
        you = choices[0];
        robot = choices[round(random(0, 2))];
    }
    else if (keyCode === 80) {
        you = choices[1];
        robot = choices[round(random(0, 2))];
    }
    else if (keyCode === 83) {
        you = choices[2];
        robot = choices[round(random(0, 2))];
    }
};


var mouseClicked = function() {
    if (room === 0) {
        if (mouseX >= 148 && mouseX <= 227 && mouseY >= 248 && mouseY <= 281) {
            room = 1;
        }
    }
    
    if (room === 1) {
        if (mouseX >= 158 && mouseX <= 240 && mouseY >= 268 && mouseY <= 303) {
            room = 2;
        }
    }
    
    if (room === 2) {
        if (mouseX >= 20 && mouseX <= 170 && mouseY <= 280 && mouseY >= 240) {
            you = choices[0];
            robot = choices[round(random(0, 2))];
        }
        else if (mouseX >= 20 && mouseX <= 170 && mouseY <= 330 && mouseY >= 290) {
            you = choices[1];
            robot = choices[round(random(0, 2))];
        }
        else if (mouseX >= 20 && mouseX <= 170 && mouseY <= 380 && mouseY >= 340) {
            you = choices[2];
            robot = choices[round(random(0, 2))];
        }
    }
};
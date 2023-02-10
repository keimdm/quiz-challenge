// VARIABLES

// HTML Element Creation
var header = document.createElement("header");
var title = document.createElement("p");
var scoreButton = document.createElement("p");
var spacer = document.createElement("p");

var main = document.createElement("main");

var homeScreen = document.createElement("section");
var introText = document.createElement("p");
var startButton = document.createElement("p");

var quizScreen = document.createElement("section");
var timer = document.createElement("p");
var questionCard = document.createElement("article");
var questionText = document.createElement("p");
var questionAnswers = document.createElement("ul");
var answer1 = document.createElement("li");
var answer2 = document.createElement("li");
var answer3 = document.createElement("li");
var answer4 = document.createElement("li");

var scoreScreen = document.createElement("section");
var scoreCard = document.createElement("article");
var playerLabel = document.createElement("p");
var scoreLabel = document.createElement("p");
var playerInitials = document.createElement("ul");
var playerScores = document.createElement("ul");

//HTML Element Building
document.body.setAttribute("style", "color: black; font-size: 16px; font-family: sans-serif; box-sizing: border-box; background-color: lemonchiffon");

//Header attributes and content
header.setAttribute("style", "width: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; padding: 0.5rem 2rem; background-color: gray");
scoreButton.textContent = "View High Scores";
title.textContent = "Coding Quiz";
title.setAttribute("style", "font-size: 2rem; margin: 0 0 0.5rem 0");
spacer.textContent = "View High Scores";
spacer.setAttribute("style", "visibility: hidden");

//Home Screen attributes and content
homeScreen.setAttribute("style", "width: 100%, display: flex; flex-direction: column; justify-content: space-around; align-items: center");
introText.textContent = "This quiz is intended to help players practice for coding tests given as part of job interviews. After starting the game, players will have 90 seconds to answer as many questions as possible. Entering a wrong answer will remove 15 seconds from the time. \n Press the 'Start Game' button below to get started - good luck!";
introText.setAttribute("style", "line-height: 1.5rem; margin: 15%; padding: 2rem; background-color: white; border-radius: 10px");
startButton.textContent = "Start Game";
startButton.setAttribute("style", "font-size: 2rem; text-align: center; margin: 0 30%; padding: 0.5rem 2rem; background-color: red; color: white; border-radius: 10px");
startButton.setAttribute("onclick", "startGame()");

//Quiz Screen attributes and content
quizScreen.setAttribute("style", 'width: 100%; display: none; flex-direction: column; justify-content: space-around; align-items: center');
timer.textContent = "Timer: 1:30";
timer.setAttribute("style", "font-size: 3rem; margin: 10% 15% 0 15%; padding: 2rem; color: white; background-color: black; border-radius: 10px");
questionCard.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-around; align-items: flex-start; line-height: 1.5rem; margin: 10% 15%; padding: 2rem; background-color: white; border-radius: 10px");
questionText.textContent = "Question text here: This is a sample question designed to take up enough space in the box to serve as a meaningful demo.";
questionText.setAttribute("style", "margin: 0 0 1.5rem 0");
var answers = [answer1, answer2, answer3, answer4];
for (i = 0; i < answers.length; i++) {
    answers[i].textContent = "Answer " + (i + 1).toString(); 
    answers[i].setAttribute("style", "line-height: 1.5rem; margin: 0.5rem 0 0.5rem 2rem; padding: 0.5rem 2rem; background-color: blue; color: white; border-radius: 10px");
}

//Score Screen attributes and content
scoreScreen.setAttribute("style", "width: 100%; display: none; flex-direction: column; justify-content: space-around; align-items: center");
scoreCard.setAttribute("style", "display: flex; flex-direction: row; justify-content: space-between; align-items: center; flex-wrap: wrap; line-height: 1.5rem; margin: 15%; padding: 2rem; background-color: white; border-radius: 10px");
playerLabel.textContent = "Player Initials:";
playerLabel.setAttribute("style", "font-size: 1.5rem; align-text: center")
scoreLabel.textContent = "Score:";
scoreLabel.setAttribute("style", "font-size: 1.5rem; align-text: center")
playerInitials.setAttribute("style", "width: 50%; background-color: green");
playerScores.setAttribute("style", "width: 50%; background-color: yellow");

//HTML Element Placement
document.body.appendChild(header);
header.appendChild(title);
header.appendChild(scoreButton);
header.appendChild(spacer);

document.body.appendChild(main);
main.appendChild(homeScreen);
homeScreen.appendChild(introText);
homeScreen.appendChild(startButton);

main.appendChild(quizScreen);
quizScreen.appendChild(timer);
quizScreen.appendChild(questionCard);
questionCard.appendChild(questionText);
questionCard.appendChild(questionAnswers);
questionAnswers.appendChild(answer1);
questionAnswers.appendChild(answer2);
questionAnswers.appendChild(answer3);
questionAnswers.appendChild(answer4);

main.appendChild(scoreScreen);
scoreScreen.appendChild(scoreCard);
scoreCard.appendChild(playerLabel);
scoreCard.appendChild(scoreLabel);
scoreCard.appendChild(playerInitials);
scoreCard.appendChild(playerScores);

// State variables
var timeRemaining = 0;
var intervalID;

// FUNCTIONS
function startGame() {
    homeScreen.style.display = "none";
    quizScreen.style.display = "flex";
    timeRemaining = 90;
    //executes every 1 second
    intervalID = setInterval(function () {
        //update timer
        var minsLeft = Math.floor(timeRemaining / 60);
        var secsLeft = Math.floor(timeRemaining % 60);
        if (secsLeft < 10) {
            secsLeft = "0" + secsLeft.toString();
        }
        timer.textContent = "Timer: " + minsLeft + ":" + secsLeft;

        //check if game over
        if (timeRemaining < 0) {
            gameOver();
            return;
        }

        //subtract from timer
        timeRemaining = timeRemaining - 1;
    }, 1000);
}

function gameOver() {
    clearInterval(intervalID);
    window.alert("Game Over");
    homeScreen.style.display = "flex";
    quizScreen.style.display = "none";
}

// INITIALIZATION
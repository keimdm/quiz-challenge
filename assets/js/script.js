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
var playerInitials = document.createElement("ul");
var playerScores = document.createElement("ul");

//HTML Element Building
document.body.setAttribute("style", "color: black; font-size: 16px; font-family: sans-serif; box-sizing: border-box; background-color: lemonchiffon");

header.setAttribute("style", "width: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; padding: 0.5rem 2rem; background-color: gray");
scoreButton.textContent = "View High Scores";
title.textContent = "Coding Quiz";
title.setAttribute("style", "font-size: 2rem; margin: 0 0 0.5rem 0");
spacer.textContent = "View High Scores";
spacer.setAttribute("style", "visibility: hidden");

homeScreen.setAttribute("style", "width: 100%, display: flex; flex-direction: column; justify-content: space-around; align-items: center");
introText.textContent = "This quiz is intended to help players practice for coding tests given as part of job interviews. After starting the game, players will have 90 seconds to answer as many questions as possible. Entering a wrong answer will remove 15 seconds from the time. \n Press the 'Start Game' button below to get started - good luck!";
introText.setAttribute("style", "line-height: 1.5rem; margin: 15%; padding: 2rem; background-color: white; border-radius: 10px");
startButton.textContent = "Start Game";
startButton.setAttribute("style", "font-size: 2rem; text-align: center; margin: 0 30%; padding: 0.5rem 2rem; background-color: red; color: white; border-radius: 10px");

quizScreen.setAttribute("style", 'width: 100%; display: flex; flex-direction: column; justify-content: space-around; align-items: center');
timer.textContent = "Timer: 1:30";
timer.setAttribute("style", "font-size: 3rem; margin: 0 15%; padding: 2rem; color: white; background-color: black; border-radius: 10px");
questionCard.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-around; align-items: flex-start; line-height: 1.5rem; margin: 15%; padding: 2rem; background-color: white; border-radius: 10px");
questionText.textContent = "Question text here: This is a sample question designed to take up enough space in the box to serve as a meaningful demo.";
questionText.setAttribute("style", "margin: 0 0 1.5rem 0");
var answers = [answer1, answer2, answer3, answer4];
for (i = 0; i < answers.length; i++) {
    answers[i].textContent = "Answer " + (i + 1).toString(); 
    answers[i].setAttribute("style", "line-height: 1.5rem; margin: 0.5rem 0 0.5rem 2rem; padding: 0.5rem 2rem; background-color: blue; color: white");
}


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

// State variables

// FUNCTIONS

// INITIALIZATION
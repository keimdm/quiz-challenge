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
body.setAttribute("style", "color: black; font-size: 16px; font-family: sans-serif");

header.setAttribute("style", "width: 100%; height: 50px; display: flex; flex-direction: row; justify-content: flex-start; align-items: center; background-color: gray");
title.textContent = "Coding Quiz";
title.setAttribute("style", "color: black; ")
//HTML Element Placement
document.body.appendChild(header);

// State variables

// FUNCTIONS

// INITIALIZATION
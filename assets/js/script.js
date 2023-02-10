// VARIABLES

// HTML Elements
//var header = document.createElement("header");
//var title = document.createElement("p");
var scoreButton = document.querySelector("#score-button");
//var spacer = document.createElement("p");

//var main = document.createElement("main");

var homeScreen = document.querySelector("#home-screen");
//var introText = document.createElement("p");
var startButton = document.querySelector("#start-button");

var quizScreen = document.querySelector("#quiz-screen");
var timer = document.querySelector("#timer");;
//var questionCard = document.createElement("article");
var questionText = document.querySelector("#question-text");
//var questionAnswers = document.createElement("ul");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var answers = [answer1, answer2, answer3, answer4];

var scoreScreen = document.querySelector("#score-screen");
//var scoreCard = document.createElement("article");
//var playerLabel = document.createElement("p");
//var scoreLabel = document.createElement("p");
var playerInitials = document.querySelector("#player-initials");
var playerScores = document.querySelector("#player-scores");

// State variables
var timeRemaining = 0;
var intervalID;
var currentScore = 0;

var questions = [];

var question1 = {
    question: "Which of the following is not a primitive data type?",
    answer1: "string",
    answer2: "boolean",
    answer3: "array",
    answer4: "number",
    correct: "array"
};
questions.push(question1);

var question2 = {
    question: "What does HTML stand for?",
    answer1: "HyperText Markup Language",
    answer2: "HyperText Managing Links",
    answer3: "HyperText Making Language",
    answer4: "HyperText Markup Links",
    correct: "array"
};
questions.push(question2);

// FUNCTIONS
function startGame() {
    //game setup
    homeScreen.style.display = "none";
    quizScreen.style.display = "flex";
    timeRemaining = 90;
    updateClock(timeRemaining);

    var questionRand = Math.floor(Math.random() * questions.length);
    questionText.textContent = questions[questionRand].question;
    answer1.textContent = questions[questionRand].answer1;
    answer2.textContent = questions[questionRand].answer2;
    answer3.textContent = questions[questionRand].answer3;
    answer4.textContent = questions[questionRand].answer4;

    //executes every 1 second
    intervalID = setInterval(function () {
        //update timer
        updateClock(timeRemaining);

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
    updateClock(0);
    window.alert("Game Over");
    homeScreen.style.display = "flex";
    quizScreen.style.display = "none";
}

function updateClock(x) {
    var minsLeft = Math.floor(x / 60);
    var secsLeft = Math.floor(x % 60);
    if (secsLeft < 10) {
        secsLeft = "0" + secsLeft.toString();
    }
    timer.textContent = "Timer: " + minsLeft + ":" + secsLeft;
}

//USER INTERACTION
startButton.addEventListener("click", startGame);

// INITIALIZATION
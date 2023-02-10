// VARIABLES

// HTML Elements
var title = document.querySelector("#title");
var scoreButton = document.querySelector("#score-button");

var homeScreen = document.querySelector("#home-screen");
var startButton = document.querySelector("#start-button");

var quizScreen = document.querySelector("#quiz-screen");
var timer = document.querySelector("#timer");;
var questionText = document.querySelector("#question-text");
var questionAnswers = document.querySelector("#question-answers");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var answers = [answer1, answer2, answer3, answer4];

var scoreScreen = document.querySelector("#score-screen");
var playerInitials = document.querySelector("#player-initials");
var playerScores = document.querySelector("#player-scores");

// State variables
var timeRemaining = 0;
var intervalID;
var currentScore = 0;
var currentQuestion;

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
    correct: "HyperText Markup Language"
};
questions.push(question2);

var question3 = {
    question: "What does CSS stand for?",
    answer1: "Cascading Style Syntax",
    answer2: "Cyber Style Sheets",
    answer3: "Cyber Style Syntax",
    answer4: "Cascading Style Sheets",
    correct: "Cascading Style Sheets"
};
questions.push(question3);

var question4 = {
    question: "Which of the following are valid loop types?",
    answer1: "until, while",
    answer2: "for, while",
    answer3: "do until, for",
    answer4: "stop at, until",
    correct: "for, while"
};
questions.push(question4);

var question5 = {
    question: "What character is used to end a line of code in JavaScript?",
    answer1: "semicolon",
    answer2: "period",
    answer3: "dash",
    answer4: "colon",
    correct: "semicolon"
};
questions.push(question5);

var question6 = {
    question: "What is the difference between '==='  and '=='?",
    answer1: "=== is not a valid operator",
    answer2: "=== checks decimal places, == does not",
    answer3: "=== checks for data type as well as value",
    answer4: "There is no difference",
    correct: "=== checks for data type as well as value"
};
questions.push(question6);

var question7 = {
    question: "What is the point of including a reset CSS file?",
    answer1: "To have a consistent starting point when formatting a page",
    answer2: "To format the page if the program crashes",
    answer3: "To enable easy pallet swaps",
    answer4: "To gain access to more font options",
    correct: "To have a consistent starting point when formatting a page"
};
questions.push(question7);

var question8 = {
    question: "What does 'git checkout -b feature' do?",
    answer1: "Navigates to the checkout window to confirm purchase",
    answer2: "Uploads the latest version of a repo to GitHub",
    answer3: "Cancels the latest commit made",
    answer4: "Creates a new branch called 'feature'",
    correct: "Creates a new branch called 'feature'"
};
questions.push(question8);

// FUNCTIONS
function startGame() {
    //game setup
    homeScreen.style.display = "none";
    quizScreen.style.display = "flex";
    scoreScreen.style.display = "none";
    currentScore = 0;
    timeRemaining = 90;
    updateClock(timeRemaining);
    currentQuestion = getQuestion(currentQuestion);

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

function getQuestion(x) {
    var questionFound = false;
    var questionRand;
    while (!questionFound) {
        questionRand = Math.floor(Math.random() * questions.length);
        if (x != questions[questionRand]) {
            questionFound = true;
        }
    }
    questionText.textContent = questions[questionRand].question;
    answer1.textContent = questions[questionRand].answer1;
    answer2.textContent = questions[questionRand].answer2;
    answer3.textContent = questions[questionRand].answer3;
    answer4.textContent = questions[questionRand].answer4;
    return questions[questionRand];
}

function processAnswer(event) {
    if (timeRemaining > 0) {
        if (event.target.id === "answer1" || event.target.id === "answer2" || event.target.id === "answer3" || event.target.id === "answer4") {
            var answerString = event.target.textContent;
            if (answerString === currentQuestion.correct) {
                currentQuestion = getQuestion(currentQuestion);
                currentScore = currentScore + 1;
                console.log(currentScore);
            }
            else {
                timeRemaining = Math.max(timeRemaining - 15, 0);
                updateClock(timeRemaining);
            }
        }    
    }
}

function showScores() {
    homeScreen.style.display = "none";
    quizScreen.style.display = "none";
    scoreScreen.style.display = "flex";
    clearInterval(intervalID);
}

function showHome() {
    homeScreen.style.display = "flex";
    quizScreen.style.display = "none";
    scoreScreen.style.display = "none";
    clearInterval(intervalID);
}

//USER INTERACTION
startButton.addEventListener("click", startGame);

questionAnswers.addEventListener("click", processAnswer);

scoreButton.addEventListener("click", showScores);

title.addEventListener("click", showHome);
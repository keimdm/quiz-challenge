// VARIABLES

// HTML Elements
var title = document.querySelector("#title");
var scoreButton = document.querySelector("#score-button");

var homeScreen = document.querySelector("#home-screen");
var startButton = document.querySelector("#start-button");

var quizScreen = document.querySelector("#quiz-screen");
var timer = document.querySelector("#timer");;
var scoreDisplay = document.querySelector("#score-display");
var questionText = document.querySelector("#question-text");
var questionAnswers = document.querySelector("#question-answers");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var answers = [answer1, answer2, answer3, answer4];

var scoreInputScreen = document.querySelector("#score-input");
var scoreLabel = document.querySelector("#score-label")
var scoreAnnounce = document.querySelector("#score-announce");
var initialsInput = document.querySelector("#initials-input");
var submitButton = document.querySelector("#submit-button");

var scoreScreen = document.querySelector("#score-screen");
var playerInitials = document.querySelector("#player-initials");
var playerScores = document.querySelector("#player-scores");

// State variables
var timeRemaining = 0;
var intervalID;
var currentScore = 0;
var currentQuestion;

// creates list of questions
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

var question9 = {
    question: "Which of the following is not considered 'falsy'?",
    answer1: "0",
    answer2: "undefined",
    answer3: "0n",
    answer4: "1",
    correct: "1"
};
questions.push(question9);

var question10 = {
    question: "What is the result of the following expression: 'TRUE || FALSE' ?",
    answer1: "TRUE",
    answer2: "FALSE",
    answer3: "undefined",
    answer4: "0",
    correct: "TRUE"
};
questions.push(question10);

var question11 = {
    question: "If you start a timer using the setInterval() function, what function is used to stop it?",
    answer1: "stop()",
    answer2: "clearInterval()",
    answer3: "endTimer()",
    answer4: "removeInterval()",
    correct: "clearInterval()"
};
questions.push(question11);

var question12 = {
    question: "How do you access an element's color using JavaScript?",
    answer1: "document.color",
    answer2: "document.element.color",
    answer3: "element.color",
    answer4: "element.style.color",
    correct: "element.style.color"
};
questions.push(question12);

var question13 = {
    question: "What function is used to convert a JavaScript object into a string suitable for local storage?",
    answer1: "JSON.parse(object)",
    answer2: "object.stringify(JSON)",
    answer3: "JSON.stringify(object)",
    answer4: "object.JSONString()",
    correct: "JSON.stringify(object)"
};
questions.push(question13);

var question14 = {
    question: "How many times will the following loop run: for (i = 0; i < 10; i++) ?",
    answer1: "0",
    answer2: "10",
    answer3: "9",
    answer4: "11",
    correct: "10"
};
questions.push(question14);

var question15 = {
    question: "If the default font size is set at 16px, what is the value of 3rem?",
    answer1: "300px",
    answer2: "3px",
    answer3: "48px",
    answer4: "19px",
    correct: "48px"
};
questions.push(question15);

var availableQuestions;

// FUNCTIONS
// Starts a new round of the quiz
function startGame() {
    //game setup
    homeScreen.style.display = "none";
    quizScreen.style.display = "flex";
    scoreInputScreen.style.display = "none";
    scoreScreen.style.display = "none";
    currentScore = 0;
    updateScore(currentScore);
    timeRemaining = 90;
    updateClock(timeRemaining);
    timer.style.color = "white";
    availableQuestions = questions;
    currentQuestion = getQuestion(currentQuestion);

    //executes every 1 second
    intervalID = setInterval(function () {
        //update timer
        updateClock(timeRemaining);
        //check if it should turn red
        if (timeRemaining <= 15) {
            timer.style.color = "#FF4242";
        }
        //check if game over
        if (timeRemaining < 0) {
            gameOver();
            return;
        }

        //subtract from timer
        timeRemaining = timeRemaining - 1;
    }, 1000);
}

//runs when time runs out
function gameOver() {
    clearInterval(intervalID);
    updateClock(0);
    homeScreen.style.display = "none";
    quizScreen.style.display = "none";
    scoreInputScreen.style.display = "flex";
    scoreScreen.style.display = "none";
    initialsInput.style.display = "block";
    submitButton.style.display = "block";
    scoreLabel.innerHTML = "All done! Your score is " + currentScore + ". Enter your initials (3 characters max) to be added to the high scores list:";
}

// converts input number in min and sec format and displays
function updateClock(x) {
    var minsLeft = Math.floor(x / 60);
    var secsLeft = Math.floor(x % 60);
    if (secsLeft < 10) {
        secsLeft = "0" + secsLeft.toString();
    }
    timer.textContent = "Timer: " + minsLeft + ":" + secsLeft;
}

// updates score display with current score
function updateScore(x) {
    scoreDisplay.textContent = "Score: " + x;
}

// picks a new question, guaranteeing that it's different than the last
function getQuestion(x) {
    var questionFound = false;
    var questionRand;
    while (!questionFound) {
        questionRand = Math.floor(Math.random() * availableQuestions.length);
        if (x != availableQuestions[questionRand]) {
            questionFound = true;
        }
    }
    var newQuestion = availableQuestions.splice(questionRand, 1);
    if (availableQuestions.length <= 0) {
        availableQuestions = questions;
    }
    questionText.textContent = newQuestion.question;
    answer1.textContent = newQuestion.answer1;
    answer2.textContent = newQuestion.answer2;
    answer3.textContent = newQuestion.answer3;
    answer4.textContent = newQuestion.answer4;
    console.log(newQuestion);
    return newQuestion;
}

//determines if a selected answer is correct
function processAnswer(event) {
    if (timeRemaining > 0) {
        if (event.target.id === "answer1" || event.target.id === "answer2" || event.target.id === "answer3" || event.target.id === "answer4") {
            var answerString = event.target.textContent;
            //if correct, pick new question and increment score
            if (answerString === currentQuestion.correct) {
                currentQuestion = getQuestion(currentQuestion);
                currentScore = currentScore + 1;
                updateScore(currentScore);
                console.log(currentScore);
            }
            //if wrong, subtract time
            else {
                timeRemaining = Math.max(timeRemaining - 15, 0);
                updateClock(timeRemaining);
            }
        }    
    }
}

// go to high score page, ending quiz if active
function showScores() {
    homeScreen.style.display = "none";
    quizScreen.style.display = "none";
    scoreInputScreen.style.display = "none";
    scoreScreen.style.display = "flex";
    clearInterval(intervalID);
    //clear previous high scores if present
    while (playerInitials.firstChild) {
        playerInitials.removeChild(playerInitials.firstChild);
    }
    while (playerScores.firstChild) {
        playerScores.removeChild(playerScores.firstChild);
    }
    var scoresData = JSON.parse(window.localStorage.getItem("scoresData")) || [];
    var sortGood = false;
    // bubble sort to get the high scores in order
    while (!sortGood) {
        sortGood = true;
        for (i = 0; i < scoresData.length - 1; i++) {
            if (scoresData[i].entryScore < scoresData[i + 1].entryScore) {
                var placeholder = scoresData[i];
                scoresData[i] = scoresData[i + 1];
                scoresData[i + 1] = placeholder;
                sortGood = false;
            }
        }
    }
    for (i = 0; i < scoresData.length; i++) {
        var newInitials = document.createElement("li");
        var newScore = document.createElement("li");
        newInitials.textContent = scoresData[i].entryInitials;
        newScore.textContent = scoresData[i].entryScore;
        playerInitials.appendChild(newInitials);
        playerScores.appendChild(newScore);
    }
}

// go to home page, ending quiz if active
function showHome() {
    homeScreen.style.display = "flex";
    quizScreen.style.display = "none";
    scoreScreen.style.display = "none";
    scoreInputScreen.style.display = "none";
    clearInterval(intervalID);
}

// adds score to list of high scores
function submitScore(event) {
    event.preventDefault();
    var invalidInputs = ["", " ", "  ", "   "];
    if (invalidInputs.includes(initialsInput.value)) {
        scoreLabel.innerHMTL = "Invalid input - please try again."
        initialsInput.value = "";
    }
    else if (initialsInput.value.length > 3) {
        scoreLabel.innerHTML = "Please enter a maximum of 3 characters."
        initialsInput.value = "";
    }
    else {
        var previousData = JSON.parse(window.localStorage.getItem("scoresData")) || [];
        var newScore = {
            entryInitials: initialsInput.value,
            entryScore: currentScore
        };
        previousData.push(newScore);
        window.localStorage.setItem("scoresData", JSON.stringify(previousData));
        scoreLabel.innerHTML = "Thanks! You can navigate to the home page or high scores using the links above."
        initialsInput.style.display = "none";
        initialsInput.value = "";
        submitButton.style.display = "none";
    }
}

//USER INTERACTION
startButton.addEventListener("click", startGame);

questionAnswers.addEventListener("click", processAnswer);

scoreButton.addEventListener("click", showScores);

title.addEventListener("click", showHome);

submitButton.addEventListener("click", submitScore);
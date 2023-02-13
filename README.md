# quiz-challenge

## Description

This Quiz Challenge was created as part of the requirements for a Full Stack Development boot camp. Additionally, it is intended to help applicants practice for coding quizzes used in job interviews.

## Usage

Navigate to the deployed quiz with the following link:
https://keimdm.github.io/quiz-challenge/

![](./assets/images/screenshot.png)

### Header
The header consists of two links at the top of the window - the View High Scores link navigates to the high scores page, and the Coding Quiz link navigates to the home screen. Both change color when hovered over, and the mouse changes to the hand pointer.

### Home Screen
TThe home screen contains a brief explanation of the quiz and its rules, along with a start button that starts the quiz when clicked. As with the links, the start button changes color on hover and changes the mouse to the hand pointer.

### Quiz Screen
After clicking the Start Quiz button, the quiz screen will appear. The quiz screen contains a timer which counts down from 90 seconds (displayed in a min:seconds format). If the player picks a wrong answer, 15 seconds are subtracted from the time. In that case, the timer also briefly flashed red to give some visual cue that a wrong answer was given. Each question has 4 possible answers, which have the same effect on hover as the start button. Additionally, the wrong answers turn red when selected to visually eliminate them. The player's current score is displayed below the timer - each correct answer gives 1 point. After a correct answer is given, a new question is chosen. There are a total of 15 possible questions which are given in a random order (with no duplicates until all 15 unique questions have been answered).

After the time runs out, the player is shown a screen announcing their score. They are also prompted for their initials, which will be stored in the high scores. After submission, players can then navigate back to the home screen to play again, or view the high scores.

### High Scores
The High Scores section contains a table with two columns - player initials and score. Scores are added after a player submits them after completing the quiz - ordered from highest to lowest along with their respective initials.
// Object to store and manage game scores
let score = {
    win: 0,
    lost: 0,
    tie: 0,
};

// Function to display the current score
function displayScore() {
    return `Score: Won:${score.win} Lost:${score.lost} Tie:${score.tie}`;
}

// Function to reset the game and clear localStorage
function forReset() {
    localStorage.clear();
    score = {
        win: 0,
        lost: 0,
        tie: 0,
    };
    localStorage.setItem('score', JSON.stringify(score));

    // Display reset results
    document.querySelector('#user_choice').innerText = ``;
    document.querySelector('#cpu_choice').innerText = ``;
    document.querySelector('#result').innerText = ``;
    document.querySelector('#score').innerText = displayScore();
}

// Function to generate computer's choice randomly
function compChoiceFun() {
    let num = Math.random() * 3;
    if (num <= 1) {
        return `Bat`;
    }
    if (num <= 2) {
        return `Ball`;
    }
    return `Stump`;
}

// Function to handle user's choice and determine the winner
function play(userChoice) {
    score = JSON.parse(localStorage.getItem('score'));
    let compChoice = compChoiceFun();

    // Determine the result based on choices
    if (compChoice === userChoice) {
        score.tie++;
        result(compChoice, userChoice, `It's Tie`);
    } else if (
        (compChoice == `Bat` && userChoice == `Stump`) ||
        (compChoice == `Ball` && userChoice == `Stump`) ||
        (compChoice == `Ball` && userChoice == `Bat`)
    ) {
        score.win++;
        result(compChoice, userChoice, `User Won`);
    } else {
        score.lost++;
        result(compChoice, userChoice, `Computer Won`);
    }
}

// Function to display the result and update the score
function result(compChoice, userChoice, res) {
    document.querySelector('#user_choice').innerText = ` You Chose: ${userChoice}`;
    document.querySelector('#cpu_choice').innerText = `Computer Chose: ${compChoice}`;
    document.querySelector('#result').innerText = `${res}`;
    document.querySelector('#score').innerText = displayScore();
    localStorage.setItem('score', JSON.stringify(score));
}


// Function to initialize the game and retrieve the score from localStorage
function initGame() {
    score = JSON.parse(localStorage.getItem('score'));
    document.querySelector('#score').innerText = displayScore();
}

// Event listener to initialize the game when the DOM is loaded
window.addEventListener('DOMContentLoaded', initGame);

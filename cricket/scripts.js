let score = {
    win: 0,
    lost: 0,
    tie: 0,

};
function displayScore() {
    return `Score: Won:${score.win} Lost:${score.lost} Tie:${score.tie}`;
}
function forReset() {
    localStorage.clear();
    score = {
        win: 0,
        lost: 0,
        tie: 0,
    };
    localStorage.setItem('score', JSON.stringify(score));
    // display Results
    document.querySelector('#user_choice').innerText = ``;
    document.querySelector('#cpu_choice').innerText = ``;
    document.querySelector('#result').innerText = ``;
    document.querySelector('#score').innerText = displayScore();
}

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
function play(userChoice) {
    score = JSON.parse(localStorage.getItem('score'));
    let compChoice = compChoiceFun();
    if (compChoice === userChoice) {
        score.tie++;
        result(compChoice, userChoice, `Tie`);
    }
    else if ((compChoice == `Bat` && userChoice == `Stump`) || (compChoice == `Ball` && userChoice == `Stump`) || (compChoice == `Ball` && userChoice == `Bat`)) {
        score.win++;
        result(compChoice, userChoice, `User Won`);
    }
    else {
        score.lost++;
        result(compChoice, userChoice, `Computer Won`);

    }
}
function result(compChoice, userChoice, res) {
    document.querySelector('#user_choice').innerText = ` You Chose: ${userChoice}`;
    document.querySelector('#cpu_choice').innerText = `Computer Chose: ${compChoice}`;
    document.querySelector('#result').innerText = `Result: ${res}`;
    document.querySelector('#score').innerText = displayScore();
    localStorage.setItem('score', JSON.stringify(score));
}
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

function initGame() {
    score = JSON.parse(localStorage.getItem('score'));

    document.querySelector('#score').innerText = displayScore();
}

document.addEventListener('DOMContentLoaded', initGame);

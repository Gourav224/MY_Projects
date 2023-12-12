// app.js
// Selecting DOM elements
let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-game');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

// Variable to track turns (O or X)
let turnO = true;

// Winning patterns for tic-tac-toe
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Counter to track the number of button clicks
let btnCount = 0;

// Adding click event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        btnCount++;
        checkWinner();
    });
});

// Function to display the winner or tie message
const showWinner = (winner) => {
    let result = `Congratulations, Winner is ${winner}`;
    if (winner == 'Tie') {
        result = "It's a tie!";
    }
    msg.innerText = result;
    msgContainer.classList.remove("hide");
    buttonDisable(true);
};

// Function to check for a winner or a tie
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            } else if (btnCount === 9) {
                showWinner('Tie');
            }
        }
    }
};

// Function to disable or enable buttons
const buttonDisable = (val) => {
    for (let box of boxes) {
        box.disabled = val;
        if (!val) {
            box.innerText = "";
        }
    }
};

// Function to reset the game
const resetGame = () => {
    btnCount = 0;
    turnO = true;
    buttonDisable(false);
    msgContainer.classList.add("hide");
};

// Adding click event listeners to reset and new game buttons
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

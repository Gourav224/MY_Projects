let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-game');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');


let turn0 = true;

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
let btncount = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = 'O';
            turn0 = false;
        }
        else {
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
        btncount++;
        checkWinner();
    })
});
const showWinner = (winner) => {
    let res=`Congratualtions, Winner is ${winner}`;
    if(winner=='Tie'){
        res="It's a tie!";
    }
    msg.innerText = res;
    msgContainer.classList.remove("hide");
    buttonDisable(true);
}

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showWinner(pos1);
            }
            else if (btncount == 9) {
                showWinner('Tie');
            }
        }

    }
};

const buttonDisable = (val) => {
    for (let box of boxes) {
        box.disabled = val;
        if (!val) {
            box.innerText = "";
        }
    }
};
const resetGame = () => {
    btncount=0;
    turn0 = true;
    buttonDisable(false);
    msgContainer.classList.add("hide");

};
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
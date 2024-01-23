let boxes = document.querySelectorAll(".box");
let reset  = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContent = document.querySelector(".msg-content");
let msg = document.querySelector("#msg");

let player1Turn = true;

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    player1Turn =true;
    enabledBox();
    msgContent.classList.add("hide");
}

boxes.forEach( (box) => {
    box.addEventListener("click" , () => {
        if ( player1Turn === true){
            box.innerText = 'X';
            player1Turn = false;
        }
        else {
            box.innerText = 'O';
            player1Turn = true;
        }
        box.disabled = true;

        chechWinner();
    })
});

const disabledBox = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}
const enabledBox = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
}

const showWinner = (winner) => {
    let player = "";
    if (winner === 'X'){
        player = "Player 1";
    }
    else {
        player = "Player 2"
    }     

    msg.innerText = `Congratulations , Winner is ${player}`;
    msgContent.classList.remove("hide");
    disabledBox();
}


const chechWinner = () => {
    for (let pattern of winningPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3 ){
                showWinner(pos1);
            }
        }

    }
}

newGameBtn.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player O

const winning = [
    //horizontal winning patterns
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertical winniing patterns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Daigonal winning Patterns
    [2, 4, 6],
    [0, 4, 8]
];




boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        winner();
    });
});

const disableAll = ()=>{

    for(let box of boxes) {
        box.disabled = true;
    }
}


const enableAll = ()=>{

    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}



const winner = () => {
    for (let pattern of winning) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {

            if (posval1 === posval2 && posval2 === posval3) {
                showWinner(posval1);
                disableAll();
            }
        }
    }

};

const resetGame =() =>{
    turnO = true;
    enableAll();
    msgContainer.classList.add("hide");

};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

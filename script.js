// Create variable to access elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let winScreen = document.querySelector(".win-msg-container")
let winMsg = document.querySelector("#win-msg")

// All winings pattern
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// Games Logic
let turn = "X";
boxes.forEach((boxes) =>{
    boxes.addEventListener("click",() => {
        if(turn === "X"){
            // console.log(turn);
            turn = "O";
            bbb = boxes.innerText = "X";
        } else {
            // console.log(turn);
            turn = "X";
            bbb = boxes.innerText = "O";
        }
        boxes.disabled = true;
        winChecker()
    })
})

// Wining logic 
const winChecker = () => {
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("Winner", pos1Val);
                winMsg.innerText = `Winner Is ${pos1Val}`;
                winScreen.classList.add("active");
            }
        }
    }
}

// Reset button
resetBtn.addEventListener("click",() => {
    document.location.reload()
})

// New Game Button
newGameBtn.addEventListener("click",() => {
    document.location.reload()
})

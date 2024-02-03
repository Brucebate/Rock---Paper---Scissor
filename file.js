let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const DrawGame = () =>{
    console.log("Game is Draw")
    msg.innerText = "Game is Draw, Play Again";
    msg.style.backgroundColor = "rgb(41, 21, 40)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log('you win');
        msg.innerText =`You Won! your ${userChoice} beats  comp ${compChoice}`;
        msg.style.backgroundColor = "green";

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose");
        msg.innerText =`You lose! comp ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        DrawGame();

    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true ;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor"? false : true ;
        }else{
            userWin = compChoice === "rock"? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice is clicked", userChoice);
        playGame(userChoice);
    });
});
// restart button
 const restartGame  = document.querySelector("#reset-btn");
 restartGame.addEventListener("click",() => {
    userScore  = 0;
    compScore = 0;
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "";

 });
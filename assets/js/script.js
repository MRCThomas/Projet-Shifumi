
let handgun = document.querySelector("#handgun");
let arm = document.querySelector("#cyber-arm");
let katana = document.querySelector("#katana");
let handgunComputer = document.querySelector("#handgun-computer");
let armComputer = document.querySelector("#cyber-arm-computer");
let katanaComputer = document.querySelector("#katana-computer");
let roundNumber = null
let playerPlay = null
let computerPlay = null
let scorePlayer = document.querySelector("#score-player")
let scoreComputer = document.querySelector("#score-computer")



function handgunChoice(){
    arm.remove();
    katana.remove();
    handgun.style.width = "50%";
    handgun.style.height = "50%";
    handgun.style.backgroundColor = "#02D8F3";
    handgun.style.background = "radial-gradient(circle farthest-side at center center, #02D8F3 0%, rgba(0,0,0,0) 70%)";
    playerPlay = 1;

    round();
}

function armChoice(){
    handgun.remove();
    katana.remove();
    arm.style.width = "50%";
    arm.style.height = "50%";
    arm.style.backgroundColor = "#02D8F3";
    arm.style.background = "radial-gradient(circle farthest-side at center center, #02D8F3 0%, rgba(0,0,0,0) 70%)";
    playerPlay = 2;

    round();
}

function katanaChoice(){
    arm.remove();
    handgun.remove();
    katana.style.width = "50%";
    katana.style.height = "50%";
    katana.style.backgroundColor = "#02D8F3";
    katana.style.background = "radial-gradient(circle farthest-side at center center, #02D8F3 0%, rgba(0,0,0,0) 70%)";
    playerPlay = 3;

    round();
}

function handgunChoiceComputer(){
    armComputer.remove();
    katanaComputer.remove();
    handgunComputer.style.width = "50%";
    handgunComputer.style.height = "50%";
    handgunComputer.style.backgroundColor = "#02D8F3";
    handgunComputer.style.background = "radial-gradient(circle farthest-side at center center, #02D8F3 0%, rgba(0,0,0,0) 70%)";
}

function armChoiceComputer(){
    handgunComputer.remove();
    katanaComputer.remove();
    armComputer.style.width = "50%";
    armComputer.style.height = "50%";
    armComputer.style.backgroundColor = "#02D8F3";
    armComputer.style.background = "radial-gradient(circle farthest-side at center center, #02D8F3 0%, rgba(0,0,0,0) 70%)";
}

function katanaChoiceComputer(){
    armComputer.remove();
    handgunComputer.remove();
    katanaComputer.style.width = "50%";
    katanaComputer.style.height = "50%";
    katanaComputer.style.backgroundColor = "#02D8F3";
    katanaComputer.style.background = "radial-gradient(circle farthest-side at center center, #02D8F3 0%, rgba(0,0,0,0) 70%)";
}

function round(){
    computerPlay = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    if (computerPlay == 1) {
        computerPlay = 1;
        handgunChoiceComputer();
    } else if (computerPlay == 2) {
        computerPlay = 2;
        armChoiceComputer();
    } else {
        computerPlay = 3;
        katanaChoiceComputer();
    }

    setTimeout(() => {
        if (playerPlay == computerPlay) {
            egality();
        } else if (playerPlay == 1 && computerPlay == 2) {
            playerWin();
        } else if (playerPlay == 2 && computerPlay == 3) {
            playerWin();
        } else if (playerPlay == 3 && computerPlay == 1) {
            playerWin();
        } else {
            computerWin();
        }
    }, 2000)
}

function playerWin() {
    scorePlayer.textContent = Number(scorePlayer.textContent) + 1;
}

function computerWin() {
    scoreComputer.textContent = Number(scoreComputer.textContent) + 1;
}

function egality() {
    alert('égalité');
}

katana.addEventListener("click", katanaChoice);

arm.addEventListener("click", armChoice);

handgun.addEventListener("click", handgunChoice);
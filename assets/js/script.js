
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
let figthResult = document.querySelector("#fight-result");
let gameFrame = document.querySelector("#game-frame");
let numberWin = document.querySelector("#number-win")
let numberLose1 = document.querySelector("#number-lose1")
let numberLose2 = document.querySelector("#number-lose2")
let buttonReset = document.querySelector("#button-reset");


function handgunChoice(){
    arm.style.display = "none";
    katana.style.display = "none";
    handgun.style.width = "50%";
    handgun.style.height = "50%";
    handgun.classList.add("object-select");
    playerPlay = 1;

    round();
}

function armChoice(){

    handgun.style.display = "none";
    katana.style.display = "none";
    arm.style.width = "50%";
    arm.style.height = "50%";
    arm.classList.add("object-select");
    playerPlay = 2;

    round();
}

function katanaChoice(){
    arm.style.display = "none";
    handgun.style.display = "none";
    katana.style.width = "50%";
    katana.style.height = "50%";
    katana.classList.add("object-select");
    playerPlay = 3;

    round();
}

function handgunChoiceComputer(){
    armComputer.style.display = "none";
    katanaComputer.style.display = "none";
    handgunComputer.style.width = "50%";
    handgunComputer.style.height = "50%";
    handgunComputer.style.background = "radial-gradient(circle farthest-side at center center, #02D8F3 0%, rgba(0,0,0,0) 70%)";
}

function armChoiceComputer(){
    handgunComputer.style.display = "none";
    katanaComputer.style.display = "none";
    armComputer.style.width = "50%";
    armComputer.style.height = "50%";
    armComputer.style.background = "radial-gradient(circle farthest-side at center center, #02D8F3 0%, rgba(0,0,0,0) 70%)";
}

function katanaChoiceComputer(){
    armComputer.style.display = "none";
    handgunComputer.style.display = "none";
    katanaComputer.style.width = "50%";
    katanaComputer.style.height = "50%";
    katanaComputer.style.background = "radial-gradient(circle farthest-side at center center, #02D8F3 0%, rgba(0,0,0,0) 70%)";
}

function endRound() {
    if (Number(scorePlayer.textContent) == 3) {
        finish(1)
    } else if (Number(scoreComputer.textContent) == 3) {
        finish(2)
    } else {
        figthResult.textContent = "";

        handgun.style.display = "block";
        arm.style.display = "block";
        katana.style.display = "block";

        handgun.classList.remove("object-select");
        arm.classList.remove("object-select");
        katana.classList.remove("object-select");

        handgunComputer.style.display = "block";
        armComputer.style.display = "block";
        katanaComputer.style.display = "block";

        handgunComputer.style.background = "rgba(0,0,0,0)";
        armComputer.style.background = "rgba(0,0,0,0)";
        katanaComputer.style.background = "rgba(0,0,0,0)";
    }
}

function finish(winOrLose) {
    for (let i = 0; i < gameFrame.children.length; i++) {
        gameFrame.children[i].style.display = "none";
    }
    if (winOrLose == 1) {
        gameFrame.innerHTML = `<p class=".win-lose">Victory</p>`;
        localStorage.setItem("nmbV", (Number(localStorage.getItem("nmbV"))+1))
    } else {
        gameFrame.innerHTML = `<p class=".win-lose">Defeat</p>`;
        localStorage.setItem("nmbD", (Number(localStorage.getItem("nmbD"))+1))
    }
    localStorage.setItem("scoreP", 0);
    localStorage.setItem("scoreC", 0);
    setTimeout(() => {
        resetFunction2(5000);
    }, 2000)
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
    scorePlayer.textContent = Number(localStorage.getItem("scoreP")) + 1;
    figthResult.textContent = "You Win";
    localStorage.setItem("scoreP", scorePlayer.textContent)
    setTimeout(() => {
        endRound();
    }, 2000)
}

function computerWin() {
    scoreComputer.textContent = Number(localStorage.getItem("scoreC")) + 1;
    figthResult.textContent = "You Lose";
    localStorage.setItem("scoreC", scoreComputer.textContent)
    setTimeout(() => {
        endRound();
    }, 2000)
}

function egality() {
    figthResult.textContent = "Eguality";
    setTimeout(() => {
        endRound();
    }, 2000)
}
//FONCTION RELOAD
function resetFunction(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}

function resetFunction(timeoutPeriod) {
    Number(localStorage.setItem("scoreP", 0));
    Number(localStorage.setItem("scoreC", 0));
    Number(localStorage.setItem("nmbV", 0));
    Number(localStorage.setItem("nmbD", 0));
    setTimeout("location.reload(true);",timeoutPeriod);
}

function resetFunction2(timeoutPeriod) {
    setTimeout("location.reload(true);",timeoutPeriod);
}

katana.addEventListener("click", katanaChoice);

arm.addEventListener("click", armChoice);

handgun.addEventListener("click", handgunChoice);

katana.addEventListener("mouseover", function(){
    katana.classList.add("object-hover");
})

arm.addEventListener("mouseover", function(){
    arm.classList.add("object-hover");
})

handgun.addEventListener("mouseover", function(){
    handgun.classList.add("object-hover");
})

katana.addEventListener("mouseout", function(){
    katana.classList.remove("object-hover");
})

arm.addEventListener("mouseout", function(){
    arm.classList.remove("object-hover");
})

handgun.addEventListener("mouseout", function(){
    handgun.classList.remove("object-hover");
})

buttonReset.addEventListener("click", resetFunction);

window.addEventListener("load", function () {
    if (localStorage.getItem("nmbV") == null) {
        localStorage.setItem("nmbV", 0);
    }
    if (localStorage.getItem("nmbB") == null) {
        localStorage.setItem("nmbb", 0);
    }
    if (localStorage.getItem("scoreP") == null) {
        localStorage.setItem("scoreP", 0);
    }
    if (localStorage.getItem("scoreC") == null) {
        localStorage.setItem("scoreC", 0);
    }
    scoreComputer.textContent = Number(localStorage.getItem("scoreP"));
    scorePlayer.textContent = Number(localStorage.getItem("scoreC"));

    if (Number(localStorage.getItem("nmbV"))+Number(localStorage.getItem("nmbD")) != 0) {
        numberWin.textContent = `${(Number(localStorage.getItem("nmbV"))/(Number(localStorage.getItem("nmbV"))+Number(localStorage.getItem("nmbD"))))*100}%`
        numberLose1.textContent = `${(Number(localStorage.getItem("nmbD"))/(Number(localStorage.getItem("nmbV"))+Number(localStorage.getItem("nmbD"))))*100}%`
        numberLose2.textContent = `${(Number(localStorage.getItem("nmbD"))/(Number(localStorage.getItem("nmbV"))+Number(localStorage.getItem("nmbD"))))*100}%`    
    } else {
        numberWin.textContent = `0%`
        numberLose1.textContent = `0%`
        numberLose2.textContent = `0%`    
    }
});

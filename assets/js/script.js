let handgun = document.querySelector(".player2 img");
let arm = document.querySelector(".player2 img:nth-child(2)");
let katana = document.querySelector(".player2 img:nth-child(3)");

handgun.addEventListener("click", handgunChoice);

function handgunChoice(){
    arm.remove();
    katana.remove();
    handgun.style.width = "50%";
    handgun.style.height = "50%";
    handgun.style.backgroundColor = "#02D8F3";
    handgun.style.background = "radial-gradient(circle farthest-side at center center, #02D8F3 0%, rgba(0,0,0,0) 70%)";
}
arm.addEventListener("click", armChoice);

function armChoice(){
    handgun.remove();
    katana.remove();
    arm.style.width = "100%";
    arm.style.height = "100%";
    arm.style.backgroundColor = "#02D8F3";
    arm.style.background = "radial-gradient(circle farthest-side at center center, #02D8F3 0%, rgba(0,0,0,0) 70%)";
}
katana.addEventListener("click", katanaChoice);

function katanaChoice(){
    arm.remove();
    handgun.remove();
    katana.style.width = "50%";
    katana.style.height = "50%";
    katana.style.backgroundColor = "#02D8F3";
    katana.style.background = "radial-gradient(circle farthest-side at center center, #02D8F3 0%, rgba(0,0,0,0) 70%)";
}
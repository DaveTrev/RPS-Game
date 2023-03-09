let userScore = 0
let computerScore = 0

const userScore_td = document.getElementById("user-score")
const computerScore_td = document.getElementById("computer-score")
const status = document.getElementById("status")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")


// modal open and close
const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close")

// setting up modal open and close
open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});


function getComputerChoice() {
    const game_choices = [rock, paper, scissors];
    const randomNumber = Math.floor(Math.random() * 3);
    return game_choices[randomNumber];
};

function main() {
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', ()=>game("scissors"));
}
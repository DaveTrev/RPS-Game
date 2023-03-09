let userScore = 0
let computerScore = 0



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
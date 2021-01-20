const cards = document.querySelectorAll('.card');                /* list of all card elements stored in cards */

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// setup moves counter
let moves = 0;
let counter = document.querySelector(".moves");



function flipCard() {                                                   /* function called on click */
  if (lockBoard) return;
  if(this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;
  moveCounter();

  checkForMatch();
}


// counts moves
function moveCounter(){
    moves++;
    counter.innerHTML = moves;
    if(moves == 1){
        second = 0;
        startTimer();
    }
}


// timer
var second = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = second+" secs";
        second++;
    },1000);
}


function checkForMatch() {
  let isMatch = firstCard.dataset.cardid === secondCard.dataset.cardid;       /* iterinary operator */

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){                                                /* immediately invoked function expression */
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 16);
        card.style.order = randomPosition;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));       /* loop through list and on click then fire flipcard*/






/*
// restart a new game 
function restartGame(){
    restartTimer();
    restartMoves();
};

function restartTimer(){
    //reset timer
    second = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 secs";
    clearInterval(interval);
};

function restartMoves(){
    // reset moves
    moves = 0;
    counter.innerHTML = moves;
};*/

/*



*/
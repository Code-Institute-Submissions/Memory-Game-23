const cards = document.querySelectorAll('.card');                /* list of all card elements stored in cards */


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// setup moves counter
let moves = 0;
let counter = document.querySelector(".moves");

// setup match counter
let matches = 0;


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
        timer.innerHTML = second+" seconds";
        second++;
    },1000);
}

// counts matches
function matchCounter(){
    matches++;
    console.log(matches)
    if(matches == 8){
        finish();
    }
}
function checkForMatch() {
  let isMatch = firstCard.dataset.cardid === secondCard.dataset.cardid;       /* iterinary operator */

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchCounter();
    resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 500);
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


// restart a new game 
function restartGame(){
    hide();
    restartTimer();
    restartMoves();
    restartMatch();
    shuffle();
    resetBoard();
    modal.style.display = "none";
    cards.forEach(card => card.addEventListener('click', flipCard));       /* loop through list and on click then fire flipcard*/
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
};

function restartMatch(){
    // reset match
    matches = 0;
};

function shuffle(){                                                /* immediately invoked function expression */
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 16);
        card.style.order = randomPosition;
    });
};

function hide(){
    cards.forEach(card => {
        if (!hasFlippedCard) {
            lockBoard = false;
            card.classList.remove('flip');
        }
    });
}

function finish(){
    clearInterval(interval);
    finalTime = timer.innerHTML;
    modal.style.display = "block";
    document.getElementById("finalMove").innerHTML = moves;
    document.getElementById("totalTime").innerHTML = finalTime;

}



// Get the modal
var modal = document.getElementById("myModal");


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
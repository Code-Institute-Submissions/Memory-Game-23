const cards = document.querySelectorAll('.card');                       /* list of all card elements stored in cards */

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard (){                                                   /* function called on click */
    this.classList.toggle('flip');

    if (!hasFlippedCard){
        // first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // second click
        hasFlippedCard = false;
        secondCard = this;
    
        // do cards match?
        console.log(firstCard.dataset.cardId);
        console.log(secondCard.dataset.cardId);
    }
}


cards.forEach (card => card.addEventListener('click', flipCard));       /* loop through list and on click then fire flipcard*/
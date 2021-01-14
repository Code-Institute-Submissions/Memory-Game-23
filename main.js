const cards = document.querySelectorAll('.card');                       /* list of all card elements stored in cards */

function flipCard (){                                                   /* function called on click */
    console.log('I was clicked');
    console.log(this);
}

cards.forEach (card => card.addEventListener('click', flipCard));       /* loop through list and on click then fire flipcard*/
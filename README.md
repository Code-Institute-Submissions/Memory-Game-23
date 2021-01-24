# Doc's Memory Game (Card Memory Game)

This is website for the user to come on and have fun playing a simple card game.

It is made up of a clear and concise single game and the user can start playing straight away.

It is designed to be intuitive and easy to use.


## UX

The site's users are people who are trying to improve their hand eye coordination, cognitive skills, or simply just looking to kill a few minutes with a bit of fun.

The sites creators’ intention is the same as the user.

It’s a very simple UX idea having only one page, with an email contact link to the creator at the bottom.

Some thoughts I had before designing my site;

* What information was relevant for the user?
* How many unknown variables would I use?
* What does the user need for the game to be fun?
* How will I challenge the user?

### Design

* Colour Scheme
    * The colour scheme I used was is 3 colours, black, red and white, to match the colours used in common deck of cards, and a background colour of grey.
* Typography
    * The main draw to the site is the images so I kept the font to default Sans Serif
* Imagery
    * The imagery I decided on was a common deck of cards, it's universal and most people will have seen them before
* Wireframes
    * Links to my initial Wireframe design is in the “Wireframe” folder in my repository.

## Features 

* From the "Project Example Idea 2" it suggested to "Build a simple single-player pattern-matching memory game." so that was the goal of my site.

* I choose cards as most people are familiar and have seen this type of game before.

* As I went along I realised that just in case the page ever broke down or was inoperable that there was no way of the user to notify me, hence I added an email link to the footer.

### Existing Features

* Header – displays the title, reset button, amount of moves and time in seconds.

* Game Area - is the area (div) between the header and footer that the cards are displayed on

* Cards - I started with an idea of 8 cards, 16 in total, as this would give a nice game area and would be aesthetically pleasing

* Footer – contains my name and a way to contact me

### Features Left to Implement

* A start page describing the game, how to play and start button.

* A scoring system - as I worked through the design I thought there should a difficulty option setting, a drop down menu with easy - 16 cards, normal - 36 cards, and hard - 36 cards with the flip back timer set to 200.

* A modal with a name, return email, and message input so that if the user is contacting me they can just type their message directly without having to open there emails on another tab.


## Technologies Used

### Languages Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [Java](https://en.wikipedia.org/wiki/JavaScript)
* [jQuery](https://en.wikipedia.org/wiki/JQuery)

### Frameworks, Libraries & Programs Used
* [Code-Institute-Org/gitpod-full-template](https://github.com/Code-Institute-Org/gitpod-full-template)
    * The project was built using this template
* [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
    * The project uses Bootstrap for styling
* [Font Awesome](https://fontawesome.com/)
    * The project uses Font Awesome for the Icons
* [hover.css](https://cdnjs.com/libraries/hover.css)
    * The project uses hover.css for the hover effect on the buttons and links
* [Balsamiq](https://balsamiq.com/)
    * I used this to create the wireframes 
* [GitHub](https://github.com/)
    * I used this to store the project as I was developing it
* [GitPod](https://gitpod.io/)
    * I used this to write the code and used it to push the code to GitHub


## Testing

I used the W3C Markup Validator and W3C CSS Validator to validate my project making sure that there were no syntax errors.

* [W3C Markup Validator](https://jigsaw.w3.org/css-validator/)
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

I used Google Chrome and Google Developer Tools for mobile devices to work through and test the page using real world events as the parameters, e.g. playing the game, completing and restarting.

1. Played the game, completed the game, restart from modal restart button:
    * Click and matched all cards
    * When the modal popped up
    * Restarted the game from the restart button displayed on the modal
    * Game area was reset, shuffled and hidden for new game

* Also tested on mobile device

2. Played the game, completed the game, clicked outside of modal, restarted from header restart button:
    * Click and matched all cards
    * When the modal popped up
    * clicked outside of modal which got rid of modal
    * Restarted the game from the restart button displayed in header
    * Game area was reset, shuffled and hidden for new game

* Also tested on mobile device

3. Played the game, after 4 matches, restarted from header restart button:
    * Click and matched 4 cards
    * Restarted the game from the restart button displayed in the header
    * Game area was reset, shuffled and hidden for new game

* Also tested on mobile device

4.	Contact link:
    * Contact link in footer when clicked opens new tab with "mailto:doc.martin@gmail.com" in address bar


## Deployment

This project was developed using GitPod, committed to git and pushed to GitHub using the built in function within GitPod.

To deploy this page to GitHub Pages from its GitHub Repository, the following steps were taken:

1.	Log into GitHub.

2.	From the list of repositories on the screen, select docmartin87/Memory-Game

3.	From the menu items near the top of the page, select Settings

4.	Scroll down to the GitHub Pages section

5.	Under Source, select Master Branch in the dropdown menu and hit Save

6.	The page will refresh

7.	Scroll back down the page to locate the now published site link

Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps;

1. Log in to GitHub and locate the GitHub Repository

2. At the top right of the page locate and click the "Fork" Button.

3. You should now have a copy of the original repository in your GitHub account.


## Credits

I struggled a lot with this project, partly down to the workload outside of the course that I had to take on for personal reasons over the Christmas break which led me to needing an extension to complete the assignment, which added more pressure because I felt I was falling behind.

If I've learned anything extra from this assignment it's that, having the general idea and then researching online and seeing how other people went about it is good, but too much research and looking at too many different videos and code can be overwhelming. This can be seen by the amount of times I started from scratch with this assignment.


### Code

* After overwhelming myself and restarting my assignment for the 4th time, I found that this video from freeCodeCamp.org I was able to follow and adapt to what I needed [Link](https://www.youtube.com/watch?v=ZniVgo8U7ek&ab_channel=freeCodeCamp.org)

* [Modal](https://www.w3schools.com/howto/howto_css_modals.asp)

* [My first template](https://github.com/docmartin87/memory-game-template-1) which I was attempting after researching from Code with Ania Kubów [Link](https://www.youtube.com/watch?v=tjyDOHzKN0w&ab_channel=CodewithAniaKub%C3%B3w)

* [My second template](https://github.com/docmartin87/memory-game-template-2) which I was attempting after researching from a combination of Web Dev Junkie [Link](https://www.youtube.com/watch?v=bbb9dZotsOc&ab_channel=WebDevJunkie) and Ben's Memory Game [Link](https://www.youtube.com/watch?v=Nik1E9HdrsI&ab_channel=Premraj)

* [My third template](https://github.com/docmartin87/memory-game-template-3) which I was attempting after researching from sandra srael/Memory-Game-fend [Link](https://github.com/sandraisrael/Memory-Game-fend)


### Media

* The card images [Link](http://acbl.mybigcommerce.com/52-playing-cards/)


### Acknowledgements

* Roman, my Tutor and Classroom coordinator

* Tutor Support from Code Institute

* Neil and the Student Care team 

* I received inspiration for this project from the Code Institute Module - Interactive Frontend Development, and from previous modules.

* I received styling inspiration for this project from most flip card turning memory games

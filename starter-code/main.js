console.log("JS file is connected to HTML! Woo!")
/*below is the name of each card and the face they have*/
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardTwo === cardFour) {
  alert ('Sorry, this is not a match. Give it another try.');
} else if (cardOne === cardTwo) {
  alert ('Congrats! You found a match.');
} else if (cardThree === cardFour) {
  alert ('Congrats! You found a match.');
} else
  alert ('Sorry, this is not a match. Give it another try.');
  }
  */
var createCards = function() {
var gameBoard = document.getElementById('game-board');
 for(var i = 1; i <= 4; i++) {
   var newCard = document.createElement("div");
   newCard.className = "card";
    gameBoard.appendChild(newCard);
 }
}

createCards();
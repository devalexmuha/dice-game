var rollButton = document.querySelector('.game__btn');

rollButton.addEventListener('click', diceGame);

function diceGame(){
  var playerOneNumber = Math.floor(Math.random() * 6);
  var playerTwoNumber = Math.floor(Math.random() * 6);
  var playerOneTitle = document.querySelector(".game__player-name--one");
  var playerTwoTitle = document.querySelector(".game__player-name--two");
  var diceImageOne = document.querySelector(".game__image--player-one");
  var diceImageTwo = document.querySelector(".game__image--player-two");
  var gameTitle = document.querySelector(".game__title");
  var diceImages = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
  ];

  diceImageOne.setAttribute("src", diceImages[playerOneNumber]);
  diceImageTwo.setAttribute("src", diceImages[playerTwoNumber]);

  playerOneTitle.textContent = "Player 1";
  playerTwoTitle.textContent = "Player 2";
  gameTitle.textContent = "Let's Roll";

  if (playerOneNumber === playerTwoNumber){
    gameTitle.textContent = "Roll Again";
  } else if (playerOneNumber > playerTwoNumber){
    playerOneTitle.textContent = "Winner 🚩";
  } else {
    playerTwoTitle.textContent = "Winner 🚩";
  }
}

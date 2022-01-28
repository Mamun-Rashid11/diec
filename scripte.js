

function firstPlayer () {
  // first player 
  var randomNumberGenerator = Math.floor(Math.random() * 6 ) + 1 ;
  var imagesSorcePath = "images/dice" + randomNumberGenerator + ".png"; 
  var setImage = document.querySelectorAll("img")[0].setAttribute("src" , imagesSorcePath);
  var number = document.querySelectorAll("h2")[0].innerHTML = randomNumberGenerator ;
  var diceSound = new Audio("dice.wav");
  diceSound.play();
}


function secondPlayer () {
  // Second player 

  var secondNumberGenerator = Math.floor(Math.random() * 6 ) + 1 ;
  var secondImagesSorcePath = "images/dice" + secondNumberGenerator + ".png";
  var secondSetImage = document.querySelectorAll("img")[1].setAttribute("src" , secondImagesSorcePath);
  var numberTo = document.querySelectorAll("h2")[1].innerHTML = secondNumberGenerator ;
  var diceSound = new Audio("dice.wav");
  diceSound.play();
}











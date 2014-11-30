// Initialize

$(function() { // on document ready
  rpsGame = new Game();
  $('.computer-rock').hide();
  $('.computer-paper').hide();
  $('.computer-scissors').hide();
  $('.play-again').hide();
  $('.tie').hide();
  $('.win').hide();
  $('.lost').hide();
  rpsGame.play();
});

var choices;

function Game(){
 this.$humanPlayRock = $('.rock');
 this.$humanPlayPaper = $('.paper');
 this.$humanPlayScissors = $('.scissors');
 this.$computerPlayRock = $('.computer-rock');
 this.$computerPlayPaper = $('.computer-paper');
 this.$computerPlayScissors = $('.computer-scissors');
 this.$playAgain = $('.play-again');
 this.playerSelection = " ";
 this.computerSelection = " ";
}

Game.prototype.play = function() {
  var _this = this;
  this.$humanPlayRock.on("click", function(event) {
     event.preventDefault();
    _this.$humanPlayPaper.hide();
    _this.$humanPlayScissors.hide();
    _this.$humanPlayRock.unbind();
    _this.playerSelection = "rock";
    setTimeout(function() {
      _this.computerTurn();}, 1350);
  });

  this.$humanPlayPaper.on("click", function(event) {
     event.preventDefault();
    _this.$humanPlayRock.hide();
    _this.$humanPlayScissors.hide();
    _this.$humanPlayPaper.unbind();
    _this.playerSelection = "paper";
      setTimeout(function() {
      _this.computerTurn();}, 1350);
  });

  this.$humanPlayScissors.on("click", function(event) {
     event.preventDefault();
    _this.$humanPlayRock.hide();
    _this.$humanPlayPaper.hide();
    _this.$humanPlayScissors.unbind();
     _this.playerSelection = "scissors";
     setTimeout(function() {
      _this.computerTurn();}, 1350);
  });

};

Game.prototype.computerTurn = function() {
  var _this = this;
  choices = ["rock", "paper", "scissors"];

  this.computerPlay = choices[Math.floor(Math.random()*choices.length)];
    if(this.computerPlay === "rock"){
    _this.$computerPlayRock.show();
    _this.computerSelection = "rock";
  } else if (this.computerPlay === "paper"){
    _this.$computerPlayPaper.show();
    _this.computerSelection = "paper";
  } else if (this.computerPlay === "scissors"){
   _this.$computerPlayScissors.show();
   _this.computerSelection = "scissors";
  }

  this.displayOutcome();

   this.$playAgain.fadeIn(4000);
   this.$playAgain.on("click", function(event) {
   event.preventDefault();
      _this.restartGame();
     });
};

Game.prototype.displayOutcome = function () {
  if (this.playerSelection === this.computerSelection) {
    $('.tie').fadeIn(2000);
  } else if ( (this.playerSelection === "rock" && this.computerSelection === "scissors") ||
    (this.playerSelection === "scissors" && this.computerSelection === "paper") ||
    (this.playerSelection === "paper" && this.computerSelection === "rock") ) {
      $('.win').fadeIn(2000);
  } else if ( (this.computerSelection === "rock" && this.playerSelection === "scissors") ||
    (this.computerSelection === "scissors" && this.playerSelection === "paper") ||
    (this.computerSelection === "paper" && this.playerSelection === "rock") ) {
      $('.lost').fadeIn(2000);
  }
};

Game.prototype.restartGame = function() {
  location.reload();
 };



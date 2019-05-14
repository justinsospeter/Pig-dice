//business logic
var player1="";
var player2="";

var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}

function Player(turn) {
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.turn = turn;
    this.playerName;
  }
 
  // checking for 1
Player.prototype.rollone = function() {
    if (this.roll === 1) {
    this.tempscore = 0;
    alert("Sorry " + this.playerName + ", You rolled a 1! Your turn is done!")
    // this.changeturn();
    } else {
    this.tempscore += this.roll;
    }
  }

  Player.prototype.hold = function () {
    this.totalscore += this.tempscore;
    this.tempscore = 0;
    // this.changeturn();
    alert(this.playerName + ", Your turn is done, pass the mouse!");
  }

  Player.prototype.winnerCheck = function () {
    if (this.totalscore >= 100) {
      alert(this.playerName + " You are the winner!");
    }
  }

  Player.prototype.newGame = function () {
    //debugger;
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.playerName ="";
  }

  var clearValues = function(){
    $(".player1Name").val("");
    $(".player2Name").val("");
  }

  // User Interface
$(document).ready(function() {

    $("button#start").click(function(event){
      player1 = new Player(true);
      player2 =  new Player(false);
      $(".player-console").show();
      $(".start-menu").hide();
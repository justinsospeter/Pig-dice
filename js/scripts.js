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
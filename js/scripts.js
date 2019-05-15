
  // User Interface
$(function() {

    $("button#click").click(function(){
      player1 = new Players(true);
      player2 =  new Players(false);
     
      var name1 = $(".name1").val();
    $("#name1").text(name1);

    var name2 = $(".name2").val();
    $("#name2").text(name2);

    player1.playerName=name1;
    player2.playerName=name2;
    
  });
  
  $("button#roll1").click(function(){
    roll1 = rolldice();
    player1.rollone();
    $("#die1").text(roll1);
    $("#totalround.1").text(player1.tempscore);
  });

  $("button#roll2").click(function(){
    roll2 = rolldice();
    player2.rollone();
    $("#die2").text(roll2);
    $("#totalround.2").text(player2.tempscore);
  });


  $("button#hold1").click(function(){
    player1.hold();
    $("#totalscore.1").text(player1.totalscore);
    $("#totalround.1").empty();
    $("#die1").empty();
    player1.winnerCheck();
  });

  $("button#hold2").click(function(){
    player2.hold();
    $("#totalscore.2").text(player2.totalscore);
    $("#totalround.2").empty();
    $("#die2").empty();
    player2.winnerCheck();
  });

});


//business logic
var player1="";
var player2="";

var rolldice = function () {
  return Math.floor(Math.random() * 6 )+1;
}


function Players(turn) {
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.turn = turn;
    this.playerName;
  }

 
  // check for 1
Players.prototype.rollone = function() {
    if (this.roll === 1) {
    this.tempscore = 0;
    alert("Sorry " + this.playerName + ", You rolled a 1! Your turn is done!")
    } else {
    this.tempscore += this.roll;
    }
  }

  Players.prototype.hold = function () {
    this.totalscore += this.tempscore;
    this.tempscore = 0;
    // this.changeturn();
    alert(this.playerName + ", Your turn is done, pass the mouse!");
  }

  Players.prototype.winnerCheck = function () {
    if (this.totalscore >= 100) {
      alert(this.playerName + " You are the winner!");
    }
  }
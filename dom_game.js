
// Game for human and a bot
//$(document).ready(function() {
  //$(".notification").html("<p>Player " + current_player.color + " was randomly selected to go first.</p>");
//});

function finish_game() {
  $(".cell").off("click");
  $(".new_game").html('<button type="button" class="btn btn-default btn-primary">Click here to start a new game</button>');
  $(".new_game").click(function() {
    location.reload();
  })
}

//Game for 2 humans
var board = new Board();
var player_x = new Player("X");
var player_o = new Player("O");
var ttt = new TicTacToe(board, player_x, player_o);
var current_player = ttt.random_player;

$(document).ready(function() {
  $(".notification").html("<p>Player " + current_player.color + " was randomly selected to go first.</p>");

  $(".cell").click(function() {
    $(this).html("<p>" + current_player.color + "</p>");

    var index = $(this).attr("id").split("_").pop();
    ttt.board.set(index, current_player.color);
    if (ttt.winner() == "X") {
      $(".notification").html("<p>Player X is the winner</p>");
      finish_game();
    }
    else if (ttt.winner() == "O") {
      $(".notification").html("<p>Player O is the winner</p>");
      finish_game();
    }
    else if (ttt.tie()) {
      $(".notification").html("<p>The game ended in a tie</p>");
      finish_game();
    }
    current_player = ttt.other_player(current_player);
    $(this).off("click");
  });

});

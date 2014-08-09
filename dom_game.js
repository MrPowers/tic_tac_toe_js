var p = new TicTacToe();
var current_player = p.random_player;

$(document).ready(function() {
  $(".notification").html("<p>Player " + current_player.color + " was randomly selected to go first.</p>");

  $(".cell").click(function() {
    $(this).html("<p>" + current_player.color + "</p>");

    var index = $(this).attr("id").split("_").pop();
    p.board.set(index, current_player.color);
    if (p.winner() == "X") {
      $(".notification").html("<p>Player X is the winner</p>");
      finish_game();
    }
    else if (p.winner() == "O") {
      $(".notification").html("<p>Player O is the winner</p>");
      finish_game();
    }
    else if (p.tie()) {
      $(".notification").html("<p>The game ended in a tie</p>");
      finish_game();
    }
    current_player = p.other_player(current_player);
    $(this).off("click");
  });

});

function finish_game() {
  $(".cell").off("click");
  $(".new_game").html('<button type="button" class="btn btn-default btn-primary">Click here to start a new game</button>');
  $(".new_game").click(function() {
    location.reload();
  })
}

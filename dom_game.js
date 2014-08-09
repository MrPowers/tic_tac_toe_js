var p = new TicTacToe();
var current_player = p.random_player;

$(document).ready(function() {
  $(".notification").html("Player " + current_player.color + " was randomly selected to go first.");

  $(".cell").click(function() {
    $(this).html(current_player.color);

    var index = $(this).attr("id").split("_").pop();
    p.board.set(index, current_player.color);
    if (p.winner() == "X") {
      $(".notification").html("Player X is the winner");
      finish_game();
    }
    else if (p.winner() == "O") {
      $(".notification").html("Player O is the winner");
      finish_game();
    }
    else if (p.tie()) {
      $(".notification").html("The game ended in a tie");
      finish_game();
    }
    current_player = p.other_player(current_player);
  });

});

function finish_game() {
  $(".cell").off("click");
  $(".new_game").html("Click here to start a new game");
  $(".new_game").click(function() {
    location.reload();
  })
}

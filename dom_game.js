// Game for human and a bot
// "you" is the human and "I" am the bot
$(document).ready(function() {
  var board = new Board();
  var human = new Player({"color": "X", "isBot": false, "pronoun": "you"});
  var bot = new Player({"color": "O", "isBot": true, "pronoun": "I"});
  var ttt = new TicTacToe(board, human, bot);
  var ai = new AI(ttt, bot, human);
  var current_player;

  $(".game-grid").hide();

  $("#human-first").click(function() {
    current_player = human;
    after_first_player_select();
  });

  $("#bot-first").click(function() {
    current_player = bot;
    after_first_player_select();
    bot_move();
  });

  function after_first_player_select() {
    $(".notification").text("Ok, " + current_player.pronoun + " will go first.  You will be " + human.color + " and I will be " + bot.color + ".");
    $("#first-player").hide();
    $(".game-grid").fadeIn(1000);
  }

  $(".cell").click(function() {
    $(this).html("<p>" + current_player.color + "</p>");

    var index = $(this).attr("id").split("_").pop();
    ttt.board.set(index, current_player.color);
    after_move();
    $(this).off("click");
    if (!ttt.game_over()) {
      bot_move();
    }
  });

  function bot_move() {
    var index = ai.better_move();
    board.set(index, current_player.color);
    var id = "#cell_" + index;
    $(id).html("<p>" + current_player.color + "</p>");
    after_move();
  }

  function after_move() {
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
  }

  function finish_game() {
    $(".cell").off("click");
    $(".new_game").html('<button type="button" class="btn btn-default btn-primary">Click here to start a new game</button>');
    $(".new_game").click(function() {
      location.reload();
    })
  }

});

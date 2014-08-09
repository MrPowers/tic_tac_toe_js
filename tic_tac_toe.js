function TicTacToe () {
  this.player_x = new Player("X");

  this.player_o = new Player("O");

  this.players = [this.player_x, this.player_o];

  this.board = new Board();

  this.winning_positions = function () {
    var b = this.board;
    return (b.rows()).concat(b.columns()).concat(b.diagonals());
  }

  this.winner = function () {
    var arr = this.winning_positions();
    for (var i = 0, l = arr.length; i < l; i ++) {
      var v = arr[i];
      if (v.equals(["X", "X", "X"])) {
        return "X"
      } else if (v.equals(["O", "O", "O"])) {
        return "O"
      }
    }
  }

  this.tie = function () {
    var arr = this.board.grid;
    for (var i = 0, l = arr.length; i < l; i ++) {
      var v = arr[i];
      if (v === undefined) { return false };
    }
    return true;
  }

  this.other_player = function (current_player) {
    var arr = this.players;
    for (var i = 0, l = arr.length; i < l; i ++) {
      var v = arr[i];
      if (v != current_player) {
        return v;
      }
    }
  }

  this.random_player = this.players[Math.floor(Math.random() * this.players.length)];

  this.console_game = function () {
    console.log("Let's play tic-tac-toe!");
    var current_player = this.random_player;
    console.log("Player " + current_player.color + " was randomly selected to go first");
    while (true) {
      var index = prompt("Enter your move Player " + current_player.color);
      this.board.set(index, current_player.color);
      if (this.winner() == "X") {
        console.log("Player X is the winner");
        break
      }
      else if (this.winner() == "O") {
        console.log("Player O is the winner");
        break
      }
      else if (this.tie()) {
        console.log("The game ended in a tie");
        break
      }
      current_player = this.other_player(current_player);
    }
  }

}
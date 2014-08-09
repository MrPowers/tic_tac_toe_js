function TicTacToe (board, player_x, player_o) {
  this.player_x = player_x;

  this.player_o = player_o;

  this.players = [this.player_x, this.player_o];

  this.board = board;

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

  this.random_player = this.players.sample();

}

// takes a board and a player color and returns the optimal move
function AI (ttt, bot, human) {

  this.ttt = ttt;
  this.board = ttt.board;
  this.bot = bot;
  this.human = human;

  this.better_move = function () {
    if (this.winning_move()) {
      return this.winning_move();
    } else if (this.defending_move()) {
      return this.defending_move();
    } else if (this.take_middle()) {
      return this.take_middle();
    } else if (this.take_corner()) {
      return this.take_corner();
    } else {
      return this.random_move();
    }
  }

  this.take_middle = function () {
    if (this.board.grid[4] === undefined) {
      return 4;
    }
  }

  this.take_corner = function () {
    var corners = [0, 2, 6, 8];
    var that = this;
    var open_corners = corners.filter(function(x) {
      return that.board.grid[x] === undefined
    });
    if (open_corners.sample()) {
      return open_corners.sample().toString();
    }
  }

  this.random_move = function () {
    return this.board.open_spaces().sample();
  }

  this.end_game = function (player) {
    arr = this.board.grid;
    for (var i = 0, l = arr.length; i < l; i ++) {
      var v = arr[i];
      if (v === undefined) {
        this.board.set(i, player.color);
        if (this.ttt.winner() === player.color) {
          this.board.set(i, undefined);
          // return a string because 0 is falsey in JS
          return i.toString();
        }
        this.board.set(i, undefined);
      }
    }
  }

  this.winning_move = function () {
    return this.end_game(this.bot);
  }

  this.defending_move = function () {
    return this.end_game(this.human);
  }

}

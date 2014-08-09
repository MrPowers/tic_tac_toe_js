function Board () {

  this.grid = new Array(9);

  this.set = function(index, value) {
    this.grid[index] = value;
  }

  this.rows = function () {
    var g = this.grid;
    return [
      [g[0], g[1], g[2]],
      [g[3], g[4], g[5]],
      [g[6], g[7], g[8]]
    ];
  }

  this.columns = function () {
    var g = this.grid;
    return [
      [g[0], g[3], g[6]],
      [g[1], g[4], g[7]],
      [g[2], g[5], g[8]]
    ];
  }

  this.diagonals = function () {
    var g = this.grid;
    return [
      [g[0], g[4], g[8]],
      [g[6], g[4], g[2]]
    ];
  }

  this.open_spaces = function () {
    var r = [];
    var arr = this.grid;
    for (var i = 0, l = arr.length; i < l; i ++) {
      var v = arr[i];
      if (v === undefined) {
        r.push(i);
      }
    }
    return r;
  }

  // helper methods to print a pretty board in the console
  this.formatted_row = function (arr) {
    var r = arr.map(function(e) {
      var v = (e === undefined ? "_" : e)
      return v
    });
    return r.join(" ");
  }

  this.formatted_board = function () {
    var rows = this.rows();
    for (var i = 0, l = rows.length; i < l; i ++) {
      var v = rows[i];
      console.log(this.formatted_row(v));
    }
  }

};

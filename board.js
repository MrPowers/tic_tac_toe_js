function Board () {

  this.grid = new Array(9);

  this.set = function(index, value) {
    this.grid[index] = value;
  };

  this.rows = function () {
    var g = this.grid;
    return [
      [g[0], g[1], g[2]],
      [g[3], g[4], g[5]],
      [g[6], g[7], g[8]]
    ];
  };

  this.columns = function () {
    var g = this.grid;
    return [
      [g[0], g[3], g[6]],
      [g[1], g[4], g[7]],
      [g[2], g[5], g[8]]
    ];
  };

  this.diagonals = function () {
    var g = this.grid;
    return [
      [g[0], g[4], g[8]],
      [g[6], g[4], g[2]]
    ];
  };

};

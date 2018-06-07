var Board =
{
  rows: 5,
  column: 5,
  GetBoard: function ()
  {
    return document.getElementsByClassName('board')[0];
  },
  GetPlayButton: function ()
  {
   return document.getElementById('play');
  },
  GetCells: function ()
  {
   return document.getElementsByClassName('alive');
  },
  createCells: function ()
  {
    var board = Board.GetBoard();
    var html = '';
    var cellCount = Board.rows * Board.column;
    for (var i = 0; i < (cellCount); i++)
    {
     html = html + '<li></li>';
    }
    board.innerHTML = html;
  },
  updateCells: function (cells)
  {
    for (var i = 0; i < cells.length; i++) {
      Cell.changeColor(cells[i]);
    }
  }
}

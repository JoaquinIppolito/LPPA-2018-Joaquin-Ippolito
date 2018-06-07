var Board =
{
  rows: 5,
  column: 5,
  GetPlayButton: function ()
  {
   return document.getElementById('play');
  },
  GetCells: function ()
  {
   return document.getElementsByClassName('alive');
  },
  updateCells: function (cells)
  {
    for (var i = 0; i < cells.length; i++) {
      Cell.changeColor(cells[i]);
    }
  }
}

console.log('asd');

var play = function ()
{
  var cells = Board.GetCells();
   Board.updateCells(cells);
}

window.onload = function ()
{
  Board.createCells()
  var btnPlay = Board.GetPlayButton();
  btnPlay.onclick = play;
}

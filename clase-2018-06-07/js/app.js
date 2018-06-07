console.log('bysda');

var play = function ()
{
  var cells = Board.GetCells();
   Board.updateCells(cells);
}

window.onload = function () {
  var btnPlay = Board.GetPlayButton();
  btnPlay.onclick = play;
}

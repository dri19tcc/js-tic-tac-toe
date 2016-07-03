$(document).on('ready', function() {
  console.log('create and begin the game here!');

  var ttt = new TicTacToe()
  var is_x = true
  var counter = 0
  var morePlays = true
  var xTotal = 0
  var oTotal = 0

  $('.boxes').mousedown(function (event) {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o") && morePlays === true)  {
      $(this).addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      counter += 1
      ttt.checkWin()
      ttt.checkDraw()
    }
  })

  $(".game.reset").mousedown(function () {
    ttt.newGame()
  })

  $(".game.new").mousedown(function () {
    ttt.newGame(true)
  })

  function TicTacToe() {}

  TicTacToe.prototype.checkWin = function () {
    var tx = $("#top-row .active-x").length === 3
    var to = $("#top-row .active-o").length === 3
    var mx = $("#mid-row .active-x").length === 3
    var mo = $("#mid-row .active-o").length === 3
    var bx = $("#low-row .active-x").length === 3
    var bo = $("#low-row .active-o").length === 3

    var lx = $(".left.active-x").length === 3
    var lo = $(".left.active-o").length === 3
    var cx = $(".center.active-x").length === 3
    var co = $(".center.active-o").length === 3
    var rx = $(".right.active-x").length === 3
    var ro = $(".right.active-o").length === 3

    var dlx = $(".diag1.active-x").length === 3
    var dlo = $(".diag1.active-o").length === 3
    var drx = $(".diag2.active-x").length === 3
    var dro = $(".diag2.active-o").length === 3

    if (tx || mx || bx || lx || cx || rx || dlx || drx) {
      document.getElementById("winner").innerHTML = "X won!!!"
      xTotal += 1
      morePlays = false
      ttt.updateScore()
    }

    if (to || mo || bo || lo || co || ro || dlo || dro) {
      document.getElementById("winner").innerHTML = "O won!!!"
      oTotal += 1
      morePlays = false
      ttt.updateScore()
    }

  }

  TicTacToe.prototype.newGame = function (resetScores = false) {
    $(".boxes").removeClass("active-x").removeClass("active-o")
    is_x = true
    morePlays = true
    document.getElementById("winner").innerHTML = ""
    counter = 0
    ttt.updateScore()
    if (resetScores) {
      xTotal = 0
      oTotal = 0
      ttt.updateScore()
    }
  }

  TicTacToe.prototype.checkDraw = function () {
    if (counter == 9) {
      document.getElementById("winner").innerHTML = "It's a Draw"
    }
  }

  TicTacToe.prototype.updateScore = function () {
    $('.leftScore').html(xTotal);
    $('.rightScore').html(oTotal);
  }
})

$(document).on('ready', function() {
  console.log('create and begin the game here!');

  var ttt = new TicTacToe()
  var is_x = true
  var counter = 0
  var morePlays = true
  var xTotal = 0
  var oTotal = 0

  $('.up-left.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o") && morePlays === true)  {
      $('.up-left.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      counter += 1
      ttt.checkWin()
      ttt.checkDraw()
    }
  })

  $('.middle-left.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o") && morePlays === true) {
      $('.middle-left.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      counter += 1
      ttt.checkWin()
      ttt.checkDraw()
    }
  })

  $('.low-left.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o") && morePlays === true) {
      $('.low-left.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      counter += 1
      ttt.checkWin()
      ttt.checkDraw()
    }
  })

  $('.up-middle.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o") && morePlays === true) {
      $('.up-middle.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      counter += 1
      ttt.checkWin()
      ttt.checkDraw()
    }
  })

  $('.middle-middle.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o") && morePlays === true) {
      $('.middle-middle.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      counter += 1
      ttt.checkWin()
      ttt.checkDraw()
    }
  })

  $('.low-middle.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o") && morePlays === true) {
      $('.low-middle.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      counter += 1
      ttt.checkWin()
      ttt.checkDraw()
    }
  })

  $('.up-right.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o") && morePlays === true) {
      $('.up-right.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      counter += 1
      ttt.checkWin()
      ttt.checkDraw()
    }
  })

  $('.middle-right.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o") && morePlays === true) {
      $('.middle-right.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      counter += 1
      ttt.checkWin()
      ttt.checkDraw()
    }
  })

  $('.low-right.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o") && morePlays === true) {
      $('.low-right.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      counter += 1
      ttt.checkWin()
      ttt.checkDraw()
    }
  })

  $(".game.reset").mousedown(function () {
    ttt.resetGame()
  })

  $(".game.new").mousedown(function () {
    ttt.newGame()
  })

  function TicTacToe() {}

  TicTacToe.prototype.checkWin = function () {
    if ($(".up-right").hasClass("active-x") && $(".middle-right").hasClass("active-x") && $(".low-right").hasClass("active-x")) {
      document.getElementById("winner").innerHTML = "X won!!!"
      xTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".up-right").hasClass("active-o") && $(".middle-right").hasClass("active-o") && $(".low-right").hasClass("active-o")) {
      document.getElementById("winner").innerHTML = "O won!!!"
      oTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".up-middle").hasClass("active-x") && $(".middle-middle").hasClass("active-x") && $(".low-middle").hasClass("active-x")) {
      document.getElementById("winner").innerHTML = "X won!!!"
      xTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".up-middle").hasClass("active-o") && $(".middle-middle").hasClass("active-o") && $(".low-middle").hasClass("active-o")) {
      document.getElementById("winner").innerHTML = "O won!!!"
      oTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".up-left").hasClass("active-x") && $(".middle-left").hasClass("active-x") && $(".low-left").hasClass("active-x")) {
      document.getElementById("winner").innerHTML = "X won!!!"
      xTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".up-left").hasClass("active-o") && $(".middle-left").hasClass("active-o") && $(".low-left").hasClass("active-o")) {
      document.getElementById("winner").innerHTML = "O won!!!"
      oTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".up-left").hasClass("active-x") && $(".middle-middle").hasClass("active-x") && $(".low-right").hasClass("active-x")) {
      document.getElementById("winner").innerHTML = "X won!!!"
      xTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".up-left").hasClass("active-o") && $(".middle-middle").hasClass("active-o") && $(".low-right").hasClass("active-o")) {
      document.getElementById("winner").innerHTML = "O won!!!"
      oTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".up-right").hasClass("active-x") && $(".middle-middle").hasClass("active-x") && $(".low-left").hasClass("active-x")) {
      document.getElementById("winner").innerHTML = "X won!!!"
      xTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".up-right").hasClass("active-o") && $(".middle-middle").hasClass("active-o") && $(".low-left").hasClass("active-o")) {
      document.getElementById("winner").innerHTML = "O won!!!"
      oTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".up-right").hasClass("active-x") && $(".up-middle").hasClass("active-x") && $(".up-left").hasClass("active-x")) {
      document.getElementById("winner").innerHTML = "X won!!!"
      xTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".up-right").hasClass("active-o") && $(".up-middle").hasClass("active-o") && $(".up-left").hasClass("active-o")) {
      document.getElementById("winner").innerHTML = "O won!!!"
      oTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".middle-right").hasClass("active-x") && $(".middle-middle").hasClass("active-x") && $(".middle-left").hasClass("active-x")) {
      document.getElementById("winner").innerHTML = "X won!!!"
      xTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".middle-right").hasClass("active-o") && $(".middle-middle").hasClass("active-o") && $(".middle-left").hasClass("active-o")) {
      document.getElementById("winner").innerHTML = "O won!!!"
      oTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".low-right").hasClass("active-x") && $(".low-middle").hasClass("active-x") && $(".low-left").hasClass("active-x")) {
      document.getElementById("winner").innerHTML = "X won!!!"
      xTotal += 1
      morePlays = false
      ttt.updateScore()
    } else if ($(".low-right").hasClass("active-o") && $(".low-middle").hasClass("active-o") && $(".low-left").hasClass("active-o")) {
      document.getElementById("winner").innerHTML = "O won!!!"
      oTotal += 1
      morePlays = false
      ttt.updateScore()
    }
  }

  TicTacToe.prototype.resetGame = function () {
    ($(".up-right").removeClass("active-x") && $(".up-right").removeClass("active-o") && $(".up-middle").removeClass("active-x") && $(".up-middle").removeClass("active-o") && $(".up-left").removeClass("active-x") && $(".up-left").removeClass("active-o") && $(".middle-right").removeClass("active-x") && $(".middle-right").removeClass("active-o") && $(".middle-middle").removeClass("active-x") && $(".middle-middle").removeClass("active-o") && $(".middle-left").removeClass("active-x") && $(".middle-left").removeClass("active-o") && $(".low-right").removeClass("active-x") && $(".low-right").removeClass("active-o") && $(".low-middle").removeClass("active-x") && $(".low-middle").removeClass("active-o") && $(".low-left").removeClass("active-x") && $(".low-left").removeClass("active-o"))
    is_x = true
    morePlays = true
    document.getElementById("winner").innerHTML = ""
  }

  TicTacToe.prototype.newGame = function () {
    ($(".up-right").removeClass("active-x") && $(".up-right").removeClass("active-o") && $(".up-middle").removeClass("active-x") && $(".up-middle").removeClass("active-o") && $(".up-left").removeClass("active-x") && $(".up-left").removeClass("active-o") && $(".middle-right").removeClass("active-x") && $(".middle-right").removeClass("active-o") && $(".middle-middle").removeClass("active-x") && $(".middle-middle").removeClass("active-o") && $(".middle-left").removeClass("active-x") && $(".middle-left").removeClass("active-o") && $(".low-right").removeClass("active-x") && $(".low-right").removeClass("active-o") && $(".low-middle").removeClass("active-x") && $(".low-middle").removeClass("active-o") && $(".low-left").removeClass("active-x") && $(".low-left").removeClass("active-o"))
    is_x = true
    morePlays = true
    document.getElementById("winner").innerHTML = ""
    xTotal = 0
    oTotal = 0
    ttt.updateScore()
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

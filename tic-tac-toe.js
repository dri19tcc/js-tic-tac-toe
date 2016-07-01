$(document).on('ready', function() {
  console.log('create and begin the game here!');

  var ttt = new TicTacToe()
  var is_x = true

  $('.up-left.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o")) {
      $('.up-left.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      ttt.checkWin()
    }
  })

  $('.middle-left.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o")) {
      $('.middle-left.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      ttt.checkWin()
    }
  })

  $('.low-left.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o")) {
      $('.low-left.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      ttt.checkWin()
    }
  })

  $('.up-middle.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o")) {
      $('.up-middle.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      ttt.checkWin()
    }
  })

  $('.middle-middle.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o")) {
      $('.middle-middle.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      ttt.checkWin()
    }
  })

  $('.low-middle.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o")) {
      $('.low-middle.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      ttt.checkWin()
    }
  })

  $('.up-right.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o")) {
      $('.up-right.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      ttt.checkWin()
    }
  })

  $('.middle-right.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o")) {
      $('.middle-right.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      ttt.checkWin()
    }
  })

  $('.low-right.boxes').mousedown(function () {
    if (!$(this).hasClass("active-x") && !$(this).hasClass("active-o")) {
      $('.low-right.boxes').addClass(is_x ? "active-x" : "active-o")
      is_x = !is_x
      ttt.checkWin()

    }
  })

  function TicTacToe() {}

  TicTacToe.prototype.checkWin = function () {
    if ($(".up-right").hasClass("active-x") && $(".middle-right").hasClass("active-x") && $(".low-right").hasClass("active-x") || $(".up-right").hasClass("active-o") && $(".middle-right").hasClass("active-o") && $(".low-right").hasClass("active-o")) {
      document.getElementById("winner").innerHTML = "Someone Won!"
    }
  }
})

//   var box_id = $(this).data('box')
//   console.log(box_id);
// //   // var box =
// //
// //   $('#tic-tac-toe .boxes').addClass("active")
// // })

// $('note').mousedown(function(event) { // instead of this line, use the data from the html
//     var note_id = $(this).data('note') + "Audio"
//     var note_id = $(this).text() + "Audio"
//     var note = $("#" + note_id)[0]
//     note.load()
//     note.play()
//   })

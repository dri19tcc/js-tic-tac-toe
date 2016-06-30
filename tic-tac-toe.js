$(document).on('ready', function() {
  console.log('create and begin the game here!');
  $('.up-left.boxes').mousedown(function () {
    $('.up-left.boxes').addClass("active")
  })
  $('.middle-left.boxes').mousedown(function () {
    $('.middle-left.boxes').addClass("active")
  })
  $('.low-left.boxes').mousedown(function () {
    $('.low-left.boxes').addClass("active")
  })
  $('.up-middle.boxes').mousedown(function () {
    $('.up-middle.boxes').addClass("active")
  })
  $('.middle-middle.boxes').mousedown(function () {
    $('.middle-middle.boxes').addClass("active")
  })
  $('.low-middle.boxes').mousedown(function () {
    $('.low-middle.boxes').addClass("active")
  })
  $('.up-right.boxes').mousedown(function () {
    $('.up-right.boxes').addClass("active")
  })
  $('.middle-right.boxes').mousedown(function () {
    $('.middle-right.boxes').addClass("active")
  })
  $('.low-right.boxes').mousedown(function () {
    $('.low-right.boxes').addClass("active")
  })

  function TicTacToe() {
  }

  TicTacToe.prototype = {

  }
})

$('note').mousedown(function(event) { // instead of this line, use the data from the html
    var note_id = $(this).data('note') + "Audio"
    var note_id = $(this).text() + "Audio"
    var note = $("#" + note_id)[0]
    note.load()
    note.play()
  })

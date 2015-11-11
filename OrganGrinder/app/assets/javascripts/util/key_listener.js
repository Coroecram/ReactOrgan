$(document).on('keyup', function (event) {
  var note = PressToNote[event.which];
  if (typeof note !== 'undefined'){
    KeyActions.keyUnpressed(note);
  }
});

$(document).on('keydown', function (event) {
  var note = PressToNote[event.which];
  if (typeof note !== 'undefined'){
    KeyActions.keyPressed(note);
  }
});

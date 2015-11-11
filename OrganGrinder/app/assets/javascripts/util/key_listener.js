$(document).on('keyup', function (event) {});

$(document).on('keydown', function (event) {
  console.log(event);
  // TODO changed event.which to note name
  KeyActions.keyPressed(event.which);
});

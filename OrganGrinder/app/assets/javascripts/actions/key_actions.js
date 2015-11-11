(function () {
  var KeyActions = window.KeyActions = {};

  KeyActions.keyPressed = function(key) {
    AppDispatcher.dispatch({
      type: KeyActionTypes.KEY_PRESSED,
      key: key
    });
  };

})();

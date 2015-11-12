(function () {
  var KeyActions = window.KeyActions = {};

  KeyActions.keyPressed = function(key) {
    AppDispatcher.dispatch({
      type: KeyActionTypes.KEY_PRESSED,
      key: key
    });
  };

  KeyActions.keyUnpressed = function(key) {
    AppDispatcher.dispatch({
      type: KeyActionTypes.KEY_UNPRESSED,
      key: key
    });
  };

  KeyActions.allKeyChange = function (keys) {
    AppDispatcher.dispatch({
      type: KeyActionTypes.ALL_KEY_CHANGE,
      keys: keys
    });
  };

})();

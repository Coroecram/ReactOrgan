(function () {
  // noteName: pressed?
  var _keys = {};

  var KeyStore = window.KeyStore = $.extend({}, EventEmitter.prototype, {

    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    isKeyPressed: function(key) {
      return !!_keys[key];
    },

    

  });

  KeyStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.type) {

      case KeyActionTypes.KEY_PRESSED:
        _keys[action.key] = true;
        KeyStore.emitChange();
        break;
      default:

    }
  });

})();

// for (var key in _keys){};
// _keys

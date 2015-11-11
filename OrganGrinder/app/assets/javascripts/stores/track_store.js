(function() {
  var _tracks = [];

  var TrackStore = window.TrackStore = $.extend({}, EventEmitter.prototype, {

    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    createTrack: function(track) {
      console.log("creating:", track);
    },

    fetch: function(){
      return;
    },

    all: function() {
      return _tracks.slice();
    }

  });

  TrackStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.type) {

      case TrackActionTypes.CREATE_TRACK:
        TrackStore.create(action.track);
        TrackStore.emitChange();
        break;
      default:

    }
  });
})();

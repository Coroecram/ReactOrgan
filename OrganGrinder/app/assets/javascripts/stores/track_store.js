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

    create: function(track) {
      TrackApiUtils.create(track).then(function(data){
        _tracks.push(data);
        TrackStore.emitChange();
      });
    },

    delete: function(id) {
      TrackApiUtils.delete(id).then(function() {
        _tracks = _tracks.filter(function(track) {
          return track.id !== id;
        });
        TrackStore.emitChange();
      });
    },

    fetch: function(){
      TrackApiUtils.fetch().then(function(data) {
        _tracks = data;
        TrackStore.emitChange();
      });
    },

    all: function() {
      return _tracks.slice();
    }

  });

  TrackStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.type) {

    case TrackActionTypes.CREATE_TRACK:
      TrackStore.create(action.track);
      break;

    case TrackActionTypes.DELETE_TRACK:
      TrackStore.delete(action.id);
      break;

    case TrackActionTypes.FETCH_TRACKS:
      TrackStore.fetch();
      break;

    default:

    }
  });
})();

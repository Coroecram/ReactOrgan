(function () {
  var TrackActions = window.TrackActions = {};

  TrackActions.createTrack = function(track) {
    AppDispatcher.dispatch({
      type: TrackActionTypes.CREATE_TRACK,
      track: track
    });
  };


  TrackActions.deleteTrack = function(id) {
    AppDispatcher.dispatch({
      type: TrackActionTypes.DELETE_TRACK,
      id: id
    });
  };

  TrackActions.fetchTracks = function() {
    AppDispatcher.dispatch({
      type: TrackActionTypes.FETCH_TRACKS,
    });
  };

})();

(function () {
  var TrackActions = window.TrackActions = {};

  TrackActions.createTrack = function(track) {
    AppDispatcher.dispatch({
      type: TrackActionTypes.CREATE_TRACK,
      track: track
    });
  };

})();

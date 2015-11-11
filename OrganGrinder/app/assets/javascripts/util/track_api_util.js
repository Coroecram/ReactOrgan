(function(){

  var ajaxDefaultOptions = {
    url: '/api/tracks',
    type: 'GET',
    dataType: 'json'
  };

  var TrackApiUtils = window.TrackApiUtils = {

    create: function (track) {
      return $.ajax($.extend({}, ajaxDefaultOptions, {
        type: 'POST',
        data: {track: track}
      }));
    },

    delete: function (id) {
      return $.ajax($.extend({}, ajaxDefaultOptions, {
        url: '/api/tracks/' + id,
        type: 'DELETE'
      }));

    },

    fetch: function() {
      return $.ajax(ajaxDefaultOptions);
    }

  };


})();

var Jukebox = React.createClass({
  getInitialState: function() {
    return { tracks: [] };
  },

  componentDidMount: function() {
    TrackStore.addChangeListener(this.updateTracks);
    TrackStore.fetch();
  },

  componentWillUnmount: function() {
    TrackStore.removeChangeListener(this.updateTracks);
  },

  updateTracks: function() {
    this.setState({ tracks: TrackStore.all() });
  },

  render: function() {
    return (
      <ol className="jukebox">
        {
          this.state.tracks.map(function(track, idx){
            return <li key={idx}><TrackPlayer track={track} /></li>;
          })
        }
      </ol>
    );
  }
});

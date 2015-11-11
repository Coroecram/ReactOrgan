var Jukebox = React.createClass({
  getInitialState: function() {
    return { tracks: [] };
  },

  componentDidMount: function() {
    TrackStore.addChangeListener(this.updateTracks.bind(this));
    TrackStore.fetch();
  },

  componentWillUnmount: function() {
    TrackStore.removeChangeListener(this.updateTracks.bind(this));
  },

  updateTracks: function() {
    this.setState({ tracks: TrackStore.all() });
  },

  render: function() {
    return (
      <ul className="jukebox">
        {
          this.state.tracks.map(function(track, idx){
            return <li key={idx}><TrackPlayer track={track} /></li>;
          })
        }
      </ul>
    );
  }
});

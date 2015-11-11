var TrackPlayer = React.createClass({
  componentDidMount: function() {
    this.track = new Track(this.props.track);
  },

  playTrack: function() {
    this.track.play();
  },

  deleteTrack: function() {
    TrackActions.deleteTrack(this.props.track.id);
  },

  render: function() {
    return (
      <div className="trak-player">
        <h4>{this.props.track.name}</h4>
        <button onClick={this.playTrack} className="play">▶</button>
        <button onClick={this.deleteTrack} className="delete">X</button>
      </div>
    );
  }
});

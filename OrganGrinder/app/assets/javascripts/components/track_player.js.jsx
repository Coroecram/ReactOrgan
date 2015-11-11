var TrackPlayer = React.createClass({
  playTrack: function() {
    this.props.track.play();
  },

  deleteTrack: function() {
    // TODO
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

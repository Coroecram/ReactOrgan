var Recorder = React.createClass({
  getInitialState: function() {
    return {isRecording: false, track: new Track(this.props) };
  },

  componentDidMount: function() {
    // KeyStore.addChangeListener(function() {
    //   this.state.track.addNotes(KeyStore.pressedKeys());
    // });
  },

  playTrack: function() {
    if (this.state.isRecording){
      return;
    }
    this.state.track.play();
  },

  recordTrack: function() {
    if (this.state.isRecording){
      return;
    }
    this.setState({isRecording: true});

    // record track here
  },

  render: function() {
    var track = this.state.track;

    return (
      <div className="recorder">
        <button onClick={this.playTrack}>Play</button>
        <button onClick={this.recordTrack}>Record</button>
        <button onClick={}>Stop</button>
        <button onClick={}>Save</button>
      </div>
    );
  }
});

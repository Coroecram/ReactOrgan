var Recorder = React.createClass({
  getInitialState: function() {
    return {isRecording: false, track: new Track(this.props) };
  },

  componentDidMount: function() {
    KeyStore.addChangeListener(this.recordNotes);
  },

  componentWillUnmount: function() {
    KeyStore.removeChangeListener(this.recordNotes);
  },

  recordNotes: function() {
    if (this.state.isRecording) {
      this.state.track.addNotes(KeyStore.pressedKeys());
    }
  },

  playTrack: function() {
    if (this.state.isRecording){
      return;
    }

    this.state.track.play();
  },

  recordTrack: function() {
    this.setState({isRecording: true});
    this.state.track.startRecording();
  },

  stopRecord: function() {
    this.setState({ isRecording: false });
  },

  saveTrack: function() {
    if (this.state.isRecording) {
      this.stopRecord();
    }

    TrackActions.createTrack(this.state.track);
  },

  render: function() {
    var track = this.state.track;

    return (
      <div className="recorder">
        <button onClick={this.playTrack}>Play</button>
        <button onClick={this.recordTrack}>Record</button>
        <button onClick={this.stopRecord}>Stop</button>
        <button onClick={this.saveTrack}>Save</button>
      </div>
    );
  }
});

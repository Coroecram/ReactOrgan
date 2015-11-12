var Key = React.createClass({

  getInitialState: function(){
   return { pressed: KeyStore.isKeyPressed(this.props.noteName) };
  },

  componentDidMount: function() {
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.addChangeListener(this.updateNoise);
  },

  componentWillUnmount: function() {
    KeyStore.removeChangeListener(this.updateNoise);
  },

  updateNoise: function() {
    KeyStore.isKeyPressed(this.props.noteName) ? this.note.start() : this.note.stop()
    this.updatePressed();
  },

  updatePressed: function() {
    this.setState({ pressed: KeyStore.isKeyPressed(this.props.noteName) });
  },

  render: function() {
    return (
      <div className={(this.state.pressed ? "pressed" : "") + " key"} />
    );
  }
});

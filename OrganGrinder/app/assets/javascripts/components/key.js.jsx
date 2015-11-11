var Key = React.createClass({

  getInitialState: function(){
   return { pressed: KeyStore.isKeyPressed(this.props.noteName) };
 },

  componentDidMount: function() {
    this.note = new Note(Tones[this.props.noteName]);
    KeyStore.addChangeListener(function() {
      if (KeyStore.isKeyPressed(this.props.noteName)){
        this.note.start();
      } else {
        this.note.stop();
      }
      this.updatePressed();
    }.bind(this));
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

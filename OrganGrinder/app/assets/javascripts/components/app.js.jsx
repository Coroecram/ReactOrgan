var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Jukebox />
        <Organ />
        <Recorder name="TrackName"/>
      </div>
    );
  }
});

var Organ = React.createClass({

  render: function() {
    return (
      <ul className="organ group">
        {
          Object.keys(window.Tones).map(function(key, idx){
            return (<li key={idx}><Key noteName={key} /></li>);
          })
        }
      </ul>
    );
  }
});

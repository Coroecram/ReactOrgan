function Track(attrs) {
  this.name = attrs.name;
  this.roll = attrs.roll || [];
}

Track.prototype.startRecording = function() {
  this.roll = [];
  this.startTime = Date.now();
};

Track.prototype.stopRecording = function() {
  this.addNotes([]);
};

Track.prototype.addNotes = function(notes) {
  var timeSlice = Date.now() - this.startTime;

  this.roll.push({timeSlice: timeSlice, notes: notes});
};

Track.prototype.play = function() {
  if (typeof this.interval !== 'undefined'){
    return;
  }

  var playbackStartTime = Date.now();
  var nextNoteIdx = 0;

  var playNote = function() {
    if (nextNoteIdx >= this.roll.length){
      return false;
    }

    var elapsedTime = Date.now() - playbackStartTime;
    if (this.roll[nextNoteIdx].timeSlice < elapsedTime) {
      KeyActions.allKeyChange(this.roll[nextNoteIdx++].notes);
    }
    return true;
  }.bind(this);

  this.interval = setInterval(function() {
    if (!playNote()) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }.bind(this), 100);
};

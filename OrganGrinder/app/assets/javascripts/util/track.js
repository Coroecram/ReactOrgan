function Track(attrs) {
  this.name = attrs.name;
  this.roll = attrs.roll || [];
}

Track.prototype.startRecording = function() {
  this.roll = [];
  this.startTime = Date.now();
};


Track.prototype.addNotes = function(notes) {
  var timeSlice = Date.now() - this.startTime;
  this.roll.push({timeSlice: timeSlice, notes: notes});
};

Track.prototype.stop = function() {
  KeyActions.allKeyChange([]);
};

Track.prototype.play = function() {
  if (typeof this.interval !== 'undefined'){
    return;
  }


  var playbackStartTime = Date.now();
  var nextNoteIdx = 0;

  var playNote = function() {
    var nextNote = this.roll[nextNoteIdx];
    if (nextNote !== nextNote || typeof nextNote === "undefined") {
      return false;
    }

    var elapsedTime = Date.now() - playbackStartTime;
    if (nextNote.timeSlice < elapsedTime) {
      KeyActions.allKeyChange(this.roll[nextNoteIdx++].notes);
    }
    return true;
  }.bind(this);

  this.interval = setInterval(function() {
    if (!playNote()) {
      clearInterval(this.interval);
      this.interval = undefined;
      this.stop();
    }
  }.bind(this), 100);
};

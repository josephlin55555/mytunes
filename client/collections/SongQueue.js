// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },

  enqueue: function( song ) {
    this.push(song);
    if(this.length===1) {
      song.play();
    }
  },

  dequeue: function() {
    this.shift();
    this.playFirst();
  },

  playFirst: function() {
    this.at(0).play();
  }
});

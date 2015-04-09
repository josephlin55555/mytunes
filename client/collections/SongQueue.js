// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  enqueue: function( song ) {
    this.push(song);
    if(this.length===1) {
      this.playFirst();
    }
  },

  dequeue: function() {
    this.shift();
    if(this.length>0){
      this.playFirst();
    }
  },

  playFirst: function() {
    this.at(0).play();
  },

  ended: function() {
    this.at(0).ended();
  }
});

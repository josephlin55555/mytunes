// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      if(this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      this.dequeue(song);
    }, this);

    this.on('ended', function(song) {
      this.ended(song);
    }, this);
  },

  enqueue: function(song) {
    this.push(song);
  },

  playFirst: function() {
    this.at(0).play();
  },

  dequeue: function(song) {
    if(this.length) {
      this.remove(song);
    }
  },

  ended: function() {
    this.dequeue(this.at(0));
    if(this.length) {
      this.playFirst();
    }
  }

});

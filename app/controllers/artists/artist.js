import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createSong: function(e) {
        
        
              e.preventDefault();
              var price = this.get('price');
              var title = this.get('songName');
              var createdBy = this.get('createdBy');

              var promise = $.ajax({
                type: 'post', 
                url: 'http://itp-api.herokuapp.com/api/songs',
                data: {

                  "title": title,
                  "artist": this.get('model.id'),
                  "genre": 1,
                  "price": price,
                  "createdBy": createdBy

                }
              });


      promise.then((response) => {
        alert('You added a new artist! !! ! !');
            this.set('songName', null);
            this.set('price', null);
            this.set('createdBy', null);
        var songs = this.get('model.songs');
        
        var newSongs = songs.concat(response.song);
        this.set('model.songs', newSongs);

      }, function() {
          
        alert('Something went wrong');
           
      });
    }
  }
});


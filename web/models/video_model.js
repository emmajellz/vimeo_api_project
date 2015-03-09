define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var VideoModel = Backbone.Model.extend({
    defaults: {
      title: '',
      description: '',
      thumbnail_medium: '',
      stats_number_of_likes: 0
    },
    initialize: function(videoData){
      this.data= videoData;
      this.set('title', this.attributes.data.title);
      this.set('description', this.attributes.data.description);
      this.set('thumbnail_medium', this.attributes.data.thumbnail_medium);
      this.set('stats_number_of_likes', this.attributes.data.stats_number_of_likes);
      this.set('video_id', this.attributes.data.id);

      //Src url used for embedded player
      this.set('player_url', 'https://player.vimeo.com/video/' + this.get('video_id'));
      
      //If 'likes' field is undefined, assume no one likes this video.
      if(this.get('stats_number_of_likes')){
        this.set('stats_number_of_likes', 0);
      }
    }
  });
  return VideoModel;
});
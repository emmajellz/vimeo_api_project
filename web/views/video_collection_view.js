define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'marionette',
  'views/video_view'
], function($, _, Backbone, Mustache, Marionette, VideoView){

    var VideoCollectionView = Marionette.CollectionView.extend({
        
        tagName: 'ul',
        
        childView: VideoView,
    });

  return VideoCollectionView;
});
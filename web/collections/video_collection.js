// Filename: collections/projects
define([
  'underscore',
  'backbone',
  'models/video_model'
], function(_, Backbone, VideoModel){
  var VideoCollection = Backbone.Collection.extend({
    model: VideoModel
  });
  return VideoCollection;
});
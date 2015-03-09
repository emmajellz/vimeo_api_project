define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'marionette',
   'text!templates/video_template.mustache'
], function($, _, Backbone, Mustache, Marionette, videoTemplate){
    var VideoView = Backbone.Marionette.ItemView.extend({
      
      template : videoTemplate,
      
      initialize: function(model){
        this.listenTo(this.model, "change:data", this.modelChanged);
        this.render();
      },
      modelChanged: function(model, value){
        this.render();
      },
      render: function(){
        this.$el.html(Mustache.render(
        this.template, this.getRenderedData()));
      },
      getRenderedData: function(){
        return this.model.toJSON();
      }
    });
 
  return VideoView;
});
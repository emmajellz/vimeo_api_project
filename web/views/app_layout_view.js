define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'marionette',
  'api_bridge',
  'models/video_model',
  'collections/video_collection',
  'views/video_view',
  'views/video_collection_view',
  'text!templates/app_layout.mustache'
], function($, _, Backbone, Mustache, Marionette, APIBridge, VideoModel, VideoCollection, VideoView, VideoCollectionView, LayoutTemplate){

    var AppLayoutView = Marionette.LayoutView.extend({
         
        tagName: 'container',
 
        id: 'AppContainer',
     
        template: LayoutTemplate,
 
        regions: {
            'Main' : '#main',
        },
        events: {
            'click .selection'  : 'urlSelection', 
        },
        initialize: function() {
            //Request url components
            this.rootUrl = 'http://vimeo.com/api/v2/channel/';
            this.responseFormat = '/videos.json';
            this.params = '';
            //Default to 'everything animated' channel. 
            var category = 'everythinganimated';
            //API service to retrieve data
            this.APIBridge = new APIBridge();             
            this.renderChannels(category);
        },
        //Renders channel stream according to user selection using API Bridge requests
        renderChannels : function(category){
                this.$el.html(Mustache.render(this.template));
                var Videos = new VideoCollection();
                this.APIBridge.get(this.rootUrl, category, this.responseFormat, this.params).then(function (response) {
                    _.each(response, function(currentVideo) { 
                        Videos.add(new VideoModel({data : currentVideo}));
                    });
                });  
                var VideosView = new VideoCollectionView({collection : Videos, el: $('#main') });
                VideosView.render(); 

        },
        urlSelection : function(e){
            var category = e.target.id;
            this.renderChannels(e.target.id);
            this.colorSelection(e.target.id);

        },
        //Highlights selected channel in sidebar
        colorSelection: function(id){
            var id = "#" + id;
            $(id).css({'color':'#402318'});
        },
        onRender: function() {
            this.$el.html(Mustache.render(this.template));
            this.renderChannels();
        }
 
    });
 
  return AppLayoutView;
});
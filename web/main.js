/**
 * Vimeo API Project
 * @author Emma Jelley
 */
require.config({
    paths:{
    jquery:"libs/jquerymin",
    underscore: "libs/underscore-min",
    backbone: "libs/backbone-min",
    marionette: 'libs/marionette',
    api_bridge: 'api_bridge',
    mustache: 'libs/mustache',
    text: 'libs/text',
    bootstrap: 'libs/node_modules/boostrap/dist/bootstrap',
    sass: 'libs/node_modules/sass/lib/sass'
    },
    shim:{
    underscore:{
        exports: "_"
    },
    backbone:{
        deps: ['underscore','jquery'],
        exports:'Backbone'
    },
    marionette:{
        deps: ['backbone']
    },
    apibridge:{
        deps:['underscore', 'jquery', 'backbone']
    }
    }
});
define([
    'marionette',
    'backbone',
    'api_bridge',
    'underscore',
    'views/app_layout_view'],
    function(Marionette, Backbone, APIBridge, _ , AppLayoutView){

        var AppLayoutView = new AppLayoutView({el: $('#layout')});

});
define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
      'use strict';
      var APIBridge =  Backbone.Model.extend({
        get: function(rootUrl, category, responseFormat, params){
          var url = rootUrl + category + responseFormat;
          return $.ajax({
            url: url,
            params: params, 
            success: function(result){
              return result;
            },
            error: function(error){
              return error;
            }
          });
        },
        post: function(url, params){
          return $.ajax({
            type: "POST",
            url: url,
            params: params, 
            success: function(result){
              return result;
            },
            error: function(error){
              return error;
            }
          });
        },
      });
      return APIBridge;
});
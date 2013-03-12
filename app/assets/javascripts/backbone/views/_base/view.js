Nate.module('Views', function(Views, App, Backbone, Marionette, $, _){
  _.extend(Marionette.View.prototype, {
    templateHelpers: {
    
      linkTo: function(name, url, options){
        return "<a href=#" + url + " > "+ name + "</a>";
      }
    }
  });  
});
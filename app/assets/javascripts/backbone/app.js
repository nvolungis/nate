(function(){
  this.Nate = (function(Backbone, Marionette){
    var App = new Marionette.Application;
    
    App.rootRoute = 'photo_galleries'; 
    
    App.addRegions({
      headerRegion: '#headerRegion',
      mainRegion: '#mainRegion'
    });
    
    
    App.addInitializer(function(){
      App.module('HeaderApp').start();
    });
    
    
    App.on('initialize:after',function(){
      if(Backbone.history){
        Backbone.history.start();
        
        if(this.getCurrentRoute() === '') this.navigate(this.rootRoute, {trigger:true});
      }
    });
    
    return App;
    
  })(Backbone, Marionette);
}).call(this);
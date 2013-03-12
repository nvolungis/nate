Nate.module('Entities',function(Entities, App, Backbone, Marionette, $, _){
  Entities.Header = Entities.Model.extend({
    
  });
  
  Entities.HeaderCollection = Entities.Collection.extend({
    model: Entities.Header
  });
  
  var API = {
    getHeaders:function(){
      return new Backbone.Collection([
          {name:"Photography", url: Routes.photo_galleries_path()},
          {name:"Videography", url:'videography'},
          {name:"Contact", url:'contact'}
        ]);
      }
  };  
  
  App.reqres.addHandler('header:entities', function(){
    return API.getHeaders();
  });
  
});
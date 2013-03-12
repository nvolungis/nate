Nate.module('Entities', function(Entities, App, Backbone, Marionette, $, _){
  Entities.Photo = Entities.Model.extend({
    
  });
  
  Entities.PhotoCollection = Entities.Collection.extend({
    model:Entities.Photo, 
    /*
    url:function(){
      return Routes.photo_path();
    }
    */
  });
  
  var API = {
    getPhotoEntities: function(gallery){
/*       photos = new Entities.PhotosCollection; */
/*       return photos; */
      return new Backbone.Collection([{
          'id': 1,
          'name': 'Photo 1', 
          'image_path_name': '8.jpg'
        }
      ]);
    }
  };
  
  
  App.reqres.addHandler('photo:entities',function(){
    return API.getPhotoEntities();
  });
});
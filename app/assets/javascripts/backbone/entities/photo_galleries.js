Nate.module('Entities', function(Entities, App, Backbone, Marionette, $, _){
  
  Entities.PhotoGallery = Entities.Model.extend({
    initialize:function(id){
      this.url =  function(){
        return Routes.photo_gallery_path(id);
      }
    }
  });
  
  
  Entities.PhotoGalleries = Entities.Model.extend({
    
  });
  
  
  Entities.PhotoGalleriesCollection = Entities.Collection.extend({
    model:Entities.PhotoGalleries, 
    url:function(){
      return Routes.photo_galleries_path();
    }
  });
  
  
  
  
  
  var API = {
    getPhotoGalleriesEntities: function(){
      photoGalleries = new Entities.PhotoGalleriesCollection;
      photoGalleries.fetch();
      console.log(photoGalleries);

      return photoGalleries;
    },
    
    getPhotoGalleryEntities: function(id){
      console.log('id: ' + id);
      photoGallery = new Entities.PhotoGallery(id);
      
      photoGallery.fetch();
      
      console.log('entities: ' + photoGallery);
      return photoGallery;
    }
  };
  
  
  App.reqres.addHandler('photoGalleries:entities',function(){
    return API.getPhotoGalleriesEntities();
  });
  
  App.reqres.addHandler('photoGallery:entities',function(id){
    return API.getPhotoGalleryEntities(id);
  });
});
Nate.module('photoGalleries', function(PhotoGalleriesApp, App, Backbone, Marionette, $, _){
  PhotoGalleriesApp.Router = Marionette.AppRouter.extend({
    appRoutes:{
      'photo_galleries':'listPhotoGalleries',
      'photo_gallery/:id':'showPhotoGallery'
    }
  });
  
  var API = {
    listPhotoGalleries:function(){
      PhotoGalleriesApp.List.Controller.listPhotoGalleries();
    },
    
    showPhotoGallery:function(id){
      PhotoGalleriesApp.Show.Controller.showPhotoGalleryView(id);
    }
    
  };
  
  App.addInitializer(function(){
    return new PhotoGalleriesApp.Router({
      controller: API
    });
  });
});
Nate.module('Entities', function(Entities, App, Backbone, Marionette, $, _){
  
  Entities.Photo = Entities.Model.extend({});
  
  Entities.Photos = Entities.Collection.extend({
	  model: Entities.Photo
  });
  
  Entities.PhotoGallery = Entities.Model.extend({
  	
    initialize:function(id){
      this.url =  function(){
        return Routes.photo_gallery_path(id);
      };
    }
  });
  
  Entities.PhotoGalleries = Entities.Model.extend({});

  Entities.PhotoGalleriesCollection = Entities.Collection.extend({
    model:Entities.PhotoGalleries, 
    url:function(){
      return Routes.photo_galleries_path();
    }
  });
  
  
  var API = {
    getPhotoCollectionEntities: function(photos){
      var photoCollection = new Entities.Photos(photos);
      
      return photoCollection;
    },
  
    getPhotoGalleryEntities: function(id){
      var photoGallery = new Entities.PhotoGallery(id);
      
      photoGallery.fetch();
      window.pg = photoGallery;

      return photoGallery;
    },
  
    getPhotoGalleriesEntities: function(){
      var photoGalleries = new Entities.PhotoGalleriesCollection;
      photoGalleries.fetch();
      
      return photoGalleries;
    },
    
    getControls: function(){
      return new Backbone.Collection([
        {view:'list', name:'List', className:'list_view'},
        {view:'thumbnail',name:'Thumbnails', className:'thumbnail_view'},
        {view:'slideshow', name:'Slideshow', className: 'slideshow_view'}
      ]);
    }
  };
  
  App.reqres.addHandler('photoCollection:entities', function(photos){
    return API.getPhotoCollectionEntities(photos);
  });
  
  App.reqres.addHandler('photoGallery:entities',function(id){
    return API.getPhotoGalleryEntities(id);
  });
  
  App.reqres.addHandler('photoGalleries:entities',function(){
    return API.getPhotoGalleriesEntities();
  });
  
  App.reqres.addHandler('controls:entities',function(){
    return API.getControls();
  });
});
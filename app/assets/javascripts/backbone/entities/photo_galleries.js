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
      
      this.on('change', this.getPhotos, this);
    },
    
    getPhotos: function(){
    	var galleryInfo = this.get('photo_gallery'),
    			photos = this.get('photos');
	    
	    this.set({'id' : galleryInfo.id});
	    this.set({'name' : galleryInfo.name});
	    this.photos = new Entities.Photos({collection:photos});
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
      var photoGalleries = new Entities.PhotoGalleriesCollection;
      photoGalleries.fetch();
      
      return photoGalleries;
    },
    
    getPhotoGalleryEntities: function(id){
      var photoGallery = new Entities.PhotoGallery(id);
      
      photoGallery.fetch();
      window.pg = photoGallery;

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
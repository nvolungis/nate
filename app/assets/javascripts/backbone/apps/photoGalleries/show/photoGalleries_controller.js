Nate.module('photoGalleries.Show', function(Show, App, Backbone, Marionette, $, _){
  Show.Controller = {
  	
    showPhotoGalleryView:function( id ){
      var photoGallery = App.request('photoGallery:entities', id);
      
      this.photoGalleryView = this.getPhotoGalleryView(photoGallery);
      App.mainRegion.show(this.photoGalleryView);
    },
    
    showPhotoGallery: function(photoGallery){
      var photoGalleryHeaderView = this.getPhotoGalleryHeaderView(photoGallery),
      		photoGalleryPhotosView = this.getPhotoGalleryPhotosView(photoGallery);
      
      this.layout.galleryMainRegion.show(photoGalleryHeadersView);
    },
    
    getPhotoGalleryPhotosView: function(photoGallery){
      return new Show.GalleryView({
      	model:photoGallery
      });
    }
    
  
  };
});
Nate.module('photoGalleries.Show', function(Show, App, Backbone, Marionette, $, _){
  Show.Controller = {
  
    showPhotoGalleryView:function( id ){
      var _this = this,
          photoGallery = App.request('photoGallery:entities', id);
    
      console.log('pg ' + photoGallery);
      this.layout = this.getLayoutView();
      this.layout.on('show', function(){
        _this.showPhotoGallery(photoGallery);
      });    
        
      App.mainRegion.show(this.layout);
    },
    
    showPhotoGallery: function(photoGallery){
      var photoGalleryView = this.getPhotoGalleryView(photoGallery);
      
      console.log(photoGalleryView);
    },
    
    getLayoutView: function(){
      console.log('get layout');
      return new Show.Layout
    },
    
    getPhotoGalleryView: function(photoGallery){
      var photos = photoGallery;
      console.log('photoGallery: ' + photoGallery);
      //return new Show.PhotosView();
    }
    
  
  };
});
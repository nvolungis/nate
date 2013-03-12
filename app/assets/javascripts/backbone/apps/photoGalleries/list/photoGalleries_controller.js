Nate.module('photoGalleries.List', function(List, App, Backbone, Marionette, $, _){
  List.Controller = {
  
    listPhotoGalleries:function(){
      var _this = this,
          photoGalleries = App.request('photoGalleries:entities'); 
      
      this.layout = this.getLayoutView();
      this.layout.on('show', function(){
        _this.showPhotoGalleries(photoGalleries);
      });
      
      App.mainRegion.show(this.layout);
    },
     
    showPhotoGalleries: function(photoGalleries){
      var photoGalleriesView = this.getPhotoGalleriesView(photoGalleries);     
      this.layout.photoGalleriesThumbnailRegion.show(photoGalleriesView);
    },

    getLayoutView: function(){
      return new List.Layout;
    },
    
    getPhotoGalleriesView: function(photoGalleries){
      return new List.PhotoGalleriesThumbnails({
        collection:photoGalleries
      });
    }
    
    
  };
});
Nate.module('photoGalleries.Show', function(Show, App, Backbone, Marionette, $, _){
    window.show = Show;
  
  Show.Controller = {
  	  	
  	/*Show methods
  	**********************************************/
  	
  	showPhotoGallery:function( id ){
  	 var _this = this;
    	Show.photoGallery = App.request('photoGallery:entities', id),
    	    controls = App.request('controls:entities');
    	    
    	this.layout = this.getLayoutView();
    	
    	this.layout.on('show', function(){
    	  this.showControlsView(controls);
    	  this.showGalleryView({'target':$('#controls-region button:first'),'viewType': 'list'});
      }, this);
      
      App.mainRegion.show(this.layout);
      
      Show.bind('photoGallery:newView',this.showGalleryView, this)
  	},
  	
  	showGalleryView: function(view){
  	  view.target.addClass('active');
  	  
  	  switch(view.viewType){
    	case 'thumbnail' :
    	  this.showPhotoGalleryThumbnailView(Show.photoGallery);
    	  break;  
    	  
    	 case 'list' :
    	   this.showPhotoGalleryListView(Show.photoGallery);
    	   break;
    	   
    	 case 'slideshow' :
    	   this.showPhotoGallerySlideshowView(Show.photoGallery);
    	   break;
  	  } 
  	},
  	
  	showControlsView: function(controls){
    	var controlsView = this.getControlsView(controls);
    	
    	this.layout.controlsRegion.show(controlsView);
  	},
  	
  	showPhotoGalleryListView: function( photoGallery ){
    	var photoGalleryListView = this.getPhotoGalleryListView(photoGallery);
    	
    	this.layout.galleryRegion.show(photoGalleryListView);
  	},
  	
    showPhotoGalleryThumbnailView:function( photoGallery ){
      var photoGalleryThumbnailView = this.getPhotoGalleryThumbnailView(photoGallery);
      
      this.layout.galleryRegion.show(photoGalleryThumbnailView);
    },
    
    showPhotoGallerySlideshowView:function( photoGallery ){
      var photoGallerySlideshowView = this.getPhotoGallerySlideshowView(photoGallery);
      
      this.layout.galleryRegion.show(photoGallerySlideshowView);
    },
    
    
    /*Get methods
  	**********************************************/
    
    getControlsView: function(controls){
      return new Show.ControlsView({
        collection:controls
      });
  	},
    
    getPhotoGalleryListView: function(photoGallery){
      return new Show.GalleryListView({
        model: photoGallery
      });
    },
    
    getPhotoGalleryThumbnailView: function(photoGallery){
      return new Show.GalleryThumbnailView({
      	model:photoGallery
      });
    },
    
    getPhotoGallerySlideshowView: function(photoGallery){
      return new Show.GallerySlideshowView({
      	model:photoGallery
      });
    },
    
    getLayoutView: function(){
      return new Show.Layout;
    }
    
  
  };
});
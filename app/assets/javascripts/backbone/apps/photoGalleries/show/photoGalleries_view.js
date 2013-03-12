Nate.module('photoGalleries.Show', function(Show, App, Backbone, Marionette, $, _){
  
  Show.GalleryView = Marionette.ItemView.extend({
    template:'photoGalleries/show/templates/photo',
    tagName:'li',
    
    initialize:function(){
	    this.model.on('change', this.render);
    }
  });
  
  /*
  Show.GalleryView = Marionette.CompositeView.extend({
  	template: 'photoGalleries/show/templates/test',
  	itemView: Show.PhotoView,
  	itemViewContainer: '#photoView',
  	
  	initialize: function(photoGallery){
	  	this.model = photoGallery;
  	}
  });
  */
  

  
  Show.PhotosView = Marionette.CollectionView.extend({
    template: 'photoGalleries/show/templates/photos',
    itemView: Show.PhotoView,
    itemViewContainer: '#photos'
  });
      

});
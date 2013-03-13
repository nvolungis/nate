Nate.module('photoGalleries.Show', function(Show, App, Backbone, Marionette, $, _){
  
  Show.ControlView = Marionette.ItemView.extend({
    template: 'photoGalleries/show/templates/_control',
    tagName:'button',
    className: function(){
      return this.model.get('className') + ' btn';
    },
    
    initialize: function(){
      this.$el.attr({'data-view':this.model.get('view')});
    }
    
  });
  
  Show.ControlsView = Marionette.CollectionView.extend({
    itemView: Show.ControlView,
    tagName: 'div',
    className: 'btn-group',
    events:{
      'click button': 'newView'
    },
    
    newView:function(e){
      var $target = $(e.currentTarget);
      
      this.$el.find('.active').removeClass('active');
      Show.trigger('photoGallery:newView', {'target':$target, viewType:$target.attr('data-view')});
    }
  });
  
  Show.PhotoView = Marionette.ItemView.extend({
    template:'photoGalleries/show/templates/photo',
    tagName: 'li',
    className: 'photo'
  });
  
  Show.PhotoListView = Marionette.ItemView.extend({
    template:'photoGalleries/show/templates/galleryViewStyles/list_view',
    tagName: 'li',
    className: 'photo'
  });
  
  Show.PhotoThumbnailView = Marionette.ItemView.extend({
    template:'photoGalleries/show/templates/galleryViewStyles/thumbnail_view',
    tagName: 'li',
    className: 'photo'
  });
  
  Show.PhotoSlideshowView = Marionette.ItemView.extend({
    template:'photoGalleries/show/templates/galleryViewStyles/slideshow_view',
    tagName: 'li',
    className: 'photo'
  });
  
  Show.GalleryThumbnailView = Marionette.CompositeView.extend({
    template:'photoGalleries/show/templates/photos',
    className:'gallery-thumbnail gallery',
    itemView: Show.PhotoThumbnailView,
    itemViewContainer: '#photos',
    
    initialize:function(){
	    this.model.on('change', this.renderWithCollection, this);
	    this.renderWithCollection();
	  },     
	        
    renderWithCollection:function(){
      var photos = this.model.get('photos');

      this.collection = App.request('photoCollection:entities', photos);
      this.render();
    }
  });
  
  Show.GalleryListView = Marionette.CompositeView.extend({
    template:'photoGalleries/show/templates/photos',
    className:'gallery-list gallery',
    itemView: Show.PhotoListView,
    itemViewContainer: '#photos',
    
    
    initialize:function(){
	    this.model.on('change', this.renderWithCollection, this);
	    this.renderWithCollection();
	  },
	        
    renderWithCollection:function(){
      var photos = this.model.get('photos');

      this.collection = App.request('photoCollection:entities', photos);
      this.render();
    }
  });
  
  Show.GallerySlideshowView = Marionette.CompositeView.extend({
    template:'photoGalleries/show/templates/photos',
    className:'gallery-slideshow gallery',
    itemView: Show.PhotoSlideshowView,
    itemViewContainer: '#photos',
    
    initialize:function(){
	    this.model.on('change', this.renderWithCollection, this);
	    this.renderWithCollection();
	  },     
	        
    renderWithCollection:function(){
      var photos = this.model.get('photos');

      this.collection = App.request('photoCollection:entities', photos);
      this.render();
    }
  });
  
  Show.Layout = Marionette.Layout.extend({
    template: 'photoGalleries/show/templates/show_layout',
    className: 'container',
    regions: {
      controlsRegion: '#controls-region',
      galleryRegion: '#gallery-region'
    }
  });
  
});
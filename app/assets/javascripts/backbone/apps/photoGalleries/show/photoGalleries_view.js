Nate.module('photoGalleries.Show', function(Show, App, Backbone, Marionette, $, _){
  Show.Gallery = Marionette.Layout.extend({
    template: 'photoGalleries/show/templates/composite_layout',
    regions: {
      galleryTitleRegion: '#galleyTitleRegion',
      galleryMainRegion: '#galleryMainRegion'
    }
  });
  
  Show.PhotoView = Marionette.ItemView.extend({
    template:'photoGalleries/show/templates/photo',
    tagName:'li'
  });
  
  Show.PhotosView = Marionette.CollectionView.extend({
    template: 'photoGalleries/show/templates/photos',
    itemView: Show.PhotoView,
    itemViewContainer: '#photos'
  });
      

});
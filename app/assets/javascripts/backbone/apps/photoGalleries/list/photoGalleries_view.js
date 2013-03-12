Nate.module('photoGalleries.List', function(List, App, Backbone, Marionette, $, _){
  
  List.Layout =  Marionette.Layout.extend({
    template:'photoGalleries/list/templates/list_layout',
    regions: {
      photoGalleriesThumbnailRegion:'#photo-galleries-view-region'
    }
  });
  
  List.PhotoGalleriesThumbnail = Marionette.ItemView.extend({
    template: 'photoGalleries/list/templates/_thumbnail',
    tagname: 'li'
  });
  
  List.PhotoGalleriesEmpty = Marionette.ItemView.extend({
    template: 'photoGalleries/list/templates/_empty',
    tagName: 'li'
  });
  
  List.PhotoGalleriesThumbnails = Marionette.CompositeView.extend({
    template: 'photoGalleries/list/templates/_thumbnails',
    itemView: List.PhotoGalleriesThumbnail,
    emptyView: List.PhotoGalleriesEmpty,
    itemViewContainer: '#galleries' 
  });
});
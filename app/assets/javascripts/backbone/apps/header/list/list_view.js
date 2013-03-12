Nate.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _){
  
  List.Header = Marionette.ItemView.extend({
    template: 'header/list/templates/_header',
    tagName: 'li'
  });
  
  List.Headers = Marionette.CompositeView.extend({
    template:'header/list/templates/list_header',
    itemView: List.Header,
    itemViewContainer: 'ul'
  
  });
});
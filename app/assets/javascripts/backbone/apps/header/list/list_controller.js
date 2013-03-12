Nate.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _){
  List.Controller = {
    listHeader:function(){
      var links = App.request('header:entities'),         
          headerView = this.getHeaderView(links);
          
      window.links = links;
      App.headerRegion.show(headerView);
    },

    getHeaderView: function(links){
      return new List.Headers({
        collection:links
      }); 
    }
  };
});
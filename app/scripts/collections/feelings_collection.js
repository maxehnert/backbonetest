var Problems = Backbone.Collection.extend({
  model: Problem,
  url: 'http://tiy-atl-fe-server.herokuapp.com/collections/waitingmax'
});

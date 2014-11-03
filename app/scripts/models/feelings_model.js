var Problem = Backbone.Model.extend({

  defaults: {
    problem: '',
    name: '',
    count: ''
  },

  idAttribute: '_id',

  initialize: function (){
    var problem = this.get('problem');
  //  console.log(feel + ' have been created');
  }
});

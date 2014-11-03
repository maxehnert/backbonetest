var ProblemsView = Backbone.View.extend({

    tagName: 'ul',
    className: 'currentProblem',

  initialize: function(options){
    //console.log('inited')
    this.render(options.collection);

  },

  render: function(collection){
   console.log(collection);

    //binding 'this' to 'self' for use in nested functions/callbacks
    var self = this;

    //regular underscore templates
    var template = $('#currentProblem').html();
    var rendered = _.template(template);


    //iterating over our models
    _.each(collection.models, function(c){
     console.log(c.get('title'));

      //each iteration we are appending the data to our el that
      //backbone created
      self.$el.append(rendered(c.attributes));
    });

    $('#list').html(this.el);

    console.log(this.el);
    return this;
  }


  // events: {
  //           "click button": "doAdd"
  // },
  // doAdd: function(event){
  //           // Button clicked, you can access the element that was clicked with event.currentTarget
  //
  // }
});

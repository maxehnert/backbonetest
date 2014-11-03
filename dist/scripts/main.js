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

var Problems = Backbone.Collection.extend({
  model: Problem,
  url: 'http://tiy-atl-fe-server.herokuapp.com/collections/waitingmax'
});

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

var all_problems = new Problems();
// var all_problems = new Problems();

var addProblem = function (event) {
  event.preventDefault();
  var myprob = new Problem({
    name: $('#name').val(),
    problem: $('#problem').val(),
    count: $('ul li').length + 1
  });
  console.log(myprob);
  all_problems.add(myprob);
  myprob.save();
  $('.counter').html(myprob.attributes.count);
  $(this)[0].reset();

};

$('#problemSubmit').on('submit', addProblem);

all_problems.fetch().done(function(){
  var problemsview = new ProblemsView({
    collection: all_problems
  });
});


////////////////////////////////////
//add the note click function
// $('#sendMessage').on('submit', function (event){
//   event.preventDefault(); //wont refresh page
//     //Grab the Task Value
//
//   var self = this;
//
//   //what is included in the li
//   contents = $('#text').val() + '<button class="remove"><img class="removeX" src="../images/cross5.png"/></button>';
//
//   task = new ToDo({
//     task: contents
//   });
//
//   //if no value is added to the input field, the submit won't work
//   if($('#text').val() === ''){
//     return false;
//   }
//
//   //Creating the POST request to the server
//   $.ajax({
//     type: 'POST',  //post request to the server
//     url: my_server, // what url it will be
//     data: task  //the data we are sending
//   }).done( function (data){
//
//     // Add to my todo_list
//     todo_list.push(data);
//
//     // Show our task on the page and appear at the top of the list
//     $('#todoList').prepend(rendered(data));
//
//     // Reset my form
//     $(self)[0].reset();
//
//
//     //creates the total counter
//     var q = $('#todoList li').length;
//     $('#counter').html(q);
//   });
//
// });


















/////////////////////////////////////////////
// var Service = Backbone.Model.extend({
//
//   defaults: {
//     title: 'My service',
//     type: '',
//     price: 100,
//     wanted: true
//   },
//
//   initialize: function(){
//     var n = this.get('type');
//     console.log(n + ' has been added')
//   }
// });
//
// var ServiceList = Backbone.Collection.extend ({
//
//   model: Service,
//   url: 'http://tiy-atl-fe-server.herokuapp.com/collections/maxservice'
// });
//
// var my_services = new ServiceList ();
//
// $('#main').on('submit', function(e){
//   e.preventDefault();
//
//   var service_name = $('#order').val();
//
//
//     var services = new ServiceList({
//           type: service_name
//         // type: 'web development', price: 200, wanted: false,
//         // type: 'web design', price: 250,
//         // type: 'r&d', price: 100,
//         // type: 'bullshitting', price: 10
//         // Add more here
//     });
//
//
//   my_services.add(services);
//
// //  services.save();
//
//   $(this)[0].reset();
// });

///////////////////////////////////////
// var Student = Backbone.Model.extend ({
//
//   defaults: {
//     name: '',
//     location: 'Atlanta',
//     awesome: true
//   },
//
//   initialize: function (){
//     var n = this.get('name');
//     console.log(n + ' has been added')
//   }
//
// });
//
// var Students = Backbone.Collection.extend ({
//
//   model: Student,
//   url: 'http://tiy-atl-fe-server.herokuapp.com/collections/max1'
// });
//
//
// var all_students = new Students ();
//
// $('#studentForm').on('submit', function (e){
//
//   //prevent default action of form submition
//   e.preventDefault();
//
//   //grab the name from the input
//   var student_name = $('#name').val();
//
//   //create a new instance o our student constuctor
//   var s = new Student({
//     name: student_name
//   });
//
//   // access our collection and add or new instance (Student) to our collection
//   all_students.add(s);
//
//   //save our student - this loos for a url field or a url field in our collection
//   //and saves it to that url using a simple POST method
//   s.save();
//
//   //Clear my form
//   $(this)[0].reset();
// });
//////////////////////////////////////

//
// $(function(){
//
//     // Create a model for the services
//     var Service = Backbone.Model.extend({
//
//         // Will contain three attributes.
//         // These are their default values
//
//         defaults:{
//             title: 'My service',
//             price: 100,
//             checked: false
//         },
//
//         // Helper function for checking/unchecking a service
//         toggle: function(){
//             this.set('checked', !this.get('checked'));
//         }
//     });
//
//     // Create a collection of services
//     var ServiceList = Backbone.Collection.extend({
//
//         // Will hold objects of the Service model
//         model: Service,
//         url: 'http://tiy-atl-fe-server.herokuapp.com/collections/maxservice',
//         // Return an array only with the checked services
//         getChecked: function(){
//             return this.where({checked:true});
//         }
//     });
//
//     // Prefill the collection with a number of services.
//     var services = new ServiceList([
//         new Service({ title: 'web development', price: 200}),
//         new Service({ title: 'web design', price: 250}),
//         new Service({ title: 'photography', price: 100}),
//         new Service({ title: 'coffee drinking', price: 10})
//         // Add more here
//     ]);
//
//     // This view turns a Service model into HTML. Will create LI elements.
//     var ServiceView = Backbone.View.extend({
//         tagName: 'li',
//
//         events:{
//             'click': 'toggleService'
//         },
//
//         initialize: function(){
//
//             // Set up event listeners. The change backbone event
//             // is raised when a property changes (like the checked field)
//
//             this.listenTo(this.model, 'change', this.render);
//         },
//
//         render: function(){
//
//             // Create the HTML
//
//             this.$el.html('<input type="checkbox" value="1" name="' + this.model.get('title') + '" /> ' + this.model.get('title') + '<span>$' + this.model.get('price') + '</span>');
//             this.$('input').prop('checked', this.model.get('checked'));
//
//             // Returning the object is a good practice
//             // that makes chaining possible
//             return this;
//         },
//
//         toggleService: function(){
//             this.model.toggle();
//         }
//     });
//
//     // The main view of the application
//     var App = Backbone.View.extend({
//
//         // Base the view on an existing element
//         el: $('#main'),
//
//         initialize: function(){
//
//             // Cache these selectors
//             this.total = $('#total span');
//             this.list = $('#services');
//
//             // Listen for the change event on the collection.
//             // This is equivalent to listening on every one of the
//             // service objects in the collection.
//             this.listenTo(services, 'change', this.render);
//
//             // Create views for every one of the services in the
//             // collection and add them to the page
//
//             services.each(function(service){
//
//                 var view = new ServiceView({ model: service });
//                 this.list.append(view.render().el);
//
//             }, this);	// "this" is the context in the callback
//         },
//
//         render: function(){
//
//             // Calculate the total order amount by agregating
//             // the prices of only the checked elements
//
//             var total = 0;
//
//             _.each(services.getChecked(), function(elem){
//                 total += elem.get('price');
//             });
//
//             // Update the total price
//             this.total.text('$'+total);
//
//             return this;
//         }
//     });
//
//     new App();
//
// });

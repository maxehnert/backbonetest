var Service = Backbone.Model.extend({

  defaults: {
    title: 'My service',
    type: '',
    price: 100,
    wanted: true
  },

  initialize: function(){
    var n = this.get('type');
    console.log(n + ' has been added')
  }
});

var ServiceList = Backbone.Collection.extend ({

  model: Service,
  url: 'http://tiy-atl-fe-server.herokuapp.com/collections/maxservice'
});

var my_services = new ServiceList ();

$('#main').on('submit', function(e){
  e.preventDefault();

  var service_name = $('#order').val();


    var services = new ServiceList([
        new Service({ type: 'web development', price: 200, wanted: false}),
        new Service({ type: 'web design', price: 250}),
        new Service({ type: 'photography', price: 100}),
        new Service({ type: 'coffee drinking', price: 10})
        // Add more here
    ]);


  my_services.add(services);

//  services.save();

  $(this)[0].reset();
});

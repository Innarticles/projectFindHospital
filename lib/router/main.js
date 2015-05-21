Router.map(function() {
  this.route("home", {
    path: "/",
    layoutTemplate: "homeLayout"
  });

});

Router.route('/dashboard', function(){

      Router.go('/hospitalinfo/');
});

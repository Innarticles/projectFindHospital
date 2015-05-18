Router.map(function() {
  this.route("profile", {
    path: "/profile"
  },{
    name: "profile",
    layoutTemplate:"maindashboard"
  });
  this.route("account", {
    path: "/account"
  });
  this.route("setUserName", {
    path: "/setUserName",
    onBeforeAction: function() {
      if (!Config.username || (Meteor.userId() && Meteor.user().username)) {
        this.redirect('/dashboard');
      }
      return this.next();
    }
  });
  return this.route('signOut', {
    path: '/sign-out',
    onBeforeAction: function() {
      Meteor.logout(function() {});
      this.redirect('/');
      return this.next();
    }
  });
});

Router.route('/maindashboard', function() {
  this.render("maindashboard");
  
},{
  name: 'maindashboard',                      
  layoutTemplate: "masterLayout"
});
Router.route('/appointments', function() {
  this.render("appointments");
  
},{
  name: 'appointments',                      
  layoutTemplate: "maindashboard"
});
Router.route('/settings', function() {
  this.render("updateHospital");
  
},{
  name: 'updateHospital',                      
  layoutTemplate: "maindashboard"
});

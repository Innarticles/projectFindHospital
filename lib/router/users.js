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
  layoutTemplate: "maindashboard"
});
Router.route('/appointments', function() {
  this.render("appointments");
  
},{
  name: 'appointments',                      
  layoutTemplate: "maindashboard"
});



Router.route('/hospitalinfo', function() {
  this.render("hospitalinfo");
  
},{
  name: 'hospitalinfo',                      
  layoutTemplate: "maindashboard"
});

Router.route('/settings', function(){
    this.render('updateHospital');          // Render the same template as '/projects' route
  }, {
    name: 'settings',
    layoutTemplate: "maindashboard",
 waitOn: function() {
      return [subs.subscribe('posts'), subs.subscribe('comments'), subs.subscribe('attachments'), subs.subscribe('hospitals')];
    },
    data: function(){
      var id = Meteor.userId();
        return {                        // Return only documents with the category in the parameters

          aHospital: Hospitals.findOne({ "owner": id }),
          pageTitle: 'Edit Hospital'
        }
      }
    });
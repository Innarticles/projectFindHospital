Router.map(function() {
  this.route("profile", {
    path: "/profile",
    template: 'userProfile' 
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



Router.route('/appointments', function() {
  this.render("appointments");
  
},{
  name: 'appointments',                      
  layoutTemplate: "maindashboard"
});
Router.route('/confirmBooking', function() {
  this.render("confirmBooking");
  
},{
  name: 'confirmBooking',                      
  // layoutTemplate: "maindashboard"
});

Router.route('/terms', function() {
  this.render("privacypolicy");
  
},{
  name: 'terms',                      
  layoutTemplate: "masterLayout"
});

Router.route('/results/:type/:locationLog/:locationLat/:range', function() {
  this.render("results"); 
},{
  layoutTemplate: "masterLayout",
  name: 'results',
  waitOn: function() {
    return [ subs.subscribe('hospitals')]; // removed subs.subscribe('posts'), subs.subscribe('comments'), subs.subscribe('attachments'),
  },
  data: function(){
      // var id = Meteor.userId();

      // collecting the passed parameters
      var hospType = this.params.type;
      var areaLat = parseFloat(this.params.locationLat);
      var areaLog = parseFloat(this.params.locationLog);
      var fee = this.params.range;
      var feeInt = parseInt(fee);

      // console.log(typeof(feeInt));


      return {      
        selectedHospitals: Hospitals.find({ location : { $near : [areaLog, areaLat], $maxDistance: 0.15}, consultation_fee: { $lte: feeInt } }).fetch(),

        pageTitle: 'Your Search Results',
      };
    }
  });


Router.route('/booking/:_id', function() {
  this.render("bookAppointment"); 
},{
  name: 'booking/',
  layoutTemplate: 'masterLayout',
  waitOn: function() {

    return [subs.subscribe('posts'), subs.subscribe('comments'), subs.subscribe('attachments'), subs.subscribe('hospitals')];
  },
  data: function(){
   var id = this.params._id;
   return {                   
    selectedHospital: Hospitals.findOne({"_id": id}),
    pageTitle: 'Your Search Results'
  };
}
});


Router.route('/hospital/:_id', function() {
  this.render("hospitalShow"); 
},{
  name: 'hospital',
  layoutTemplate: 'masterLayout',
  waitOn: function() {

    return [subs.subscribe('posts'), subs.subscribe('comments'), subs.subscribe('attachments'), subs.subscribe('hospitals')];
  },
  data: function(){
   var id = this.params._id;
   return {                   
    selectedHospital: Hospitals.findOne({"_id": id}),
    pageTitle: 'Hospital Detials'
  };
}
});


Router.route('/hospitalinfo', function() {
  this.render("hospitalinfo");
  if (Meteor.user().roles[0] === "customer") {
    this.redirect('/');
  }
  
},{
  name: 'hospitalinfo',                      
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

Router.route('/settings', function(){

    this.render('updateHospital');          // Render the same template as '/projects' route
  }, {
    name: 'settings',
    layoutTemplate: "maindashboard",
    waitOn: function() {
      return [subs.subscribe('posts'), subs.subscribe('comments'), subs.subscribe('attachments'), subs.subscribe('hospitals'), subs.subscribe('towns')];
    },
    data: function(){
      var id = Meteor.userId();
        return {                        // Return only documents with the category in the parameters

          aHospital: Hospitals.findOne({ "owner": id }),
          pageTitle: 'Edit Hospital'
        }
      }
    }
    );

Router.route('/', function(){

    this.render('home');          // Render the same template as '/projects' route
  }, {
    name: 'home',
    layoutTemplate: "homeLayout",
    waitOn: function() {
      return [subs.subscribe('towns')];
    },
    data: function(){
      var id = Meteor.userId();
        return {                        // Return only documents with the category in the parameters

          aHospital: Hospitals.findOne({ "owner": id }),
          pageTitle: 'Edit Hospital'
        }
      }
    }
    );
Router.route('/blog-post', function(){
    this.render('blogPost');          // Render the same template as '/projects' route
  }, {
    name: 'blogPost',
    layoutTemplate: "homeLayout"
  }
  );
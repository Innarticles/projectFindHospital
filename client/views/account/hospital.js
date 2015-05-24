AutoForm.hooks({
  insertHospitalForm: {
    onSuccess: function(operation, result, template) {
       Router.go('dashboard');
      return sAlert.success('Profile Created');

    },
    onError: function(operation, error, template) {
      return sAlert.error(error);
    }
  },
  updateHospital: {
    onSuccess: function(operation, result, template) {
       Router.go('hospitalinfo');
      return sAlert.success('Profile updated');

    },
    onError: function(operation, error, template) {
      return sAlert.error(error);
    }
  },
  updatePicture: {
    onSuccess: function(operation, result, template) {
      return sAlert.success('Picture Updated');
    },
    onError: function(operation, error, template) {
      return sAlert.error(error);
    }
  }
});

Template.hospitalSignUp.rendered = function () {
  console.log('down to here');
  Meteor.setTimeout(function(){
    $('#at-field-hospital').val('true');
  }, 1000);
};


Template.updateHospital.helpers({
  aHospital: function() {
    var id = Meteor.userId();
    return Hospitals.findOne({ "owner": id });
  },
  categories: function() {
    return Categories.find().fetch();
  },
  hasCategory: function() {
    var post = Posts.findOne(Session.get('selectedPostId'));
    return _.contains(post.categories, this.name) ? 'checked' : '';
  }
});

Template.hospitalinfo.helpers({
  aHospital: function() {
    var id = Meteor.userId();
    return Hospitals.findOne({ "owner": id });
  }
});

// Template.loginForm.events({
//   "submit #login-form": function(event, template) {
//     event.preventDefault();
//     Meteor.loginWithPassword(
//       template.find("#login-username").value,
//       template.find("#login-password").value,
//       function(error) {
//         if (error) {
//           // Display the login error to the user however you want
//         }
//       }
//       );
//   }
// });

// Template.logoutForm.events({
//   "submit #logout-form": function(event, template) {
//     event.preventDefault();
//     Meteor.logout(function(error) {
//       if (error) {
//         // Display the logout error to the user however you want
//       }
//     });
//   }
// });



Template.signupForm.events({
  "submit #signup-form": function(event, template) {
    event.preventDefault();
    console.log("reached here");
    Accounts.createUser({
      email: template.find("#signup-email").value,
      password: template.find("#signup-password").value,
      profile: {
        hospitalName: template.find("#signup-name").value
        // Other required field values can go here
      }
    }, function(error) {
      if (error) {
        console.log("something went bad" + error);
        
      }
    });
  }
});

Template.loginForm.events({
  "submit #login-form": function(event, template) {
    event.preventDefault();
    Meteor.loginWithPassword(
      template.find("#login-username").value,
      template.find("#login-password").value,
      function(error) {
        if (error) {
          // Display the login error to the user however you want
        }
      }
      );
  }
});

Template.logoutForm.events({
  "submit #logout-form": function(event, template) {
    event.preventDefault();
    Meteor.logout(function(error) {
      if (error) {
        // Display the logout error to the user however you want
      }
    });
  }
});
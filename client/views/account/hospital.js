AutoForm.hooks({
  insertHospitalForm: {
    onSuccess: function(operation, result, template) {
       Router.go('dashboard');
      return sAlert.success('Profile Created', {timeout: '20000', onRouteClose: false,  position: 'top-left'});

    },
    onError: function(operation, error, template) {
      return sAlert.error(error);
    }
  },
  updateHospital: {
    onSuccess: function(operation, result, template) {
       Router.go('hospitalinfo');
      return sAlert.success('Profile updated', {timeout: '20000', onRouteClose: false, position: 'top-left'});

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


Template.results.rendered = function() {
  Meteor.typeahead.inject();
};

Template.results.helpers({
  nba: function() {
    return Towns.find().fetch().map(function(it){ return it.name; });
  }
});

Template.bookAppointment.helpers({
  email: function() {
    return Meteor.user().emails[0].address;
  }
});


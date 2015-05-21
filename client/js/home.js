Template.home.events({
	'click #hospitalSearch': function (e) {
		e.preventDefault();
		var hospitalType = Hospitals.find().fetch();
		// ...
	}
});




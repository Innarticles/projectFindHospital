Template.confirmBooking.helpers({
	// foo: function () {
	// 	// ...
	// }
	patientname: function() { return Session.get('patientname'); },
	patientphone: function() { return Session.get('patientphone'); },
	patientcondition: function() { return Session.get('patientcondition'); },
	patientEmail: function() { return Session.get('patientEmail'); },
	hospitaladd: function() { return Session.get('hospitaladd'); },
	bookingDate: function() { return Session.get('bookingDate'); },
	bookingTime: function() { return Session.get('bookingTime'); }



});

Template.confirmBooking.events({
	'click #finish': function (e,t) {
		e.preventDefault();
		var subject = Session.get('subject');
		var description = Session.get('description');
		var emailOfPatient = Session.get('patientEmail');


		var emailObject = {
			name: subject,
			description: description,
			hisEmail: emailOfPatient
		};
		console.log("about to hit the meteor call");
		Meteor.call("sendEmail", emailObject);
        //track
        console.log("before");
        // ga('send', 'event', 'Book', 'book click', 'Find Hospitals');

        Router.go('blogPost');
        console.log("after");

        swal({   title: "Your request has been sent!",   text: "You would be contacted soon",  type: "success",  timer: 4000,   showConfirmButton: false });
    }
});
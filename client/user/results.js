Template.bookAppointment.events = {
    "click #book" : function(e,t) {
        e.preventDefault();
       var nameOfPatience =  $("#nametxt").val();
       var description =  $("#bookingDescription").val();
       var emailOfPatience = $("#emailtxt").val();
       var hospital = $("#address").val();
       var subject = nameOfPatience + "  booked for " + hospital;

       var emailObject = {
            name: subject,
            description: description,
            hisEmail: emailOfPatience
       };
       console.log("about to hit the meteor call");
      Meteor.call("sendEmail", emailObject);

        Router.go('/');
          return sAlert.success('Request has been sent');
    }


};






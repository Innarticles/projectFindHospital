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
       swal({   title: "Your request has been sent!",   text: "We will send you a confirmation mail",  type: "success",  timer: 4000,   showConfirmButton: false });
          // return sAlert.success('Request has been sent');
    }


};






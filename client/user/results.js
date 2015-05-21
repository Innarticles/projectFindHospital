Template.bookAppointment.events = {
    "click #book" : function(e,t) {
        e.preventDefault();
       var nameOfPatience =  $("#nametxt").val();
       var description =  $("#bookingDescription").val();
       var emailOfPatience = $("#emailtxt").val();

       var emailObject = {
            name: nameOfPatience,
            description: description,
            hisEmail: emailOfPatience
       };
       console.log("about to hit the meteor call");
      Meteor.call("sendEmail", emailObject);
    }
};

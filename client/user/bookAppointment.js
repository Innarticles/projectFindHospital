Template.bookAppointment.events = {
    "click #book" : function(e,t) {
        e.preventDefault();
       var nameOfPatient =  $("#nametxt").val();
       var phoneOfPatient =  $("#phonetxt").val();
       var description =  $("#bookingDescription").val();
       var emailOfPatient = $("#emailtxt").val();
       var hospital = $("#address").val();
       var subject = nameOfPatient + "  booked for " + hospital;

       if(nameOfPatient === "" && emailOfPatient === ""  && phoneOfPatient === ""){
        console.log("empty");
        sAlert.error('Oops! Are you missing something?', {effect: 'genie', position: 'bottom', timeout: 2000});
      
       }
       else{


       var emailObject = {
            name: subject,
            description: description,
            hisEmail: emailOfPatient
       };
       console.log("about to hit the meteor call");
      Meteor.call("sendEmail", emailObject);

        Router.go('/');
       swal({   title: "Your request has been sent!",   text: "We will send you a confirmation mail",  type: "success",  timer: 4000,   showConfirmButton: false });
       }

          // return sAlert.success('Request has been sent');
    }


};






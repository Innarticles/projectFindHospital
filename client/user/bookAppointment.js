Template.bookAppointment.events = {
  "click #book" : function(e,t) {
    // e.preventDefault();
    var nameOfPatient =  $("#nametxt").val();
    var phoneOfPatient =  $("#phonetxt").val();
    var description =  $("#bookingDescription").val();
    var emailOfPatient = $("#emailtxt").val();
    var hospital = $("#address").val();
    var subject = nameOfPatient + "  booked for " + hospital;
    description = description + ". You can reach me with " + phoneOfPatient;

    Session.set('patientname', nameOfPatient);
    Session.set('patientphone', phoneOfPatient);
    Session.set('patientcondition', description);
    Session.set('patientEmail', emailOfPatient);
    Session.set('hospitaladd', hospital);
    Session.set('subject', subject);
    Session.set('description', description);

    console.log(nameOfPatient);

    if(nameOfPatient === "" || emailOfPatient === ""  || phoneOfPatient === ""){
      console.log("empty");
      sAlert.error('Oops! Are you missing something?', {effect: 'genie', position: 'bottom', timeout: 2000});

    }
    // else{


    //  var emailObject = {
    //   name: subject,
    //   description: description,
    //   hisEmail: emailOfPatient
    // };
    // console.log("about to hit the meteor call");
    // Meteor.call("sendEmail", emailObject);
    //     //track
    //     ga('send', 'event', 'Book', 'book click', 'Find Hospitals');
    //     Router.go('blogPost');
    //     swal({   title: "Your request has been sent!",   text: "You would be contacted soon",  type: "success",  timer: 4000,   showConfirmButton: false });
    //   }

    //       // return sAlert.success('Request has been sent');
  }


};

// Template.bookAppointment.helpers({


//   // console.log(patientName);
//   // var test = "yeah";
//   // $('#patientname').html(test);
//   // $('#patientphone').html(patientPhoneNumber);
//   // $('#patientcondition').html(patientCondition);
//   // $('#patientmail').html(patientEmail);

//   foo: function () {
//     var patientName =  $('#nametxt').val();
//     var patientPhoneNumber = $('#phonetxt').val();
//     var patientEmail = $('#emailtxt').val();
//     var patientCondition = $('#bookingDescription').val();
//     console.log(patientName);
//     Session.set('patientname', patientName);
//   }
// });





Meteor.methods({
  sendEmail: function (emailObject) {
console.log("###********************about sending *****************###");
 Email.send({
  from: emailObject.hisEmail,
  to: "findhospitalsco@gmail.com",
  subject: emailObject.name,
  text: emailObject.description
});

console.log("###********************raluye *****************###");
  },
  deleteTask: function (taskId) {
    Tasks.remove(taskId);
  },
  setChecked: function (taskId, setChecked) {
    Tasks.update(taskId, { $set: { checked: setChecked} });
  }
});
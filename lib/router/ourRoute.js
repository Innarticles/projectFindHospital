Router.route('/new-account', function(){ 
    if(Meteor.user() == null){
        this.render('hospitalSignUp');
    }
    else{
       Router.go('/hospitalinfo');
   }
},
{                 
  layoutTemplate: "masterLayout"
});


Router.route('/new-hospital', function(){
   if(Meteor.user() == null){

      Router.go('/sign-in/');
  }
  else{
    if (Meteor.user().roles[0] == "hospital"){
      this.render('newHospital');
    }
    else{
       Router.go('/');
    }
      
  } 
},
{                 
  layoutTemplate: "masterLayout"
}
);


// Router.route('/maindashboard', function() {
//   this.render("maindashboard");
  
// },{
//   name: 'maindashboard',                      
//   layoutTemplate: "maindashboard"
// });
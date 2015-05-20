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
      this.render('newHospital');
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
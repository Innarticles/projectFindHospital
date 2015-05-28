Template.home.events({
	'click #hospitalSearch': function (e) {
		e.preventDefault();
		var areaLocation;
		var hospType = $("#select1").val();
		var areaCheck = $("#lat").val();
		if(areaCheck == "")
		{
			areaLocation = "Accra Metropolis";
		} 
		else
		{
			areaLocation =  $("#lat").val();
		}

		var feeRange 
		if( $("#select").val()== "0  to 20 Ghc"){
			feeRange = 20
		} else if ($("#select").val()== "20 to 40 Ghc"){
			feeRange =40;
		} else if ($("#select").val()== "40 to 100 Ghc"){
			feeRange =100;
		} else if ($("#select").val()== "100 to 150 Ghc"){
			feeRange =150;
		} else if ($("#select").val()== "150 and above"){
			feeRange =200;
		};
		
		var searchResults = {
			type: hospType,
			location: areaLocation,
			range: feeRange
		};
		// console.log(searchResults);


		Router.go('results', searchResults );
		return false;
	},

	'click #logout': function(e, tmpl) {
		return Meteor.logout(function() {
			sAlert.info('You logged out!.', {effect: 'genie', position: 'bottom-right', onRouteClose: true, timeout: 5000});
			Router.go('/');
		});
	},

	'click .home-navHandler': function(e, tmpl) {
		 console.log("clicked nav");
        $('.home-nav').toggleClass('active');
        $(this).toggleClass('active');
	}
});

Template.results.events({
	'click #hospitalSearch': function (e) {
		e.preventDefault();
		var areaLocation;
		var hospType = $("#select1").val();
		var areaCheck = $("#lat").val();
		if(areaCheck == "")
		{
			areaLocation = "Accra Metropolis"
		} 
		else
		{
			areaLocation =  $("#lat").val();
		}
		var feeRange 
		if( $("#select").val()== "0  to 20 Ghc"){
			feeRange = 20
		} else if ($("#select").val()== "20 to 40 Ghc"){
			feeRange =40
		} else if ($("#select").val()== "40 to 100 Ghc"){
			feeRange =100
		} else if ($("#select").val()== "100 to 150 Ghc"){
			feeRange =150
		} else if ($("#select").val()== "150 and above"){
			feeRange =200
		};
		

		var searchResults = {
			type: hospType,
			location: areaLocation,
			range: feeRange
		};
		// console.log(searchResults);


		Router.go('results', searchResults );
		return false;
	}
});



Template.home.helpers({
  nba: function() {
    return Towns.find().fetch().map(function(it){ return it.name; });
  }
});


Template.home.rendered = function() {
  Meteor.typeahead.inject();
};
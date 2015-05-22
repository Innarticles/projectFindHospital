Template.home.events({
	'click #hospitalSearch': function (e) {
		e.preventDefault();
		var hospType = $("#select1").val();
		var areaLocation = $("#lat").val();
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
	},

	'click #logout': function(e, tmpl) {
		return Meteor.logout(function() {
			return Session.set("ses", false);

			Router.go('/');
		});
	}



	});


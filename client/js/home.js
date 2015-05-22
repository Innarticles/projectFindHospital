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
		}
		// var hospitalType = Hospitals.find().fetch();
		// ...

		// console.log(feeRange);
		// console.log(areaLocation);
		// console.log(hospType);

		// var result = Hospitals.find({area: areaLocation }, {
			
		// 	sort: Sort specifier,
		// 	skip: Number,
		// 	limit: Number,
		// 	fields: Field specifier,
		// 	reactive: Boolean,
		// 	transform: Function
		
		// }).fetch();


var searchResults = {
	type: hospType,
	location: areaLocation,
	range: feeRange
}

		// console.log(searchResults);
				// db.inventory.find( { type: 'food', price: { $lt: 9.95 } } )

				Router.go('results', searchResults );
				return false;
			}
		});




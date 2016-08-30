var garage = [];

var viewCars = function () {

	// Set Var for the garage element
	var myGarage = $("#myGarage");

	myGarage.html( "" );

	// For every car in the garage
	for ( var i = 0; i < garage.length; i++ ) {

		var car = garage[i]; // Each car

		var carContainer = $("<div />", { class: "carContainer" }).data("car-index", i );
			carContainer.css( "background-image", "url('" + car.carPhoto + "')").css("background-position", "center center").css("background-size","cover");

		var textContainer = $("<div />" , { class: "carText" });

		textContainer.html( car.carYear + " " + car.carMake + " " + car.carModel );

		carContainer.append( textContainer );

		myGarage.append( carContainer );

		console.log( "loop" );

	}

	return carContainer;

};

$(document).ready( function() {

	$("#carForm").on( "submit", function ( e ) {
		
		// Serialize the form
		// The form submission object
		var formSubmission = {};

		// For each input in the form
		$( "#carForm > input:not(#carFormSubmit)" ).each( function () { 

			// Create an attribute from the id
			var attr = $( this ).attr( "id" );

			// Add a key/value pair to the object where the key is the id of the input
			// and the value is the string of te input
			formSubmission[ attr ] = this.value;

		});

		// For each item submitted
		for ( var item in formSubmission ) {
			// If the value is undefined, null or empty
			if( formSubmission[item] === undefined || formSubmission[item] === null || formSubmission[item] === "" ) {

				// Alert the user
				alert( "All form fields required to add a car to the garage." );

				// Log the error
				console.error( "All form fields required. Submitted:", formSubmission );

				// Do not add the car and leave the form fields filled
				return false;
			} 
		}


		// Clear the form fields
		$( "#carForm > input:not(#carFormSubmit)" ).each( function () {
			// Set each input value to empty
			$( this ).val( "" );
		} );

		// Push the object into the garage
		garage.push( formSubmission );

		return viewCars();

	} );

} );
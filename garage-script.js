var garage = [];

var viewCars = function () {

	// Set Var for the garage element
	var myGarage = $("#myGarage");

	myGarage.html( "" );

	// For every car in the garage
	for ( var i = 0; i < garage.length; i++ ) {

		var car = garage[i]; // Each car

		var carContainer = $("<div />", { class: "carContainer" }).data("car-index", i );

			console.log( "My Div:", carContainer );
			carContainer.css( "background-image", "url('" + car.carPhoto + "')").css("background-position", "center center").css("background-size","cover");

		var textContainer = $("<div />" , { class: "carText" });

		textContainer.html( car.carYear + " " + car.carMake + " " + car.carModel );

		carContainer.append( textContainer );

		myGarage.append( carContainer );

	}

	return true;

};

$(document).ready( function() {

	// 
	$("#form").on( "submit", function ( e ) {
		
		// Serialize the form
		// The form submission object
		var formSubmission = {};

		// For each input in the form EXCEPT for the submit button
		$( "#form > input:not(#carFormSubmit)" ).each( function () { 

			// Create an attribute from the id
			var attr = $( this ).attr( "id" );

			console.log( "var attr =", attr );

			// Add a key/value pair to the object where the key is the id of the input
			// and the value is the string of te input
			formSubmission[ attr ] = this.value;

			console.log( "formSubmission[ " + attr + " ] = " + this.value + ";" );

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
		$( "#form > input:not(#carFormSubmit)" ).each( function () {
			// Set each input value to empty
			$( this ).val( "" );
		} );

		// Push the object into the garage
		garage.push( formSubmission );

		console.log( "garage:", garage );

		return viewCars();

	} );

} );
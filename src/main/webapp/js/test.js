
function test() {
	// Specific route in OCP, need to make this generic in some way
	var rootURL = "http://registerservice-coffeshop.192.168.64.2.nip.io/RegistrationService/api";

	$.ajax({
		type: 'POST',
        cache: false,
        crossDomain: true,
		contentType: 'application/json',
		url: rootURL +"/register/",
		dateType: "json",
		data: testFormToJSON(),
		success: sucessTest,
		error: errorTest
	});
}


function sucessTest(data) {
	alert( "data " +  data );
}

function errorTest(jqXHR) {
	alert( " jqXHR.responseText " );
}

// Helper function to serialize all the form fields into a JSON string
function testFormToJSON() {
	return JSON.stringify({
		"emailAdr": "test@example.com",
		"password": "test123"
		});
}

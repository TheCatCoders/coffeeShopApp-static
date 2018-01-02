
function signIn() {
	// Specific route in OCP, need to make this generic in some way
	var rootURL = "http://registerservice-coffeshop.192.168.64.2.nip.io/RegistrationService/api";

	$.ajax({
		type: 'POST',
        cache: false,
        crossDomain: true,
		contentType: 'application/json',
		url: rootURL +"/register/",
		dateType: "json",
		data: signinFormToJSON(),
		success: sucessRegistration,
		error: errorRegistration
	});
}


function sucessRegistration(data) {
	$('#userInfo').hide();
	$('#loginInfo').show();
}

function errorRegistration(jqXHR) {
	$('#errorSignin').text( jqXHR.responseJSON );
}

// Helper function to serialize all the form fields into a JSON string
function signinFormToJSON() {
	return JSONObject =  JSON.stringify({
        "username": $('#name').val(),
        "gender": $('#gender').val(),
        "age": $('#birthdate').val(),
		"emailAdr": $('#email').val(), 
		});
}
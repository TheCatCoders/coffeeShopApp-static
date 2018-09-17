function login() {
	if( $('#username').val() == '' || $('#password').val() =='' ) {
		$('#errorLogin').text( "Please fill all fields...!!!!!!" );
	} else {
		callLoginService();
	}
}

function callLoginService() {
	$.ajax({
		type: 'POST',
        cache: false,
        crossDomain: true,
		contentType: 'application/json',
		url: loginService +"/login/",
		dateType: "json",
		data: loginFormToJSON(),
		success: sucessLogin,
		error: errorLogin
	});
}



function sucessLogin(data) {
    $('#userDisplayName').text(data.username);

	$('#loginInfo').hide();
    $('#loginNavBar').hide();

    $('#welcomePage').show();
    $('#signoutNavBar').show();
}

function errorLogin(jqXHR) {
	$('#errorLogin').text( jqXHR.responseText );
}

// Helper function to serialize all the form fields into a JSON string
function loginFormToJSON() {
	return JSON.stringify({
		"emailAdr": $('#emailAdr').val(),
		"password": $('#password').val()
		});
}

function login() {
	if( $('#username').val() == '' || $('#password').val() =='' ) {
		$('#errorLogin').text( "Please fill all fields...!!!!!!" );
	} else {
		callLoginService();
	}
}

function callLoginService() {
	// Specific route in OCP, need to make this generic in some way
	var rootURL = "http://loginservice-coffeeshop.192.168.64.2.nip.io/LoginService/api";

	$.ajax({
		type: 'POST',
        cache: false,
        crossDomain: true,
		contentType: 'application/json',
		url: rootURL +"/login/",
		dateType: "json",
		data: loginFormToJSON(),
		success: sucessLogin,
		error: errorLogin
	});
}



function sucessLogin(data) {
    findProduct();

	$('#loginInfo').hide();
	$('#menuBar').hide();
	
	$('#userInfo').text( "Welcome " + data.username );
	$('#userInfoBar').show();
	$('#coffeeList').show();
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

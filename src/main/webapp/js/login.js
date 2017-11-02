
function login() {
	console.log('Login User');
	var rootURL = "http://localhost:8080/LoginServiceApp";
	
	if( $('#username').val() == '' || $('#password').val() =='' ) {
		$('#errorLogin').text( "Please fill all fields...!!!!!!" );
	} else {
		$.ajax({
			headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    },
			type: 'POST',
			url: rootURL +"/login/",
			dataType: "json",
			data: loginFormToJSON(),
			success: sucessLogin,
			error: errorLogin
		});
	}
}


function sucessLogin(data) {
	console.log( 'Sucess Login: ' + data.username );
	
	$('#loginInfo').hide();
	
	$('#name').val( data.username );
	$('#gender').val( data.gender );
	$('#birthdate').val( data.age );
	$('#email').val( data.emailAdr );
	
	$('#userInfo').show();
}

function errorLogin(jqXHR) {
	console.log( 'Error Login: ' + jqXHR.responseJSON );
	$('#errorLogin').text( jqXHR.responseJSON );
}

// Helper function to serialize all the form fields into a JSON string
function loginFormToJSON() {
	return JSON.stringify({
		"emailAdr": $('#emailAdr').val(), 
		"password": $('#password').val()
		});
}
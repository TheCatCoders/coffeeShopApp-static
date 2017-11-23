
function login() {
	console.log('Login User');
	// public wildfly
    //var rootURL = "http://loginserviceroute1-fronttoback.193b.starter-ca-central-1.openshiftapps.com/LoginServiceApp/api";
    // local wildfly
	//var rootURL = "http://localhost:9080/LoginServiceApp/api";
    // local tomcat
	var rootURL = "http://localhost:8080/api";

	if( $('#username').val() == '' || $('#password').val() =='' ) {
		$('#errorLogin').text( "Please fill all fields...!!!!!!" );
	} else {
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
}


function sucessLogin(data) {
	$('#loginInfo').hide();

	$('#name').val( data.username );
	$('#gender').val( data.gender );
	$('#birthdate').val( data.age );
	$('#email').val( data.emailAdr );

	$('#userInfo').show();
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

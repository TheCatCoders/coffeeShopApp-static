
function signIn() {
	console.log('Create User');
	var rootURL = "http://localhost:8080/CreateUserServiceApp/rest";
	
	$.ajax({
		type: 'POST',
		contentType: 'application/json',
		url: rootURL +"/createUser/",
		dataType: "json",
		data: signinFormToJSON(),
		success: sucessCreateUser,
		error: errorCreateUser
	});
}


function sucessCreateUser(data) {
	console.log( 'Sucess Create User: ' );
	
	$('#userInfo').hide();
	$('#loginInfo').show();
}

function errorCreateUser(jqXHR) {
	console.log( 'Error creating file ' + jqXHR.responseJSON );
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
	
	//return JSON.parse( JSONObject ); 
}
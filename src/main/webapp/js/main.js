
// Login button binding
$('#btnLogin').click(function() {
	$('#signInForm').trigger("reset");

	$('#welcomeImage').hide();
	$('#userRegistration').hide();
	$('#loginInfo').show();
	return false;
});

$('#btnLoginOk').click(function() {
	login();
	return false;
});

// Sign in button binding
$('#btnSignin').click(function() {
	$('#loginForm').trigger("reset");

	$('#welcomeImage').hide();
	$('#loginInfo').hide();
	$('#userRegistration').show();
	return false;
});

$('#btnSigninOk').click(function() {
	signIn();
	return false;
});

$('#btnCancel').click(function() {
	$('#loginForm').trigger("reset");
	$('#signInForm').trigger("reset");

	$('#userRegistration').hide();
	$('#loginInfo').hide();

	return false;
});

// Button Sign out binding
$('#btnLSignout').click(function() {
	$('#loginForm').trigger("reset");
	$('#signInForm').trigger("reset");
	
	$('#userRegistration').hide();
	$('#loginInfo').hide();
	$('#userInfoBar').hide();
	$('#coffeeList').hide();

	$('#menuBar').show();
	$('#welcomeImage').show();
	
	return false;
});

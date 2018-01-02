
// Login button binding
$('#btnLogin').click(function() {
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
	$('#userRegistration').hide();
	$('#loginInfo').hide();

	return false;
});
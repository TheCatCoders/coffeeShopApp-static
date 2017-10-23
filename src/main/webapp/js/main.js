
// Login button binding
$('#btnLogin').click(function() {
	$('#menuBar').hide();
	$('#loginInfo').show();
	return false;
});

$('#btnLoginOk').click(function() {
	login();
	return false;
});

// Sign in button binding
$('#btnSignin').click(function() {
	$('#menuBar').hide();
	$('#userInfo').show();
	return false;
});

$('#btnSigninOk').click(function() {
	signIn();
	return false;
});

$('#btnSigninCancel').click(function() {
	$('#userInfo').hide();
	$('#menuBar').show();

	return false;
});

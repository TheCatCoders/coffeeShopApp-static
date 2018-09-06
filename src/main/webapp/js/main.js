// HOome
$('#homeCat').click(function() {
    $('#loginForm').trigger("reset");
    $('#signInForm').trigger("reset");

    $('#userRegistration').hide();
    $('#loginInfo').hide();
    $('#productSection').hide();
    $('#welcomeImage').show();

    return false;
});



// Login button binding
$('#btnLogin').click(function() {
	$('#signInForm').trigger("reset");

	$('#welcomeImage').hide();
	$('#userRegistration').hide();
	
	$('#errorLogin').text( "" );
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
    $('#signInForm').trigger("reset");

    $('#welcomeImage').hide();
	$('#loginInfo').hide();
	
	$('#errorSignin').text( "" );
	$('#userRegistration').show();
	
	return false;
});

$('#btnSigninOk').click(function() {
	signIn();
	return false;
});

$('#btnFindProduct').click(function() {
    findProduct();
    return false;
});

// Button Sign out binding
$('#btnSignout').click(function() {
	$('#loginForm').trigger("reset");
	$('#signInForm').trigger("reset");
	
	$('#userRegistration').hide();
	$('#loginInfo').hide();
	$('#productSection').hide();


	$('#welcomeImage').show();
	
	return false;
});

// Home
$('#homeCat').click(function() {
    $('#loginForm').trigger("reset");
    $('#signInForm').trigger("reset");

    $('#userRegistration').hide();
    $('#loginInfo').hide();
    $('#productSection').hide();
    $('#welcomePage').show();

    return false;
});



// Login button binding
$('#btnLogin').click(function() {
    $('#loginForm').trigger("reset");
	$('#signInForm').trigger("reset");

	$('#welcomePage').hide();
	$('#userRegistration').hide();
    $('#productSection').hide();
	
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

    $('#welcomePage').hide();
	$('#loginInfo').hide();
    $('#productSection').hide();
	
	$('#errorSignin').text( "" );
	$('#userRegistration').show();
	
	return false;
});

$('#btnSigninOk').click(function() {
	signIn();
	return false;
});

$('#btnFilterProduct').click(function() {
    findProductByName();
    return false;
});


$('#btnFindProduct').click(function() {
    findProduct();
    $('#welcomePage').hide();
    $('#loginInfo').hide();
    $('#userRegistration').hide();

    $('#productSection').show();
    return false;
});

// Button Sign out binding
$('#btnSignout').click(function() {
	$('#loginForm').trigger("reset");
	$('#signInForm').trigger("reset");
	
	$('#userRegistration').hide();
	$('#loginInfo').hide();
	$('#productSection').hide();
    $('#signoutNavBar').hide();

    $('#loginNavBar').show();
	$('#welcomePage').show();
	
	return false;
});

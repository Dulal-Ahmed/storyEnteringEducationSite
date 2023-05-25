<?php 

// We need to use sessions, so you should always start sessions using the below code.
session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: admin.php');
	exit;
}
session_destroy();
// Redirect to the login page:
header('Location: admin.php');
?>

<?php
 include "connect.php"; 

 //-------
session_start();
include "connenct.php";  
$u_name = $Pass_word = "";
if(isset($_POST['adminLogin'], $_POST['adminName'], $_POST['adminPassword'])){

	if( !empty($_POST['adminName']) && !empty($_POST['adminPassword']) ){
    
   $u_name =  test_input($_POST['adminName']);
   $Pass_word =  test_input($_POST['adminPassword']);
   
   	
 // $Michal = "Michal";
 //  $email = "text@test.com";

// We need to check if the account with that username exists.
if ($stmt = $conn->prepare('SELECT id, password FROM admin_st WHERE user_name = ?')) 
{
	
	// Bind parameters (s = string, i = int, b = blob, etc), hash the password using the PHP password_hash function.
	$stmt->bind_param('s', $u_name);
	$stmt->execute();
	$stmt->store_result();
	// Store the result so we can check if the account exists in the database.
	if ($stmt->num_rows > 0) {
		// Username session set
        $stmt->bind_result($id, $passwords);
	    $stmt->fetch();

	// Account exists, now we verify the password.
	// Note: remember to use password_hash in your registration file to store the hashed passwords.
    // 	if (password_verify($Pass_word, $passwords))
    if ($Pass_word === $passwords) {
		// Verification success! User has logged-in!
		// Create sessions, so we know the user is logged in, they basically act like cookies but remember the data on the server.
		session_regenerate_id();
		$_SESSION['loggedin'] = TRUE;
		$_SESSION['name'] = $u_name;
		$_SESSION['id'] = $id;
		echo 'Welcome ' . $_SESSION['name'] . '!';

        header('Location: adminDashboard.php');
	} else {
		// Incorrect password
		echo 'Incorrect  password!';
       
       header('Location: admin.php');
	}

	} else {
		// Incorrect password
		echo 'Incorrect username !';
        header('Location: admin.php');
	}

	$stmt->close();
} else {
	// Something is wrong with the SQL statement, so you must check to make sure your accounts table exists with all 3 fields.
	echo 'Could not prepare statement!';
    header('Location: admin.php');
}
 }else{
    header('Location: admin.php');
 }
}else{
    header('Location: admin.php');
}
function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
  }

  $conn->close();

?>

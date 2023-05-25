
<?php
 include "connect.php"; 

 //-------
session_start();

$tname = $Pass_word = "";
if(isset($_POST['teacherLogin'], $_POST['teacherName'], $_POST['teacherPassword']))
{

	if( !empty($_POST['teacherName']) && !empty($_POST['teacherPassword']) )
    {
    
   $tname =  test_input($_POST['teacherName']);
   $Pass_word =  test_input($_POST['teacherPassword']);
   
   	
 // $Michal = "Michal";
 //  $email = "text@test.com";

// We need to check if the account with that username exists.
if ($stmt = $conn->prepare('SELECT id, teacher_pass, tablename, template FROM teachers WHERE teacher_name = ?')) 
{         
    // Bind parameters (s = string, i = int, b = blob, etc), hash the password using the PHP password_hash function.
    $stmt->bind_param('s', $tname);
    $stmt->execute();
    $stmt->store_result();
    // Store the result so we can check if the account exists in the database.
    if ($stmt->num_rows > 0) {
        // Username already exists
      		// Username session set
              $stmt->bind_result($id, $teacher_pass ,$tablename, $template );
              $stmt->fetch();
// 	if (password_verify($Pass_word, $passwords))
    if ($Pass_word === $teacher_pass) {
		// Verification success! User has logged-in!
		// Create sessions, so we know the user is logged in, they basically act like cookies but remember the data on the server.
		session_regenerate_id();
		$_SESSION['loggedin'] = TRUE;
		$_SESSION['name'] = $tname;
		$_SESSION['id'] = $id;
		$_SESSION['tablename'] = $tablename;
		$_SESSION['template'] = $template;

		echo 'Welcome ' . $_SESSION['name'] . '!';

        header('Location: teacherDashboard.php');
	} else {
		// Incorrect password
		echo 'Incorrect  password!';
       
       header('Location: index.php');
	}

	} else {
		// Incorrect password
		echo 'Incorrect username !';
        header('Location: index.php');
	}

	$stmt->close();
} else {
	// Something is wrong with the SQL statement, so you must check to make sure your accounts table exists with all 3 fields.
	echo 'Could not prepare statement!';
    header('Location: index.php');
}
 }else{
    header('Location: index.php');
 }
}else{
    header('Location: index.php');
}
function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
  }

  $conn->close();

?>

<?php 
// We need to use sessions, so you should always start sessions using the below code.
session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: teacherDashboard.php');
	exit;
}

 include "connect.php"; 

 $teachercurrentTable  = $_SESSION['tablename'];

 if(isset($_POST['storyend'], $_POST["pageno"] , $_POST["section_A"]))
 {
 if(!empty($_POST["pageno"])  && !empty($_POST["section_A"]) )
  {
     $section_a = $page_no = "";
   
     $section_a = test_input($_POST["section_A"]);
     $page_no   = test_input($_POST["pageno"]);
     
     // insert data
     // story_tree

     $statement = $conn->prepare( "INSERT INTO $teachercurrentTable( page_no, sec_a)VALUES(?, ?)");    
     $statement->bind_param("is",$page_no, $section_a );
     $statement->execute();
     $statement->close();
     $conn->close();
     
   } 
  }
    header('Location: teacherDashboard.php');

 function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
  
?>
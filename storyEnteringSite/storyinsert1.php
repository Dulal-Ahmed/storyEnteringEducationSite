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

 if(isset($_POST['story'], $_POST["pageno"] , $_POST["section_A"],$_POST["section_B"],$_POST["section_C"] ))
 {
 if(!empty($_POST["pageno"])  && !empty($_POST["section_A"]) && !empty($_POST["section_B"]) && !empty($_POST["section_C"]) )
  {
     $section_a = $section_b = $section_c = $page_no = "";
   
   
     $section_a = test_input($_POST["section_A"]);
     $section_b =  test_input($_POST["section_B"]);
     $section_c = test_input($_POST["section_C"]);
     $page_no   = test_input($_POST["pageno"]);
     
     // insert data
     // story_tree

     $statement = $conn->prepare( "INSERT INTO $teachercurrentTable( page_no, sec_a, sec_b, sec_c)VALUES(?, ?, ?, ?)");    
     $statement->bind_param("isss",$page_no, $section_a, $section_b, $section_c );
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
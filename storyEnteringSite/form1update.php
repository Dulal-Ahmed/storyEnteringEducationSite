<?php
            // We need to use sessions, so you should always start sessions using the below code.
        session_start();
        // If the user is not logged in redirect to the login page...
        if (!isset($_SESSION['loggedin'])) {
            header('Location: index.php');
            exit;
        }

        include "connect.php";
        $teachercurrentTable  = $_SESSION['tablename'];



   if(isset($_POST['threeeditvalue'], $_POST["sec_a"],$_POST["sec_b"],$_POST["sec_c"],$_POST["page_no"] ))
   {
   if( !empty($_POST["page_no"]) && !empty($_POST["sec_a"]) && !empty($_POST["sec_b"]) && !empty($_POST["sec_c"]) )
    {
       $section_a = $section_b = $section_c =  $storyId= "";
     
       $storyId = test_input($_POST["page_no"]);
       $section_a = test_input($_POST["sec_a"]);
       $section_b =  test_input($_POST["sec_b"]);
       $section_c = test_input($_POST["sec_c"]);

       // insert data
       // story_tree
          
       $sql = "UPDATE $teachercurrentTable 
               SET sec_a = '$section_a',  sec_b = '$section_b', sec_c =  '$section_c' 
               WHERE page_no = '$storyId'";    
      
       if ($conn->query($sql) === TRUE) {
        echo "Table story_tree created successfully";
        header('Location: teacherDashboard.php');
      } else {
        echo "Error creating table: " . $conn->error;
        header('Location: teacherDashboard.php');
      }
     
    // Close connection
  
       
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
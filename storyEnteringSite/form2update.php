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



   if(isset($_POST['oneeditvalue'], $_POST["sec_a"],$_POST["page_no"] ))
   {
   if( !empty($_POST["page_no"]) && !empty($_POST["sec_a"]) )
    {
       $section_a =  $storyId= "";
     
       $storyId = test_input($_POST["page_no"]);
       $section_a = test_input($_POST["sec_a"]);

       // insert data
       // story_tree
          
       $sql = "UPDATE $teachercurrentTable 
               SET sec_a = '$section_a'  
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
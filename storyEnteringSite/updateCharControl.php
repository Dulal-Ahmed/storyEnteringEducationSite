<?php
            // We need to use sessions, so you should always start sessions using the below code.
        session_start();
        // If the user is not logged in redirect to the login page...
        if (!isset($_SESSION['loggedin'])) {
            header('Location: index.php');
            exit;
        }

        include "connect.php";
 


   if(isset($_POST['charecter'], $_POST["s_a"],$_POST["s_b"],$_POST["s_c"],$_POST["s_e"],$_POST["id"] ))
   {
   if( !empty($_POST["id"]) && !empty($_POST["s_a"]) && !empty($_POST["s_b"]) && !empty($_POST["s_c"]) && !empty($_POST["s_e"]) )
    {
       $section_a = $section_b = $section_c = $section_e =  $storyId= "";
     
       $storyId = test_input($_POST["id"]);
       $section_a = test_input($_POST["s_a"]);
       $section_b =  test_input($_POST["s_b"]);
       $section_c = test_input($_POST["s_c"]);
       $section_e = test_input($_POST["s_e"]);

       // insert data
       // story_tree
          
       $sql = "UPDATE charcontrol 
               SET s_a = '$section_a',  s_b = '$section_b', s_c =  '$section_c' , s_e =  '$section_e'  
               WHERE id = '$storyId'";    
      
       if ($conn->query($sql) === TRUE) {
        echo "Table story_tree created successfully";
        header('Location: adminDashboard.php');
      } else {
        echo "Error creating table: " . $conn->error;
        header('Location: adminDashboard.php');
      }
     
    // Close connection
  
       
     } 
    }
      header('Location: adminDashboard.php');

   function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }
    
    ?>
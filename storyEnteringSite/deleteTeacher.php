<?php
            // We need to use sessions, so you should always start sessions using the below code.
        session_start();
        // If the user is not logged in redirect to the login page...
        if (!isset($_SESSION['loggedin'])) {
            header('Location: index.php');
            exit;
        }

        include "connect.php";
 


   if(isset($_POST['tdelete'], $_POST["tablename"],$_POST["id"] ))
   {
   if( !empty($_POST["id"]) && !empty($_POST["tablename"])  )
    {
       $tablename =  $storyId= "";
     
       $storyId = test_input($_POST["id"]);
       $tablename = test_input($_POST["tablename"]);
       // insert data
       // story_tree
  
       $sql = "DELETE FROM  teachers
               WHERE id = '$storyId'";    
      
       if ($conn->query($sql) === TRUE) {
        echo "Table story_tree created successfully";
        header('Location: adminDashboard.php');
      } else {
        echo "Error creating table: " . $conn->error;
        header('Location: adminDashboard.php');
      }
      
      $dlt = "DROP TABLE $tablename"; 
       if ($conn->query($dlt) === TRUE) {
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
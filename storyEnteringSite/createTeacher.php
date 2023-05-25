<?php 

// We need to use sessions, so you should always start sessions using the below code.
session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: admin.php');
	exit;
}

 include "connect.php";  

   if(isset($_POST['teacher'], $_POST["teacher_name"] , $_POST["teacher_pass"],$_POST["tablename"],$_POST["template"] ))
   {
   if(!empty($_POST["teacher_name"])  && !empty($_POST["teacher_pass"]) && !empty($_POST["tablename"]) && !empty($_POST["template"]) )
    {
       $tname = $tpass = $templatename = $tablename= "";
     
       $tname = test_input($_POST["teacher_name"]);
       $tpass = test_input($_POST["teacher_pass"]);
       $tablename = test_input($_POST["tablename"]);
       $templatename =  test_input($_POST["template"]);
    
       
       // insert data
       // story_tree
       if ($stmt = $conn->prepare('SELECT * FROM teachers WHERE teacher_name = ?')) 
       {         
           // Bind parameters (s = string, i = int, b = blob, etc), hash the password using the PHP password_hash function.
           $stmt->bind_param('s', $tname);
           $stmt->execute();
           $stmt->store_result();
           // Store the result so we can check if the account exists in the database.
           if ($stmt->num_rows > 0) {
               // Username already exists
               echo 'Username exists, please choose another!';
               header('Location: adminDashboard.php');
            } else {



       $statement = $conn->prepare( "INSERT INTO teachers( teacher_name, teacher_pass, tablename, template)VALUES(?, ?, ?, ?)");    
       $statement->bind_param("ssss",$tname, $tpass,  $tablename, $templatename , );
       $statement->execute();
       $statement->close();
          
       
      //--- Create this teacher table
      //----Create teacherTable

     $sql = "CREATE TABLE IF NOT EXISTS `$tablename` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
         `page_no` int(11) NOT NULL ,
          `sec_a` varchar(1000) NOT NULL,
          `sec_b` varchar(500) NOT NULL,
          `sec_c` varchar(500) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8";
    
    if ($conn->query($sql) === TRUE) {
        echo "teacher table".$tablename." created successfully";
      } else {
        echo "Error creating table: " . $conn->error;
      }
    }
      $conn->close();
     header('Location: adminDashboard.php');
    }  
     header('Location: adminDashboard.php');
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
<?php 
 $servername = "localhost";
 $username   = "root";
 $password   = "";
 $dbname     = "stories";

 // table name story_tree
 
 $conn = new mysqli($servername, $username, $password, $dbname);
 //check connection

 if($conn-> connect_error){
    die("connection failed: " . $conn-> connect_error);
 }
?>
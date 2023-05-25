<?php
            // We need to use sessions, so you should always start sessions using the below code.
        session_start();
        // If the user is not logged in redirect to the login page...
        if (!isset($_SESSION['loggedin'])) {
            header('Location: index.php');
            exit;
        }

        include "connect.php";

?>




<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <style>
    *{
        padding:0;
        margin:0;
    }
     main{
        display:flex;
        justify-content:center;
        padding:16px;
     }
     main section{
        display:flex;
        flex-direction:column;
        padding:8px;
        border:1px solid #aaaaaa;
     }
     textarea{
        padding:8px;
     }
     footer{
        display:flex;
        justify-content:center;
     }
     button, input{
        padding:8px 16px;
     }
   </style>
    <title>edit</title>
</head>
<body>
    <?php  
   $teachercurrentTable  = $_SESSION['tablename'];

            if(isset($_POST['threesection'], $_POST["threepageno"] ))
            {
            if( !empty($_POST["threepageno"]) )
             {
                $section_a = "";   
                $section_a = test_input($_POST["threepageno"]);
              
                $sqls = "SELECT * FROM $teachercurrentTable  WHERE page_no = $section_a";
                $result = $conn->query($sqls);
             
            if ($result->num_rows > 0) {
              // output data of each row
              while($row = $result->fetch_assoc()) {
                echo"
    <main>
         <form action='form1update.php' method='post'>
             <section>
                <textarea name='sec_a' >".$row['sec_a']."</textarea>
                 <footer>
                    <textarea name='sec_b'>".$row['sec_b']."</textarea>
                    <textarea name='sec_c'>".$row['sec_c']."</textarea>
                 </footer>
             <footer>
                
             <input type='hidden' name='page_no' value='".$row['page_no']."'>
             <button>Page No: ".$row['page_no']."</button>
                <input type='submit' name='threeeditvalue' value='save'>
             </footer>
           </section>
         </form>
    </main>";
              }}}}
  
   function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }
    
    ?>

</body>
</html>
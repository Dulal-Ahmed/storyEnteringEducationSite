
<?php   
         session_start();
         // If the user is not logged in redirect to the login page...
         if (!isset($_SESSION['loggedin'])) {
             header('Location: index.php');
             exit;
         }
 
         include "connect.php";

             $teachercurrentTable  = $_SESSION['tablename'];
            /* $teachercurrentTable." <br>";
             $_SESSION['name']."<br>" ; 
            $_SESSION['id']."<br>" ;
             $_SESSION['tablename']."<br>";
              $_SESSION['template']."<br>";
          $continuepage = " 1, 2, 3, 4, 5, 6, 7, 8, 9, 10" ;
          $engingpage = "11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 " ;
*/           
              $allstories ="Teacher Name: ".$_SESSION['name']. " Template: : ".$_SESSION['template']."\n";
                $totalpages = "0";
                $sqls = "SELECT * FROM $teachercurrentTable
                ORDER BY page_no;
                ";
                $result = $conn->query($sqls);              
            if ($result->num_rows > 0) {
            // output data of each row
             $totalpages = $result->num_rows;
            while($row = $result->fetch_assoc()) {

       if($_SESSION['template'] == 21){  //-- start 21 template write  
           if(
              $row['page_no'] == 1 || 
              $row['page_no'] == 2 || 
              $row['page_no'] == 3 || 
              $row['page_no'] == 4 || 
              $row['page_no'] == 5 || 
              $row['page_no'] == 6 || 
              $row['page_no'] == 7 || 
              $row['page_no'] == 8 || 
              $row['page_no'] == 9 || 
              $row['page_no'] == 10  
              ){  
         $allstories =  $allstories."
                  pageNo ".$row['page_no']." A: ".$row['sec_a']."\n  
                  pageNo ".$row['page_no']." B: ".$row['sec_b']."\n
                  pageNo ".$row['page_no']." C:".$row['sec_c']."\n ";
           }
     if(
            $row['page_no'] == 11 || 
            $row['page_no'] == 12 || 
            $row['page_no'] == 13 || 
            $row['page_no'] == 14 || 
            $row['page_no'] == 15 || 
            $row['page_no'] == 16 || 
            $row['page_no'] == 17 || 
            $row['page_no'] == 18 || 
            $row['page_no'] == 19 || 
            $row['page_no'] == 20 || 
            $row['page_no'] == 21  
            ){    
                $allstories =  $allstories."
                pageNo ".$row['page_no']." A: ".$row['sec_a']."\n";
      }
     } //--- end 21 template 

       if($_SESSION['template'] == 41){  //-- start 41 template write  
           if(
            $row['page_no'] == 1 || 
            $row['page_no'] == 2 || 
            $row['page_no'] == 3 || 
            $row['page_no'] == 4 || 
            $row['page_no'] == 5 || 
            $row['page_no'] == 6 || 
            $row['page_no'] == 7 || 
            $row['page_no'] == 8 || 
            $row['page_no'] == 11 || 
            $row['page_no'] == 12 || 
            $row['page_no'] == 14 || 
            $row['page_no'] == 17 || 
            $row['page_no'] == 18 || 
            $row['page_no'] == 21 || 
            $row['page_no'] == 22 || 
            $row['page_no'] == 26 || 
            $row['page_no'] == 28 || 
            $row['page_no'] == 31 || 
            $row['page_no'] == 34 || 
            $row['page_no'] == 36  
              ){  
         $allstories =  $allstories."
                  pageNo ".$row['page_no']." A: ".$row['sec_a']."\n  
                  pageNo ".$row['page_no']." B: ".$row['sec_b']."\n
                  pageNo ".$row['page_no']." C:".$row['sec_c']."\n ";
           }
     if(
      $row['page_no'] == 9 || 
      $row['page_no'] == 10 || 
      $row['page_no'] == 13 || 
      $row['page_no'] == 15 || 
      $row['page_no'] == 16 || 
      $row['page_no'] == 19 || 
      $row['page_no'] == 20 || 
      $row['page_no'] == 23 || 
      $row['page_no'] == 24 || 
      $row['page_no'] == 25 || 
      $row['page_no'] == 27 || 
      $row['page_no'] == 29 || 
      $row['page_no'] == 30 || 
      $row['page_no'] == 32 || 
      $row['page_no'] == 33 || 
      $row['page_no'] == 35 || 
      $row['page_no'] == 37 || 
      $row['page_no'] == 38 || 
      $row['page_no'] == 39 || 
      $row['page_no'] == 40 || 
      $row['page_no'] == 41    
            ){    
                $allstories =  $allstories."
                pageNo ".$row['page_no']." A: ".$row['sec_a']."\n";
      }
     } //--- end 41 template 


       if($_SESSION['template'] == 61){  //-- start 61 template write  
           if(
            $row['page_no'] == 1 || 
            $row['page_no'] == 2 || 
            $row['page_no'] == 3 || 
            $row['page_no'] == 4 || 
            $row['page_no'] == 5 || 
            $row['page_no'] == 6 || 
            $row['page_no'] == 7 || 
            $row['page_no'] == 8 || 
            $row['page_no'] == 11 || 
            $row['page_no'] == 12 || 
            $row['page_no'] == 14 || 
            $row['page_no'] == 17 || 
            $row['page_no'] == 18 || 
            $row['page_no'] == 21 || 
            $row['page_no'] == 22 || 
            $row['page_no'] == 26 || 
            $row['page_no'] == 28 || 
            $row['page_no'] == 31 || 
            $row['page_no'] == 34 || 
            $row['page_no'] == 36 ||
            $row['page_no'] == 39 ||
            $row['page_no'] == 41 ||
            $row['page_no'] == 42 ||
            $row['page_no'] == 44 ||
            $row['page_no'] == 46 ||
            $row['page_no'] == 48 ||
            $row['page_no'] == 50 ||
            $row['page_no'] == 52 ||
            $row['page_no'] == 55 ||
            $row['page_no'] == 57 
              ){  
         $allstories =  $allstories."
                  pageNo ".$row['page_no']." A: ".$row['sec_a']."\n  
                  pageNo ".$row['page_no']." B: ".$row['sec_b']."\n
                  pageNo ".$row['page_no']." C:".$row['sec_c']."\n ";
           }
     if(
      $row['page_no'] == 9 || 
      $row['page_no'] == 10 || 
      $row['page_no'] == 13 || 
      $row['page_no'] == 15 || 
      $row['page_no'] == 16 || 
      $row['page_no'] == 19 || 
      $row['page_no'] == 20 || 
      $row['page_no'] == 23 || 
      $row['page_no'] == 24 || 
      $row['page_no'] == 25 || 
      $row['page_no'] == 27 || 
      $row['page_no'] == 29 || 
      $row['page_no'] == 30 || 
      $row['page_no'] == 32 || 
      $row['page_no'] == 33 || 
      $row['page_no'] == 35 || 
      $row['page_no'] == 37 || 
      $row['page_no'] == 38 ||  
      $row['page_no'] == 40 || 
      $row['page_no'] == 43 ||    
      $row['page_no'] == 45 ||    
      $row['page_no'] == 47 ||    
      $row['page_no'] == 49 ||    
      $row['page_no'] == 51 ||    
      $row['page_no'] == 53 ||    
      $row['page_no'] == 54 ||    
      $row['page_no'] == 56 ||    
      $row['page_no'] == 58 ||    
      $row['page_no'] == 59 ||    
      $row['page_no'] == 60 ||    
      $row['page_no'] == 61    
            ){    
                $allstories =  $allstories."
                pageNo ".$row['page_no']." A: ".$row['sec_a']."\n";
      }
     } //--- end 61 template 


    }//---ending loop 
   }
 $myfile = fopen("story.txt", "w") or die("Unable to open file!");

fwrite($myfile, $allstories);

fclose($myfile);
   
   //downloadfile
   header('Location: downloadfile.php');
   ?>

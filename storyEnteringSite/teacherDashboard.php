

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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
  *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    button{
      cursor: pointer;
    }
 main{
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        justify-content: start;
        align-items: center;
   
    }
    nav{
        display: flex;
        width: 100%;
        justify-content: space-around;
        padding: 8px;
        background-color: rgb(198, 200, 202);
    }
    nav button,nav div{
        padding: 4px 8px;
    }

    .header{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-evenly;
        padding: 8px;
        gap: 5px;
        align-items: center;
    }
    header section{
       
        display: flex;
        flex-direction: column;
        padding: 8px;
        gap: 5px;
        border: 1px solid #aaaaaa;
    }
   textarea{
    padding: 8px;
   }
   section input{
    padding: 8px;
   }
   footer{
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-width: 300px;
   }
   footer div, footer button{
    padding: 8px;
   }
   .buttoncontainer{
    display: flex;
    justify-content: space-between;
   
    border: 1px solid #aaaaaa;
   }
   .buttoncontainer div{
    display: flex;
    flex-direction: column;
    padding:4px;
   }
   .buttoncontainer div div{
    width: 30px;
    height: 30px;
    border: 1px solid #aaaaaa;
    border-radius: 50%;
    cursor: pointer;
   }
   .btn-left{ border-right: 1px solid #aaaaaa;}
   .btn-right{ border-left: 1px solid #aaaaaa;}
   .output{
    width: 100%;
    border: 1px solid #aaaaaa;
    min-height:50px ;
   }
   p{
    display:none;
   }
   .SectionA{
    padding:8px;
   }
    </style>
     
    <title>Teacher Dashboard</title>
</head>
<body>
    <main>
        <nav>
              
           <a href="writfile.php"><button>Download</button></a>
             </form>
             <div>Template: <span id="Ttemplate"><?php echo $_SESSION['template']; ?></span></div>
             <div> <span id="Tname"><?php echo $_SESSION['name']; ?><span></div>
            <div> Techer Dashboard </div>
            <a href="teacherlogout.php"><button> logout </button></a>
        </nav>

        <header class="header">
        <?php   
             $teachercurrentTable  = $_SESSION['tablename'];
            /* $teachercurrentTable." <br>";
             $_SESSION['name']."<br>" ; 
            $_SESSION['id']."<br>" ;
             $_SESSION['tablename']."<br>";
              $_SESSION['template']."<br>";
          $continuepage = " 1, 2, 3, 4, 5, 6, 7, 8, 9, 10" ;
          $engingpage = "11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 " ;
*/
                $totalpages = "0";
                $sqls = "SELECT * FROM $teachercurrentTable";
                $result = $conn->query($sqls);              
            if ($result->num_rows > 0) {
            // output data of each row
             $totalpages = $result->num_rows;
            while($row = $result->fetch_assoc()) {
       //21 template showed
         if($_SESSION['template'] == 21)
         {
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
             echo"
             <section class='allContainer' id='p".$row['page_no']."'  >
               <div class='output SectionA'>".$row['sec_a']." </div>
                <header class=' buttoncontainer'>
                    <div class='output SectionB'>".$row['sec_b']."</div>
                    <div class='output  SectionC'>".$row['sec_c']."</div>
                </header>
               <header class='buttoncontainer'>
                <div class='btn-left'>
                     <div onclick='leftfx(".$row['page_no'].")' class='buttonDiv'></div>
                     <p>End</p>
                </div>
                <div class='btn-right'>
                     <div onclick='rightfx(".$row['page_no'].")' class='buttonDiv'></div>
                     <p>End</p>
                </div>
              </header>
               <footer>
                 <button onclick='beginning(0)' >Begining</button>
                    <form action='updateThreeSection.php' method='post'>
                        <input type='hidden' name='threepageno' value='".$row['page_no']."'>
                        <input type='submit' name='threesection' value='Edit'>
                    </form>
                 <div>Page No:<span class='pageNoC'>".$row['page_no']."</span></div>
               </footer> 
           </section>
           ";
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
  echo "
           <section class='allContainer' id='p".$row['page_no']."' >
            <div class='output SectionA'>".$row['sec_a']."</div>  
            <footer>
              <button onclick='beginning(0)' >Begining</button>
          <form action='updateOneSection.php' method='post'>
              <input type='hidden' name='threepageno' value='".$row['page_no']."'>
              <input type='submit' name='threesection' value='Edit'>
          </form>
              <div>Page No:<span class='pageNoC'> ".$row['page_no']."<span></div>
            </footer> 
        </section>
        ";
      }
    } //end 21 template 
    // 41 template showed
    if($_SESSION['template'] == 41)
    {
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
        echo"
        <section class='allContainer' id='p".$row['page_no']."'  >
          <div class='output SectionA'>".$row['sec_a']." </div>
           <header class=' buttoncontainer'>
               <div class='output SectionB'>".$row['sec_b']."</div>
               <div class='output  SectionC'>".$row['sec_c']."</div>
           </header>
          <header class='buttoncontainer'>
           <div class='btn-left'>
                <div onclick='leftfx(".$row['page_no'].")' class='buttonDiv'></div>
                <p>End</p>
           </div>
           <div class='btn-right'>
                <div onclick='rightfx(".$row['page_no'].")' class='buttonDiv'></div>
                <p>End</p>
           </div>
         </header>
          <footer>
            <button onclick='beginning(0)' >Begining</button>
        <form action='updateThreeSection.php' method='post'>
            <input type='hidden' name='threepageno' value='".$row['page_no']."'>
            <input type='submit' name='threesection' value='Edit'>
        </form>
            <div>Page No:<span class='pageNoC'>".$row['page_no']."</span></div>
          </footer> 
      </section>
      ";
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
echo "
      <section class='allContainer' id='p".$row['page_no']."' >
       <div class='output SectionA'>".$row['sec_a']."</div>  
       <footer>
         <button onclick='beginning(0)' >Begining</button>
    <form action='updateOneSection.php' method='post'>
         <input type='hidden' name='threepageno' value='".$row['page_no']."'>
         <input type='submit' name='threesection' value='Edit'>
     </form>
         <div>Page No:<span class='pageNoC'> ".$row['page_no']."<span></div>
       </footer> 
   </section>
   ";
 }
} //engin 41 template 
    // 61 template showed
    if($_SESSION['template'] == 61)
    {
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
        echo"
        <section class='allContainer' id='p".$row['page_no']."'  >
          <div class='output SectionA'>".$row['sec_a']." </div>
           <header class=' buttoncontainer'>
               <div class='output SectionB'>".$row['sec_b']."</div>
               <div class='output  SectionC'>".$row['sec_c']."</div>
           </header>
          <header class='buttoncontainer'>
           <div class='btn-left'>
                <div onclick='leftfx(".$row['page_no'].")' class='buttonDiv'></div>
                <p>End</p>
           </div>
           <div class='btn-right'>
                <div onclick='rightfx(".$row['page_no'].")' class='buttonDiv'></div>
                <p>End</p>
           </div>
         </header>
          <footer>
            <button onclick='beginning(0)' >Begining</button>
         <form action='updateThreeSection.php' method='post'>
            <input type='hidden' name='threepageno' value='".$row['page_no']."'>
            <input type='submit' name='threesection' value='Edit'>
        </form>
            <div>Page No:<span class='pageNoC'>".$row['page_no']."</span></div>
          </footer> 
      </section>
      ";
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
echo "
      <section class='allContainer' id='p".$row['page_no']."' >
       <div class='output SectionA'>".$row['sec_a']."</div>  
       <footer>
         <button onclick='beginning(0)' >Begining</button>
      <form action='updateOneSection.php' method='post'>
         <input type='hidden' name='threepageno' value='".$row['page_no']."'>
         <input type='submit' name='threesection' value='Edit'>
     </form>
         <div>Page No:<span class='pageNoC'> ".$row['page_no']."<span></div>
       </footer> 
   </section>
   ";
 }
} //engin 61 template 
    
     }//ending loop
   } ?>
    <?php   
                $sqls = "SELECT * FROM charcontrol";
                $result = $conn->query($sqls);              
            if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
              ?>
           
           <form action="storyinsert1.php" method="post">
             <section class='allContainer form1'>
                  <textarea style="width: 100%;" name="section_A"  placeholder="Section A" maxlength="<?php echo $row['s_a'] ?>"></textarea>
                  <div>
                    <textarea name="section_B"  placeholder="Section B " maxlength="<?php echo $row['s_b'] ?>"></textarea>
                    <textarea name="section_C"  placeholder="Section C " maxlength="<?php echo $row['s_c'] ?>"></textarea>
                  </div>
                  <header class="buttoncontainer">
                    <div class="btn-left">
                         <div onclick='beginning(1)' class="buttonDiv"></div>
                         <p>End</p>
                    </div>
                       <p id="totalpages"><?php echo $totalpages ?></p>
                    <div class="btn-right">
                         <div onclick='beginning(1)' class="buttonDiv"></div>
                         <p>End</p>
                    </div>
                  </header>
                   <footer>
                     <button onclick='beginning(1)' >Begining</button>
                     <input type="hidden" id="form1pageinput" name="pageno" value="">
                     <input type="submit" name="story" value="Save">
                     <div >Page No: <span  id="form1pageselect"></span></div>
                   </footer> 
             </section>
           </form>  


        <form action="storyinsert2.php" method="post">
          <section class='allContainer form2'>
               <textarea style="width: 100%;" name="section_A"  placeholder="Section A" maxlength="<?php echo $row['s_e'] ?>"></textarea>

                <footer>
                  <button onclick='beginning(1)' >Begining</button>
                  <input type="hidden" id="form2pageinput" name="pageno" value="" >
                  <input type="submit" name="storyend" value="Save">
                  <div>Page No: <span  id="form2pageselect"></span></div>
                </footer> 
          </section>
        </form> 
      <?php  }} ?>   
       </header>
  
    </main>
    <script src="./script.js"></script>

</body>
</html>
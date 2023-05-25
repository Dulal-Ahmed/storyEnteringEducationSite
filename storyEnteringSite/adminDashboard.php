

   <?php
            // We need to use sessions, so you should always start sessions using the below code.
        session_start();
        // If the user is not logged in redirect to the login page...
        if (!isset($_SESSION['loggedin'])) {
            header('Location: admin.php');
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
    header{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        padding: 8px;
        gap: 5px;
    }
    .left div{
        display: flex;
        flex-direction: column;
        border: 1px solid #aaaaaa;
        padding: 8px;
        gap: 10px;
    }
    .left div input{
        padding: 6px;
    }
    tr, th,td{
        padding: 8px;
    }
    td,th{
        border: 1px solid #aaaaaa;
    }
    table{
        border: 1px solid #aaaaaa;
        padding: 8px;
    }
    </style>
    <title>Admin Dashboard</title>
</head>
<body>

    <main>
        <nav>
            <div> Michal </div>
            <div> Admin Dashboard </div>
            <a href="logout.php"><button> logout </button></a>
        </nav>
       <header>
          <section class="left">
            <form action="createTeacher.php" method="post">
                <div>
                    <input type="text" name="teacher_name" placeholder="Teacher Name">
                    <input type="text" name="teacher_pass" placeholder="Teacher password">
                    <input type="hidden" name="tablename" value="t<?php echo uniqid(); ?>">
                    <p>Select template</p>
                    <section class="radioContainer">
                        <input type="radio" name="template"  value="21"><label for="t21">21</label>
                        <input type="radio" name="template"  value="41"><label for="t41">41</label>
                        <input type="radio" name="template"  value="61"><label for="t61">61</label>
                    </section>
                    <input type="submit" name="teacher" value="Save">
                </div>
            </form>

            <div class="charControl">
             <form action="updateCharControl.php" method="post">
             <?php   
                $sqls = "SELECT * FROM charcontrol";
                $result = $conn->query($sqls);              
            if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
              ?>
           
 
             <div class="titletop"><b> Section charecters limit Controle</b></div>
                 <div class="slidecontainer">
                    <p>Section A Max Char: <span id="oa"></span></p>
                    <input type="number" name='s_a' min="1" max="500" value="<?php echo $row['s_a'] ?>" class="slider" id="ia">        
                </div>
                 <div class="slidecontainer">
                    <p>Section B Max Char: <span id="ob"></span></p>
                    <input type="number" name='s_b' min="1" max="500" value="<?php echo $row['s_b'] ?>" class="slider" id="ib">        
                </div>
                 <div class="slidecontainer">
                    <p>Section C Max Char: <span id="oc"></span></p>
                    <input type="number" name='s_c' min="1" max="500" value="<?php echo $row['s_c'] ?>" class="slider" id="ic">        
                </div>
                 <div class="slidecontainer">
                    <p> End Page Max Char: <span id="oe"></span></p>
                    <input type="number" name='s_e' min="1" max="500" value="<?php echo $row['s_e'] ?>" class="slider" id="ie">        
                </div>
                </div>
                 <div>
                 <input type="hidden" name='id' value="<?php echo $row['id'] ?>">
                 <input type="submit" name="charecter" value='save'>
                 </div>
             <?php  }} ?>
             </form>
          </section>
          <section class="right">
             <table>
                 <tr>
                
                    <th>Name</th>
                    <th>Password</th>
                    <th>template</th>
                    <th>TableName</th>
                    <th>Remove</th>
                   
                 </tr>
                 
  <?php   
                $sqls = "SELECT * FROM teachers";
                $result = $conn->query($sqls);              
            if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
             echo"  
             <form action='deleteTeacher.php' method='post'>
             <tr>

             <td>".$row['teacher_name']."</td>
              <td>".$row['teacher_pass']."</td>
              <td>".$row['template']."</td>
              <input type='hidden' name='tablename' value='".$row['tablename']."'>
              <td>".$row['tablename']."</td>
              <input type='hidden' name='id' value='".$row['id']."'>
              <td> <input type='submit' name='tdelete' value=' delete ' ></td>
              </tr>   </form>    ";
            }}
   ?>
              
                 
             </table>
          </section>
       </header>
    </main>
    <script>
let oa = document.querySelector('#oa');
let ob = document.querySelector('#ob');
let oc = document.querySelector('#oc');
let oe = document.querySelector('#oe'); 
let ia = document.querySelector('#ia'); 
let ib = document.querySelector('#ib'); 
let ic = document.querySelector('#ic'); 
let ie = document.querySelector('#ie'); 

oa.innerHTML = ia.value;
ob.innerHTML = ib.value;
oc.innerHTML = ic.value;
oe.innerHTML = ie.value;

ia.oninput = function() {  oa.innerHTML = this.value;}
ib.oninput = function() {  ob.innerHTML = this.value;}
ic.oninput = function() {  oc.innerHTML = this.value;}
ie.oninput = function() {  oe.innerHTML = this.value;}
    </script>
</body>
</html>
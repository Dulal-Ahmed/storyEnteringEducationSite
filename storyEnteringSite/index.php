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
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
       
      
    }
    header{
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 16px;
        border: 1px solid #706f6f;
        background-color: #cfcccc;
    }
    input{
        padding: 8px 16px;
    }
    a{
            text-decoration: none;
            color: white;
            background-color: gray;
            border: 1px solid #413f3f;
            padding: 8px 16px;
            font-size: 20px;
            position: fixed; 
            top: 10px;
            left: 5%;
        }
   </style>
    <title>Teacher Login</title>
</head>
<body>
  <a href="admin.php">Admin Login</a>
  <main>
    <form action="teacher_auth.php" method="post">
      <header>     
            <label for="teacherName">Teacher Name</label>
            <input require id="teacherName" name="teacherName" placeholder="Teacher Name" type="text" required>
            <label for="pass">Password</label>
            <input id="pass" type="password" name="teacherPassword" placeholder="Teacher Password"  required>
            <input type="submit" name="teacherLogin" value="Login">      
      </header>
    </form>
  </main>  
</body>
</html>
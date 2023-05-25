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
    <title>Adminlogon</title>
</head>
<body>
<a href="index.php">Teacher</a>
  <main>
    <form action="admin_auth.php" method="post">
      <header>     
            <label for="adminName">Admin Name</label>
            <input id="adminName" name="adminName" placeholder="Admin name" type="text">
            <label for="pass">Password</label>
            <input id="pass" name="adminPassword" placeholder="adminPassword" type="password">
            <input type="submit" name="adminLogin" value="Login">
        
      </header>
    </form>
  </main>  
</body>
</html>
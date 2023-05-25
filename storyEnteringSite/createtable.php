 
 <?php
 include "connect.php"; 

 /*
 $sql = "CREATE TABLE IF NOT EXISTS `charcontrol` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
  	`s_a` int(6) NOT NULL,
  	`s_b` int(6) NOT NULL,
  	`s_c` int(6) NOT NULL,
  	`s_e` int(6) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8";

if ($conn->query($sql) === TRUE) {
    echo "Table createtable table created successfully";
  } else {
    echo "Error creating table: " . $conn->error;
  }
  */
/*
//---create admin table
 $sql = "CREATE TABLE IF NOT EXISTS `admin_st` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
  	`user_name` varchar(50) NOT NULL,
  	`password` varchar(255) NOT NULL,
  	`email` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8";

if ($conn->query($sql) === TRUE) {
    echo "Table admin table created successfully";
  } else {
    echo "Error creating table: " . $conn->error;
  }
*/


 /*
//----Create teacherTable
 $sql = "CREATE TABLE IF NOT EXISTS `teachers` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
  	`teacher_name` varchar(400) NOT NULL,
  	`teacher_pass` varchar(255) NOT NULL,
  	`tablename` varchar(255) NOT NULL,
  	`template` int(6) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8";

if ($conn->query($sql) === TRUE) {
    echo "Table teachers created successfully";
  } else {
    echo "Error creating table: " . $conn->error;
  }
*/


/*
include "connenct.php";  
// strory_tree Deatails table creator


 $sql = "CREATE TABLE IF NOT EXISTS `story_details` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
  	`strory_writer` varchar(100) NOT NULL,
  	`story_name` varchar(255) NOT NULL,
  	`story_number` int(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8";

if ($conn->query($sql) === TRUE) {
    echo "Table story_tree created successfully";
  } else {
    echo "Error creating table: " . $conn->error;
  }



//user_details


 $sql = "CREATE TABLE IF NOT EXISTS `user_details` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
  	`user_name` varchar(50) NOT NULL,
  	`password` varchar(255) NOT NULL,
  	`email` varchar(100) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8";

if ($conn->query($sql) === TRUE) {
    echo "Table user_details created successfully";
  } else {
    echo "Error creating table: " . $conn->error;
  }




//-- stroy_tree Table cereator 

$sql = "CREATE TABLE IF NOT EXISTS `story_tree` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`page_no` int(11) NOT NULL ,
	`story_number` int(11) NOT NULL ,
  	`sec_a` varchar(1000) NOT NULL,
  	`sec_b` varchar(500) NOT NULL,
  	`sec_c` varchar(500) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8";

if ($conn->query($sql) === TRUE) {
    echo "Table user_details created successfully";
  } else {
    echo "Error creating table: " . $conn->error;
  }


*/

?>

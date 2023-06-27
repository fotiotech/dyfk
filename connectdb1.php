<?php

   if (isset($_POST['name'])) $Firstname = $_POST['name'];
   else $Firstname = "(Not entered)";
   echo 'logged in successfully';

   if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $Firstname = test_input($_POST["name"]);
      $email = test_input($_POST["email"]);
      $website = test_input($_POST["website"]);
      $comment = test_input($_POST["comment"]);
      $gender = test_input($_POST["gender"]);
    }
    
    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
    // define variables and set to empty values
    $nameErr = $emailErr = $genderErr = $websiteErr = "";
    //$name = $email = $gender = $comment = $website = "";
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      if (empty($_POST["name"])) {
        $nameErr = "Name is required";
      } else {
        $Firstname = test_input($_POST["name"]);
      }
    
      if (empty($_POST["email"])) {
        $emailErr = "Email is required";
      } else {
        $email = test_input($_POST["email"]);
      }
    
      if (empty($_POST["website"])) {
        $website = "";
      } else {
        $website = test_input($_POST["website"]);
      }
    
      if (empty($_POST["comment"])) {
        $comment = "";
      } else {
        $comment = test_input($_POST["comment"]);
      }
    
      if (empty($_POST["gender"])) {
        $genderErr = "Gender is required";
      } else {
        $gender = test_input($_POST["gender"]);
      }
    }
    
    
    
    
    
    

   $Sname = "localhost";
   $Uname = "fotio dilane";
   $pwrd = "fotio,7D0";
   $db = "dilane fotio";

   $conn = new mysqli ($Sname, $Uname, $pwrd, $db);
   if ($conn->connect_error){
      die("connection failed :" .$conn->connect_error);
   }
   //echo "connected successfully";


   $sql = "INSERT INTO fotio (CustumerID, CustumerName) values (2,'$Firstname')";

   if ($conn->query($sql) === TRUE) {
     // echo "New record created successfully";
   } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
   }

   $conn->close();

?>


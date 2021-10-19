<br>
<div class="container">
  <form action="addcustomer.php" method="post">
    <div class="form-group">
      <label for="firstname">firstname:</label>
      <input type="firstname" name="firstname" class="form-control" id="firstname">
    </div>
    <div class="form-group">
      <label for="lastname">lastname:</label>
      <input type="lastname" name="lastname" class="form-control" id="lastname">
    </div>
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" name="email" class="form-control" id="email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" name="password" class="form-control" id="pwd">
    </div>
    <div class="checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button type="submit" name="form_submit" class="btn btn-success">Submit</button>
  </form>
</div>

<?php
    include_once 'header.php';

    $servername = "localhost";
    $username = "root";-
    $password = "root";
    $dbname = "php";

    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn) {
        // echo"success";
      if (isset($_POST['form_submit'])) {
        if($fname!='' && $lname!='' && $email!='' && $pass!=''){
            $sql = mysqli_query($conn,"INSERT INTO customer (firstname, lastname, email,password) VALUES ('$fname', '$lname', '$email', '$pass')");
            echo "<script> location.href='index.php'; </script>";
            echo "<div class='alert alert-success'>Record was saved.</div>";
            }
          else{
              echo '<script language="javascript">';
              echo 'alert("Fill All the Field")';
              echo '</script>';
          }
        }
    } 
     else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
?>
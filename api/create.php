<?php
include '../db.php';
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$postdata = json_decode(file_get_contents('php://input'), true);

if(!empty($postdata)){

  $sql = "INSERT INTO user (name, email, phone,website,contact_name,contact_email,contact_phone,notes,type,category,commision_percentage,active_form,critical_account,payment_option) values 
  ('".$postdata['name']."','".$postdata['email']."','".$postdata['phone']."','".$postdata['website']."','".$postdata['contact_name']."','".$postdata['contact_email']."','".$postdata['contact_phone']."','".$postdata['notes']."','".$postdata['type']."','".implode(',',$postdata['category'])."','".$postdata['commision_percentage']."','".$postdata['active_form']."','".$postdata['critical_account']."','".$postdata['payment_option']."')";
  $result = $conn->query($sql);
  
  if ($result) {
    echo 1;exit;
  }
  // echo 0;exit;
} else {
  echo 0;
}


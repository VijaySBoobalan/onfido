<?php
include '../db.php';
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$postdata = json_decode(file_get_contents('php://input'), true);

if(!empty($postdata)){
  $sql = "update user set name = '".$postdata['name']."', email='".$postdata['email']."', phone='".$postdata['phone']."',website='".$postdata['website']."',contact_name='".$postdata['contact_name']."',contact_email='".$postdata['contact_email']."',contact_phone='".$postdata['contact_phone']."',notes='".$postdata['notes']."',type='".$postdata['type']."',category='".implode(',',$postdata['category'])."',commision_percentage='".$postdata['commision_percentage']."',active_form='".$postdata['active_form']."',critical_account='".$postdata['critical_account']."',payment_option='".implode(',',$postdata['payment_option'])."' where id = ".$_GET['id'];
  $result = $conn->query($sql);
  if ($result) {
    echo 1;exit;
  }
  // echo 0;exit;
} else {
  echo 0;
}





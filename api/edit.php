<?php
include '../db.php';
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM user where id = ".$_GET['id'];
$result = $conn->query($sql);

$finalData = array();

if ($result->num_rows > 0) {
  $finalData = $result->fetch_assoc();
  $finalData['category'] = explode(',',$finalData['category']);
  $finalData['payment_option'] = explode(',',$finalData['payment_option']);
}
echo json_encode($finalData);

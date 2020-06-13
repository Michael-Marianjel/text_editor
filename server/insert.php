
<?php
  require_once('./connect.php');

  $templage_name = $_POST['template_name'];
  $contain = $_POST['contain'];
  $sql = "INSERT INTO template (template_name, contain) VALUES ('$templage_name','$contain')";

  if ($conn->query($sql) === true){
    echo "Ok";
  }
  else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
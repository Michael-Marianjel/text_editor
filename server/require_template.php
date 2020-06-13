<?php
  require_once('./connect.php');

  $id = $_GET['id'];
  $sql = "SELECT contain from template WHERE id = '$id'";
  $result = $conn->query($sql);

  $retval = "";
  if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {
      $retval .= $row['contain'];
    }
    echo $retval;
  }
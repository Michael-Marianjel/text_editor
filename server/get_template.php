<?php
  require_once('./connect.php');

  
  $sql = "SELECT * FROM template";
  $result = $conn->query($sql);
  $i = 0;
  $retval = "";
  if ($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
      if($i == 0 )
      {
        $retval .= "<option disabled selected>Choose the template</option>";
        $retval .= "<option value = '".$row['id']."'>".$row['template_name']."</option>";
        $i++;
      }
      else
      {
        $retval .= "<option value = '".$row['id']."'>".$row['template_name']."</option>";
      }
    }
    echo $retval;
  }
  else {
    $retval .= "<option disabled selected>Choose the template</option>";
    echo $retval;
  }
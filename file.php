<?php
if(!empty($_POST['data'])){
$data = $_POST['data'];
$fname = "data.txt";//generates random name

$file = fopen($fname, 'w');//creates new file
fwrite($file, $data);
fclose($file);
}
?>

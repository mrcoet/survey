<?php
require('db_connect.php');

$file = 'creating';

if (file_exists($file)) {
    $handle = fopen($file, 'r');
    $query_create = fread($handle, filesize($file));
    fclose($handle);
}

$statment = $db->prepare($query_create);
$statment->execute();


?>


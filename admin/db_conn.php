<?php

DEFINE('DB_USER', 'marco');
DEFINE('DB_PASSWORD', 'Ye_E.4QsHEec.H8v');

$dns = 'mysql:host=localhost;dbname=survey';


try {
    $db = new PDO($dns, DB_USER, DB_PASSWORD);
} catch (PDOException $e) {
    $err_msg = $e->getMessage();
    echo "error";
    exit();
}
?>

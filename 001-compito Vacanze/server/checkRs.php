<?php
if(!$rs)
{
    $codice = $con->errno;
    $errore = $con->error;
    $con->close();
    http_response_code(500);
    die("Errore query: $codice - $errore");
}
?>

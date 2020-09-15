<?php
    define('DBHOST','localhost');
    define('DBUSER','root');
    define('DBPASS','');
    define('DBNAME','dbautomobili');
    $con=new mysqli(DBHOST,DBUSER,DBPASS,DBNAME);
    if($con->connect_errno)
    {
        $codice=$con->connect_errno;
        $errore=$con->connect_error;
        //nell intestazione della risposta http
        //invio il codice 503(internal server error)
        http_response_code(503);
        die("Errore connessione al database ". DBNAME .": ". $codice ." - ". $errore);
    }
    $con->set_charset("utf-8");
?>

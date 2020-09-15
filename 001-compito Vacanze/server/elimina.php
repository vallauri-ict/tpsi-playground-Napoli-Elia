<?php
header("content-type:text/plain;charset=utf-8");
//verifiche sui parametri
if(!isset($_REQUEST["idAuto"]))
{
    http_response_code(422);
    die("Parametro mancante [idAuto].");
}
//my connetto al db
require("connessione.php");
$idAuto = $con->real_escape_string($_REQUEST["idAuto"]);
if(!is_numeric($idAuto))
{
    $con->close();
    http_response_code(400);
    die("Il parametro idAuto deve essere numerico");
}

//faccio la query
$sql = "DELETE FROM automobili WHERE id=".$idAuto;
$rs = $con->query($sql);
//se non ho errori di query
require("checkRs.php");
//chiudo connessione
$con->close();
?>
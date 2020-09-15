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
$prezzo = $con->real_escape_string($_REQUEST["prezzo"]);
$km = $con->real_escape_string($_REQUEST["km"]);
if(!is_numeric($idAuto)/*||!is_numeric($prezzo)*/||!is_numeric($km))
{
    $con->close();
    http_response_code(400);
    die("Il parametro idAuto, km deve essere numerico");
}

//faccio la query
$sql = "UPDATE automobili SET prezzo=".$prezzo.", km=".$km." WHERE id=".$idAuto;
$rs = $con->query($sql);
//se non ho errori di query
require("checkRs.php");
//chiudo connessione
$con->close();
?>
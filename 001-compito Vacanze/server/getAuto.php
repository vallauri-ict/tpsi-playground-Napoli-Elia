<?php
    header("content-type:text/plain;charset=utf-8");
    //verifiche sui parametri
    if(!isset($_REQUEST["idMarca"]))
    {
        http_response_code(422);
        die("Parametro mancante [idMarca].");
    }
    //my connetto al db
    require("connessione.php");
    $idMarca = $con->real_escape_string($_REQUEST["idMarca"]);
    if(!is_numeric($idMarca))
    {
        $con->close();
        http_response_code(400);
        die("Il parametro idMarca deve essere numerico");
    }

    //faccio la query
    $sql = "SELECT automobili.id as idAutomobili, modelli.nome as nomeModello, modelli.nPorte, ".
        "modelli.cilindrata, automobili.targa, automobili.colore, automobili.anno, automobili.prezzo, automobili.km, automobili.img as immagine ".
        "FROM automobili, modelli WHERE automobili.codModello = modelli.idModello AND ".
        " modelli.codMarca=".$idMarca;
    $rs = $con->query($sql);
    //se non ho errori di query
    require("checkRs.php");
    //prendo i dati dal db
    $dati = mysqli_fetch_all($rs, MYSQLI_ASSOC);
    //codifico i dati da oggetto ritornato dal db a stringa json
    echo json_encode($dati);
    //chiudo connessione
    $con->close();
?>
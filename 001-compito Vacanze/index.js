
//$document.ready()

//onload -> carico banche
$(function(){
    //eseguita automatica al page onload
    var cmbMarche = $("#lstMarche");
    var tabAutomobili = $("#tabAutomobili tbody");


    //fare la richiesta ajax
    let richiestaMarche = inviaRichiesta(
        "server/getMarche.php", "GET", "");

    richiestaMarche.done(function(data){
        //data -> i dati della risposta (dati db)
        console.log(data);
        for(let marca of data)
        {
            $("<option>", {
                "value": marca["idMarca"],
                "text": marca["nome"]
            }).appendTo(cmbMarche);
        }
        cmbMarche.prop("selectedIndex", -1);
    });
    richiestaMarche.fail(error);

    cmbMarche.on("change", function(){
        $("#wrapAutomobili").css("display","none");
        tabAutomobili.html(""); //tolgo eventuali correntisti ad ora caricati
        var idMarca = this.value;
        var richiestaAutomobili = inviaRichiesta(
            'server/getAuto.php', 'POST', "idMarca=" + idMarca);
        richiestaAutomobili.fail(error);
        richiestaAutomobili.done(function(data){
            for(let record of data) {
                //creo le righe della tabella
                var tr = $("<tr>");
                for (let key in record) {
                    var td=$("<td>").css({
                        "text-align":"center",
                        "line-height":"100px"
                    });
                    if(key=="prezzo"||key=="km"){
                        $("<input>",{
                            "type": "text",
                            "id": "txt"+ record["idAutomobili"]+key,
                            "value": record[key]
                        }).appendTo(td);
                    }
                    else if(key=="immagine"){
                        $("<img>",{
                            "src":record[key]
                        }).css({
                            "background-size":"contain",
                            "height":"100px"
                        }).appendTo(td);
                    }
                    else{
                        $(td).prop("innerText",record[key]);
                    }
                    $(td).appendTo(tr);
                }
                $("<td>").append(
                    $("<input>",{
                        "type": "button",
                        "value": "Salva"
                    }).on("click",function(){
                        var salvataggio=inviaRichiesta(
                            'server/salva.php', 'POST', "idAuto=" + record["idAutomobili"]+"&prezzo="+$("#txt"+ record["idAutomobili"]+"prezzo").prop("value")+"&km="+$("#txt"+ record["idAutomobili"]+"km").prop("value"));
                        salvataggio.fail(error);
                        salvataggio.done(function(){
                            alert("Salvataggio Effettuato");
                        });
                    })
                ).appendTo(tr);
                $("<td>").append(
                    $("<input>",{
                        "type": "button",
                        "value": "Elimina"
                    }).on("click",function() {
                        var eliminazione = inviaRichiesta(
                            'server/elimina.php', 'POST', "idAuto=" + record["idAutomobili"]);
                        eliminazione.fail(error);
                        eliminazione.done(function () {
                            alert("Eliminazione Effettuata");
                        });
                    })
                ).appendTo(tr);
                tr.appendTo(tabAutomobili);
            }
            $("#tabAutomobili").DataTable();
            $("#wrapAutomobili").css("display","block");
        });
    });



////scelta la banca -> carico le filiali
//    cmbBanche.on("change", function(){
//
//        $("#wrapCorrentisti").css("display","none");
//        $("#wrapFiliali").css("display","none");
//        cmbFiliali.html(""); //tolgo eventuali filiali ad ora caricate
//        var cBanca = this.value;
//        var richiestaFiliali = inviaRichiesta(
//            'server/elencoFiliali.php', 'POST', "cBanca=" + cBanca);
//        richiestaFiliali.fail(error);
//        richiestaFiliali.done(function(data){
//            for(let record of data)
//            {
//                $("<option>",{
//                    "value": record["cFiliale"],
//                    "text":record["nomeFiliale"]
//                }).appendTo(cmbFiliali);
//            }
//            cmbFiliali.prop("selectedIndex", -1);
//            $("#wrapFiliali").css("display","block");
//        });
//    });
//
//scelta la filiale, dovrò visualizzare i correntisti!

});


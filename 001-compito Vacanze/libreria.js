//farò un metodo che riusiamo sempre per fare chiamate ajax
function inviaRichiesta(url,method,parameters){
    return $.ajax({
        type:method,
        url:url,
        data:parameters,
        dataType:"json",
        contentType:"application/x-www-form-urlencoded;charset=utf-8",
        timeout:4000
    });
}
function error(jqXHR,test_status,string_error){
    //jqXHR = jquery xml http request
    if(jqXHR.status==0){
        alert("SERVER TIMED OUT");
    }
    else{
        alert("SERVER ERROR"+jqXHR.status+"\n"+jqXHR.responseText)
    }
}
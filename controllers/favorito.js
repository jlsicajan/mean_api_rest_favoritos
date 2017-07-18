'use strict'

function prueba(request, response) { //al ponerle el signo de interrogacion le dice que no es obligatorio el parametro

    if(request.params.nombre_parametro){
        var nombre = request.params.nombre_parametro;
    }else{
        var nombre = "no se ha enviado ningun parametro";
    }
    response.status(200).send({
        data: [80, 90, 85],
        texto: "hola mundo con nodejs y express :D",
        parametro: nombre
    });//como es un api rest devolvemos un json
}

module.exports = {
    prueba
};
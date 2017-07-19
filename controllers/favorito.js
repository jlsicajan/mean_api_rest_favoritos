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

function getFavorito(request, response){ //get
    var favorit_id = request.params.id;

    response.status(200).send({data: favorit_id});
}


function getFavoritos(request, response){

}

function saveFavorito(request, response){ //POST
    var params = request.body;

    response.status(200).send({favorito: params});
}

function updateFavorito(request, response){// PUT
    var params = request.body;

    response.status(200).send({
        update: true,
        favorito: params});
}

function deleteFavorito(request, response){ //PUT
    var favorit_id = request.params.id;

    response.status(200).send({
        delete: true,
        data: favorit_id});

}

module.exports = {
    prueba,
    getFavoritos,
    getFavorito,
    saveFavorito,
    updateFavorito,
    deleteFavorito
};
'use strict'

//ya tenemos disponible el objeto del modelo favorito
var favorito_model = require('../models/favorito');

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

    favorito_model.findById(favorit_id, function (err, favorito) {
        if(err){
            response.status(500).send({message: 'Error al consultar la db'});
        }else{
            if(!favorito){
                response.status(404).send({message: 'No se encontro ningun favorito'});
            }else{
                response.status(200).send({favorito: favorito});
            }
        }

    });

//    response.status(200).send({data: favorit_id});
}


function getFavoritos(request, response){
    //primer parametro condiciones, where, etc
    favorito_model.find({}).sort('-_id').exec(function(err, favoritos){
        if(err){
            response.status(500).send({message: 'Error al consultar la db'});
        }else{
            if(!favoritos){
                response.status(404).send({message: 'No se encontraron favoritos'});
            }else{
                response.status(200).send({favoritos: favoritos});
            }
        }

    });
}

function saveFavorito(request, response){ //POST
    var favorito = new favorito_model();

    var params = request.body;
    // asignamos cada valor por lo que nos han enviado por POST
    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    favorito.save(function(err, favsaved){
        if(err){
            //500 error en el servidor
            response.status(500).send({message: 'Error al guardar el favorito'});
        }else{
            response.status(200).send({favorito: favsaved});
        }
    });

   // response.status(200).send({favorito: params});
}

function updateFavorito(request, response){// PUT
    var update = request.body;
    var favorit_id = request.params.id;

    favorito_model.findByIdAndUpdate(favorit_id, update, function(err, favorito_updated){
        if(err){
            //500 error en el servidor
            response.status(500).send({message: 'Error al actualizar el favorito'});
        }else{
            response.status(200).send({
                update: true,
                favorito: update});
        }
    });

}

function deleteFavorito(request, response){ //PUT
    var favorit_id = request.params.id;

    favorito_model.findById(favorit_id, function (err, favorito) {
        if(err){
            response.status(500).send({message: 'Error al consultar la db'});
        }else{
            if(!favorito){
                response.status(404).send({message: 'No se encontro ningun favorito'});
            }else {
                favorito.remove(function(err){
                    if(err){
                        response.status(500).send({message: 'El favorito no se ha borrado'});
                    }else{
                        response.status(200).send({message: "El favorito se ha eliminado"});
                    }
                });
            }
        }

    });
}

module.exports = {
    prueba,
    getFavoritos,
    getFavorito,
    saveFavorito,
    updateFavorito,
    deleteFavorito
};
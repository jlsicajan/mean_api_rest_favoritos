'use strict'

var express = require('express'); //hacer import de un paquete
var body_parser = require('body-parser'); // por body parser podemos recibir parametros en la URL


var app = express(); //esto llama a express
var port = process.env.PORT || 3678

app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

app.get('/prueba/:nombre_parametro?', function(request, response){ //al ponerle el signo de interrogacion le dice que no es obligatorio el parametro

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
});

app.listen(port, function(){
    console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);//el callback lo que devuelve para comprobar si funciona
    console.log("se reinica solo, es un demonio que se mantiene escuchado");
}); //utilizamos el puerto 3678, nuestro backend va a escuchar por 3678
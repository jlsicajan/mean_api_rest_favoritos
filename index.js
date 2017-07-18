'use strict'

var express = require('express'); //hacer import de un paquete
var body_parser = require('body-parser');


var app = express(); //esto llama a express
var port = process.env.PORT || 3678

app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

app.listen(port, function(){
    console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);//el callback lo que devuelve para comprobar si funciona
    console.log("se reinica solo, es un demonio que se mantiene escuchado");
}); //utilizamos el puerto 3678, nuestro backend va a escuchar por 3678
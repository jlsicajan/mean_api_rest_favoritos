'use strict'

var express = require('express'); //hacer import de un paquete

var app = express(); //esto llama a express

app.listen(3678, function(){
    console.log('API REST FAVORITOS funcionando en http://localhost:3678');//el callback lo que devuelve para comprobar si funciona
}); //utilizamos el puerto 3678, nuestro backend va a escuchar por 3678
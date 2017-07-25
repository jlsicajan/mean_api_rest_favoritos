//dentro de esto ira la configuracion de express, etc
'use strict'

var express = require('express'); //hacer import de un paquete
var body_parser = require('body-parser'); // por body parser podemos recibir parametros en la URL

var port = process.env.PORT || 3678

var app = express(); //esto llama a express
var api = require('./routes/favorito');

app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

//aqui vamos a crear un middleware para evitar errores con el PUT y el DELETE
app.use(function(request, response, next){
//vamos a configurar los headers, postman ya te los configura automaticamente
    //le decimos que cualquiera puede hacer peticiones a nuestro api rest, si quisieramos
    //que solo se hicieran peticiones desde un dominio concreto, lo ponemos en el asterisco
    request.header('Access-Control-Allow-Origin', '*')
    //ahora configuramos los headers que le pueden llegar
    request.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    //vamos a configurar los metodos http que pueden utilizarse en el api
    request.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    //allow
    request.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next(); //para que se salga de esta funcion
    //esto nos da la posibilidad de utlilizar put delete en nuestras peticiones
});

app.use('/api', api);

module.exports = app; //de esta forma podemos exporta este objeto
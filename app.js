//dentro de esto ira la configuracion de express, etc
'use strict'

var express = require('express'); //hacer import de un paquete
var body_parser = require('body-parser'); // por body parser podemos recibir parametros en la URL

var port = process.env.PORT || 3678

var app = express(); //esto llama a express
var api = require('./routes/favorito');

app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());
app.use('/api', api);

module.exports = app; //de esta forma podemos exporta este objeto
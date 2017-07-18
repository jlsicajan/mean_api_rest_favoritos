'use strict' // para poder utilizar nuevas funcionalidades de js

var express = require('express');
var favorito_controller = require('../controllers/favorito'); // igual para poder utilizarlo hay que hacer un export del lado del controlador

var api = express.Router();

//funcion de tipo flecha (request, response) => {
api.get('/prueba/:nombre_parametro?', favorito_controller.prueba);

module.exports = api;
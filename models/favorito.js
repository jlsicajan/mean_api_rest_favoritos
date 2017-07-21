'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var favorito_schema = schema({
    title: String,
    description: String,
    url: String
});

//cuando hagamos una instancia de este modelo, estaremos creando un nuevo json
module.exports = mongoose.model('Favorito', favorito_schema);
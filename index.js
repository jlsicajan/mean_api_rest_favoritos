'use strict'


//cargar mongoose
var mongoose = require('mongoose');

//ahora para  jalar lo que tenemos en app.js
var app = require('./app.js');
var port = process.env.PORT || 3678

// url de mongo de base de datos alojada, funcion de callback
//curos_favoritos es el nombre de la base de datos
mongoose.createConnection('mongodb://localhost:27017/curso_favoritos', function(err, response){

    if(err){
        throw err;
    }else{
        console.log('conexion a mongodb establecida');
        //cuando ya nos hayamos conectado a la base de datos se va a cargar el servidor
        app.listen(port, function(){
            console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);//el callback lo que devuelve para comprobar si funciona
            console.log("todo funciona, el demonio se mantiene escuchando");
        }); //utilizamos el puerto 3678, nuestro backend va a escuchar por 3678

    }

});
'use strict'
//ahora para  jalar lo que tenemos en app.js
var app = require('./app.js');

var port = process.env.PORT || 3678

app.listen(port, function(){
    console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);//el callback lo que devuelve para comprobar si funciona
    console.log("todo funciona, el demonio se mantiene escuchando");
}); //utilizamos el puerto 3678, nuestro backend va a escuchar por 3678
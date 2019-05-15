// Requires Librerias
var express = require('express');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

// conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos:\x1b[32m%s\x1b[0m', ' online');
});

// importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');

// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);

// Escuchar peticion
app.listen(3000, () => {
    console.log('Express server puerto 3000:\x1b[32m%s\x1b[0m', ' online');
});
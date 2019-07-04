//require
require('./config/config');
var express = require('express');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');

//inicializando variables
var app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Importar rutas
var appRoutes = require('./Routes/app');

//CORS: compatibilidad entre servidor para peticiones http
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS")
  next();
});

//Escuchando servidor
app.listen(process.env.PORT,()=>{
    console.log(`Escuchando el puerto ${process.env.PORT}: \x1b[32m%s\x1b[0m`, 'online');
});

//Conectando con la base de datos
const sequelize = new Sequelize(process.env.BASENAME_DB, process.env.USER_DB , process.env.PASS_DB , JSON.parse(process.env.URLDB));

//Autenticando conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log(`Base de datos en el puerto: ${1433} \x1b[36m%s\x1b[0m`,'online'))
  .catch(err => console.error('Error en la conexión a la base de datos: ', err));

//middleware rutas
app.use('/',appRoutes);

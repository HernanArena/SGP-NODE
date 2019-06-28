//Express
const express = require('express');
var app = express();

// create application/json parser
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Sequelize
const Sequelize = require('sequelize');

//Peticiones http
app.get('/',(req,res,next)=>{
  res.status(200).json({
    ok: true,
    message: 'Peticion realizada correctamente'
  });
});

//Escuchando servidor
app.listen(3000,()=>{
    console.log(`Escuchando el puerto 3000: \x1b[32m%s\x1b[0m`, 'online');
});


const sequelize = new Sequelize('cwSGDesarrolloSP', 'admindam', '#9ZDPWvaS8us', {
  host: 'SARDDBB',
  dialect: 'mssql',
  port: '1433',
  dialectOptions: {
      instanceName: "DESAMED"
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

var express = require('express');
var jwt = require('jsonwebtoken');

// var mdAuthentication = require('../Middlewares/authentication');
var app = express();
var Sprmvh = require('../models/sprmvh');
var Sprmvi = require('../models/sprmvi');
//=============================================
// Obtener Partes
//=============================================
app.get('/',(req, res, next)=> {
  var desde = req.query.desde || 0;
  desde = Number(desde);

  Parte.find({},'')
  .skip(desde)
  .limit(5)
  .populate('usuario','nombre email')
  .populate('hospital')
  .exec(
      (err, medico ) => {
      if (err) {
       return res.status(500).json({
          ok: false,
          mensaje: 'Error cargando Medicos',
          errors: err
        });
      } else {
        Medico.count({},(err, contador) =>{
          res.status(200).json({
             ok: true,
             medico: medico,
             total: contador
           });
        });
      }
    });
});

//=============================================
// Semilla: para la creacion del nombre del archivo imagen
//=============================================
module.exports.SEED = '@este-@es-@un-@seed-@dificil';
//=============================================
// d
//=============================================
module.exports.CLIENT_ID = '1052206159422-5dots42vcnqse9p1ld4nikmf0fa57brd.apps.googleusercontent.com';
//=============================================
// Puerto
//=============================================
process.env.PORT = process.env.PORT || 3000
//=============================================
// Entorno
//=============================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//=============================================
// Base de datos : acceso
//=============================================
process.env.USER_DB = process.env.USER_DB || 'admindam';
process.env.PASS_DB = process.env.PASS_DB || '#9ZDPWvaS8us';
process.env.BASENAME_DB = process.env.BASENAME_DB || 'cwSGDesarrolloSP';
//=============================================
// Base de datos : configuracion
//=============================================
let urlDB;
if(process.env.NODE_ENV ==='dev'){
  urlDB = {
            "host": "SARDDBB",
            "dialect": "mssql",
            "port": "1433",
            "dialectOptions": {
                "instanceName": "DESAMED"
            }
          };
}else{
  urlDB = process.env.MSSQL_URI ;
}
process.env.URLDB = JSON.stringify(urlDB);

const express         = require('express');
const app             = express();
const rotasController = require('../controllers/registro-controller');
    
    //Rotas da aplicação crud-basico
    app.use('/',rotasController.default);
    app.use('/crud_basico',rotasController.crud_basico);
    app.use('/crud_basico/teste/:id',rotasController.crud_basico);
    //Final

    


module.exports = app;
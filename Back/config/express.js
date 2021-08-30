const express = require('express');
const bodyParser = require("body-parser");

const routerAlunos = require("../app/routes/alunos");
const routerAtividades = require("../app/routes/atividades");
const routerCategorias = require("../app/routes/categorias");

module.exports = function(){
    let app = express();

    app.set("port", 8393);
    app.use(express.static("./public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : false }));

    routerAlunos(app);
    routerCategorias(app);
    routerAtividades(app);

    return app;
};
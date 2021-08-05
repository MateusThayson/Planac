const express = require('express');
const routerAlunos = require("./app/routes/alunos") 
const routerAtividades = require("./app/routes/atividades")

module.exports = function(){
    let app = express();

    app.set("port", 8393);
    app.use(express.static("./public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended : false }));

    routerAlunos(app);
    routerAtividades(app);
  
    return app;
};
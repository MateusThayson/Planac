const express = require('express');

 

module.exports = function(){
    let app = express();

    app.set("port", 8393);
    app.use(express.static("./public"));

    app.get("/alunos", function(req, res){

    });
  
  
    return app;
};
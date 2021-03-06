const controller = require("../controllers/alunos")
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.post("/alunos", controller.cadastrarAluno); 
    app.post("/login", controllerAuth.logar);
    app.put("/alunos/:id", controller.editarAluno);    
}
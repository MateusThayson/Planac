const controller = require("../controllers/alunos")
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.post("/alunos", controller.inserirAluno); 
    app.post("/usuarios/signin", controllerAuth.logar);

    app.use("/usuarios", controllerAuth.checar);

}
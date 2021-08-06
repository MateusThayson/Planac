const controller = require("../controllers/alunos")
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.post("/planac/alunos", controller.cadastrarAluno); 
    app.post("/planac/alunos/signin", controllerAuth.logar);

    // app.use("/alunos", controllerAuth.checar);
    app.get("/planac/alunos/:id", controller.buscarAlunoPorMatricula);

}
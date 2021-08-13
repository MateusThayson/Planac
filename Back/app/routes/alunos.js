const controller = require("../controllers/alunos")
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.post("/planac/alunos", controller.cadastrarAluno); 
    app.post("/planac/alunos/signin", controllerAuth.logar);
    app.get("/planac/listaalunos", controller.listarAlunos);
    app.put("/planac/alunos/:id", controller.editarAluno);
    app.delete("/planac/alunos/:id", controller.excluirAluno);
    
    app.use("/planac/alunos", controllerAuth.checar);

    app.get("/planac/alunos", controller.buscarAlunoLogado);    
    app.get("/planac/alunos/:id", controller.buscarAlunoPorId);
}
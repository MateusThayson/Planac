const controller = require("../controllers/atividades");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.use("/planac/atividades", controllerAuth.checar);
    app.post("/planac/atividades", controller.planejarAtividade);
    app.use("/planac/atividades", controllerAuth.checar);
    app.get("/planac/atividades", controller.listarAtividadeDoAluno);
    app.get("/planac/atividades/:id", controller.listarAtividadePorId);
    app.delete("/planac/atividades/:id", controller.excluirAtividade);
}
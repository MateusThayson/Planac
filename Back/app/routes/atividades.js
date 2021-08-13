const controller = require("../controllers/atividades");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.use("/planac/atividades", controllerAuth.checar);

    app.post("/planac/atividades", controller.planejarAtividade);
    app.post("/planac/atividadepelonome", controller.buscarAtividadePorNome);
    // app.get("/planac/atividades", controller.listarAtividadesDoAluno);
    // app.get("/planac/atividades/:id", controller.buscarAtividadePorId);
    app.get("/planac/atividadescadastradas", controller.listarAtividadesCadastradas);
    app.get("/planac/atividadescadastradasporcategoria", controller.listarAtividadesCadastradasPorCategoria);
    app.get("/planac/atividadescomcomprovante", controller.listarAtividadesComComprovante);
    app.get("/planac/atividadessemcomprovante", controller.listarAtividadesSemComprovante);
    app.put("/planac/atividades/:id", controller.editarAtividade);
    app.put("/planac/atividadescomprovante/:id", controller.adicionarComprovante);
    app.delete("/planac/atividades/:id", controller.excluirAtividade);
}
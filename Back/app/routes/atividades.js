const controller = require("../controllers/atividades");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.use("/atividades", controllerAuth.checar);
    app.use("/atividadespornome", controllerAuth.checar);
    app.use("/atividadescadastradas", controllerAuth.checar);
    app.use("/atividadescadastradasporcategoria", controllerAuth.checar);
    app.use("/atividadescomcomprovante", controllerAuth.checar);
    app.use("/atividadessemcomprovante", controllerAuth.checar);
    app.use("/atividadesadicionarcomprovante", controllerAuth.checar);

    app.post("/atividades", controller.planejarAtividade);
    app.post("/atividadespornome", controller.buscarAtividadePorNome);
    app.get("/atividades/:id", controller.buscarAtividadePorId);
    app.get("/atividadescadastradas", controller.listarAtividadesCadastradas);
    app.get("/atividadescadastradasporcategoria/:id", controller.listarAtividadesCadastradasPorCategoria);
    app.get("/atividadescomcomprovante", controller.listarAtividadesComComprovante);
    app.get("/atividadessemcomprovante", controller.listarAtividadesSemComprovante);
    app.put("/atividades/:id", controller.editarAtividade);
    app.put("/atividadesadicionarcomprovante/:id", controller.adicionarComprovante);
    app.delete("/atividades/:id", controller.excluirAtividade);
}
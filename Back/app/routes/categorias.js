const controller = require("../controllers/categorias");

module.exports = function(app){
    app.post("/planac/categorias", controller.inserirCategoria);
    app.get("/planac/categorias", controller.listarCategorias);
    app.get("/planac/categorias/:id", controller.buscarCategoriaPorId);
    app.put("/planac/categorias/:id", controller.editarCategoria);
    app.delete("/planac/categorias/:id", controller.excluirCategoria);
}
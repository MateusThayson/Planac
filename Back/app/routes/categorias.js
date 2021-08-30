const controller = require("../controllers/categorias");

module.exports = function(app){
    app.post("/categorias", controller.inserirCategoria);
    app.get("/categorias", controller.listarCategorias);
    app.get("/categorias/:id", controller.buscarCategoriaPorId);
    app.put("/categorias/:id", controller.editarCategoria);
    app.delete("/categorias/:id", controller.excluirCategoria);
}
const controller = require("../controllers/comentarios");
const controllerAuth = require("../controllers/auth");


module.exports = function(app){
    app.use("/comentarios", controllerAuth.checar);

    app.post("/comentarios", controller.inserirComentario);
    app.get("/comentarios", controller.listarComentarios);
    app.delete("/comentarios/:id", controller.removerComentario);
}

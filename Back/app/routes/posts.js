const controller = require("../controllers/posts");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.use("/posts", controllerAuth.checar);

    app.post("/posts", controller.inserirPost);
    app.get("/posts", controller.listarPosts);
    app.get("/posts/:id", controller.buscarPostPorId);
    app.get("/posts/:id/comentarios", controller.obterComentarios);
    app.delete("/posts/:id", controller.removerPost);
}